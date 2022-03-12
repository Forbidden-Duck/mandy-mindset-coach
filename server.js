// Clear for start
console.clear();
// Load environment variables
require("dotenv").config(".env");

const app = require("express")();
const https = require("https"); // To create a HTTP secure server
// TODO BACKEND LOADERS
const PORT = parseInt(process.env.PORT, 10) || 6001;

(async () => {
    // TODO load the backend (await loaders(app))
    if (process.env.PROTOCOL === "https") {
        const fs = require("fs");
        https
            .createServer(
                {
                    key: fs.readFileSync(__dirname + "/../cert/key.pem"),
                    cert: fs.readFileSync(__dirname + "/../cert/cert.pem"),
                },
                app
            )
            .listen(PORT);
        console.log(`Server listening on https/${PORT}`);
    } else {
        app.listen(PORT, (err) => {
            if (err) {
                console.log("Error while listening for connections\n", err);
                process.exit(0);
            }
            console.log(`Server listening on http/${PORT}`);
        });
    }
})();

process.on("SIGINT", () => {
    console.log("\nShutting down...");
    process.exit(1);
});
