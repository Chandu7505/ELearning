import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const mailSender = async (email, title, body) => {                         
    try{
            let transporter = nodemailer.createTransport({                  
                host:process.env.MAIL_HOST,
                port: 587,
                secure: false,                             
                auth:{
                    user: process.env.MAIL_USER,                           
                    pass: process.env.MAIL_PASS,
                }
            })

            // console.log("email test");

            let info = await transporter.sendMail({
                from: process.env.MAIL_USER,
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            console.log("info....",info);
            return info;
    }
    catch(error) {
        console.log(error.message);
    }
}
export default mailSender;

