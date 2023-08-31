const {NextResponse} = require("next/server");
const nodemailer = require("nodemailer");
import {render} from "@react-email/render";
import Trafik from "@/emails/trafik";
export async function POST(request) {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            user: process.env.SMTP_FROM,
            pass: process.env.SMTP_PASSWORD
        },
        requireTLS: true,
        logger: true
    });

    const emailHtml = render(Trafik({...data}));


    try {
        await transporter.sendMail({
                to: `"Sigortam Global" ${
                process.env.SMTP_TO
            }`,
            subject: `Sigortam Global üzerinden ${
                data.fullName.toLocaleUpperCase("tr")
            } bir ${
                data.formName
            } teklif isteği gönderdi.`,
            html: emailHtml
        });
        return NextResponse.json({
            message: "Teklif isteği başarıyla gönderildi!"
        }, {
            status: 200,
            statusText: "OK"
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: error.toString()
        }, {status: 500});
    }
}
