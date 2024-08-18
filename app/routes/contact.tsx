import { ActionFunctionArgs } from "@remix-run/node";
import nodemailer from "nodemailer";


export async function action({request}: ActionFunctionArgs) {
    const transporter = nodemailer.createTransport({
        host: "",
        port: "",
        secure: "",
        auth: {
            user: "",
            pass: ""
        }
    });

    const body = await request.formData();

    const newMail = {
        email: body.get("email"),
        sms: body.get("sms"),
        content: body.get("content"),
    };

    try { transporter.sendMail({
            from: '"Eemeli Myllymäki" <contact@eemelimyllymaki.fi>',
            to: newMail.email,
            subject: "Kiitos yhteydenotosta",
            text: "Testi"
        });
    }
    catch {
        console.error;
    }

    return(null);
}