const axios = require("axios");

async function lookupBin(bin) {
  try {
    const response = await axios.get(
      `https://lookup.binlist.net/${bin}`
    );
    console.log(
    "BIN RESPONSE:",
    JSON.stringify(response.data, null, 2)
);
    return response.data;
  } 
  catch (error) {
    console.error("BIN lookup error:");

    console.error("Message:", error.message);
    console.error("Code:", error.code);

    if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Data:", error.response.data);
    }

    return null;
}
}

module.exports = { lookupBin };
