const express = require('express');
const cors = require('cors');

require('dotenv').config();

const redisClient = require('./redisClient');
const visaBins = require('./visaBins');
const { lookupBin } = require('./services/binLookup');

const app = express();
app.use(cors());
app.use(express.json());

/* ==========================
LUHN VALIDATION
========================== */

function isValidLuhn(cardNumber) {
const cleaned = cardNumber.replace(/\D/g, '');


if (!cleaned) return false;

let sum = 0;
let shouldDouble = false;

for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned.charAt(i), 10);

    if (shouldDouble) {
        digit *= 2;

        if (digit > 9) {
            digit -= 9;
        }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
}

return (sum % 10) === 0;


}

/* ==========================
VISA PRODUCT MAPPING
========================== */

function mapVisaProduct(binInfo) {
const brand =
(binInfo?.brand || '').toLowerCase();


if (brand.includes('infinite')) {
    return 'visa_infinite';
}

if (brand.includes('signature')) {
    return 'visa_signature';
}
if(product.include("platinum")){
        return "visa_platinum";
    }
if(product.include("gold")){
        return "visa_gold";
    }

return 'visa_classic';


}

/* ==========================
CARD VERIFICATION
========================== */

app.post('/api/verify-card', async (req, res) => {
try {
    console.log("=================================");
    console.log("BODY:", req.body);
    console.log("HEADERS:", req.headers['content-type']);
    console.log("=================================");
    //console.log("BODY RECEIVED:", req.body);
    const cardNumber = req.body?.cardNumber;

        if (!cardNumber) {
        return res.status(400).json({
            valid: false,
            message: 'Card number required'
        });
    }

        const cleaned = cardNumber.replace(/\D/g, '');

        if (cleaned.length < 13 || cleaned.length > 19) {
            return res.status(400).json({
                valid: false,
                message: 'Invalid card length'
        });
    }

        if (!isValidLuhn(cleaned)) {
            return res.status(400).json({
                valid: false,
                message: 'Failed Luhn validation'
        });
    }

    const bin = cleaned.substring(0, 8);
    const last4 = cleaned.slice(-4);

    /* Check Redis cache first */
    let binInfo = null;

    const cachedBin =
        await redisClient.get(`bin: ${bin}`);

    if (cachedBin) {
        binInfo = JSON.parse(cachedBin);
        console.log(`BIN Cache Hit: ${bin}`);
    } else {
        binInfo = await lookupBin(bin);

        if (binInfo) {
            await redisClient.set(
                `bin:${bin}`,
                JSON.stringify(binInfo),
                { EX: 86400 } // 24 hours
            );
        }

        console.log(`BIN API Lookup: ${bin}`);
    }

    const bin6 = cleaned.substring(0, 6);

    const localBin = visaBins[bin6];

    let issuer;
    let cardType;

    if (localBin) {
        issuer = localBin.issuer;
        cardType = localBin.cardType;
    } else {
        issuer =
            binInfo?.bank?.name ||
            'Visa Partner Bank';

        cardType =
            mapVisaProduct(binInfo);
}

    const sessionId =
        Math.random()
            .toString(36)
            .substring(2, 15);

    await redisClient.set(
        `session:${sessionId}`,
        JSON.stringify({
            bin,
            last4,
            issuer,
            cardType
        }),
        {
            EX: 900
        }
    );

    return res.json({
        valid: true,
        sessionId,
        issuer,
        cardType,
        message:
            'Card validated successfully'
    });

} catch (error) {
    console.error(error.message);

    return res.status(500).json({
        valid: false,
        message: 'Internal server error'
    });
}

});

/* ==========================
SESSION LOOKUP
========================== */

app.get('/api/session/:id', async (req, res) => {
try {
const sessionData =
await redisClient.get(
`session:${req.params.id}`
);


    if (!sessionData) {
        return res.status(404).json({
            message: 'Session expired'
        });
    }

    return res.json(
        JSON.parse(sessionData)
    );

} catch (error) {
    console.error(error.message);

    return res.status(500).json({
        message: 'Failed to fetch session'
    });
}


});

/* ==========================
HEALTH CHECK
========================== */

app.get('/api/health', async (req, res) => {
try {
await redisClient.ping();


    res.json({
        status: 'ok',
        redis: 'connected'
    });

} catch (error) {
    res.status(500).json({
        status: 'error',
        redis: 'disconnected'
    });
}


});

/* ==========================
START SERVER
========================== */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(
`Server running on port ${PORT}`
);
});
