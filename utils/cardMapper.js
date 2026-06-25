function mapVisaProduct(binInfo) {
    const product = (binInfo?.brand || "").toLowerCase();

    if (product.includes("infinite")) {
        return "visa_infinite";
    }

    if (product.includes("signature")) {
        return "visa_signature";
    }
    if(product.include("platinum")){
        return "visa_platinum";
    }
    if(product.include("gold")){
        return "visa_gold";
    }

    return "visa_classic";
}

module.exports = { mapVisaProduct };
