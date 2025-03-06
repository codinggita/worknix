const nodemailer = require("nodemailer");

async function createTestAccount() {
    let testAccount = await nodemailer.createTestAccount();
    console.log("Ethereal Email: ", testAccount.user);
    console.log("Ethereal Password: ", testAccount.pass);
}

createTestAccount();
