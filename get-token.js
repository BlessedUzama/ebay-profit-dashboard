const clientId = process.env.EBAY_CLIENT_ID;
const clientSecret = process.env.EBAY_CLIENT_SECRET;

// 🛑 IMPORTANT: Use the RU_NAME that matches the link you are about to click
const RU_NAME = "BLESSED_UZAMA-BLESSEDU-Claude-idoomb";

// 🛑 WE WILL PASTE THE FRESH CODE HERE IN A MOMENT
const AUTH_CODE =
  "v%5E1.1%23i%5E1%23f%5E0%23p%5E3%23r%5E1%23I%5E3%23t%5EUl41XzE6NDQ4QzA1QUEzNUI1NEUwMEEwQTRDOEQ2Q0UxRDZGNTlfMF8xI0VeMTI4NA%3D%3D&expires_in=299";

const authHeader = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
  "base64",
);

async function getRefreshToken() {
  try {
    const response = await fetch(
      "https://api.sandbox.ebay.com/identity/v1/oauth2/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${authHeader}`,
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code: decodeURIComponent(AUTH_CODE),
          redirect_uri: RU_NAME,
        }),
      },
    );

    const data = await response.json();
    console.log("\n✅ SUCCESS! Here is your Token Payload:\n");
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getRefreshToken();
