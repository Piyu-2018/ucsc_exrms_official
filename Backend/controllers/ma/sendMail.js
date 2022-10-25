const nodemailer = require('nodemailer');

async function sendMail(subject,text,html,email) {
    try {
        
        const transport = nodemailer.createTransport({
            service : 'gmail',
            auth:{
                user : 'ucscexrms@gmail.com',
                pass : 'dppsh22@A'
            }
        })
        const mailOption = {
            from : 'UCSC EXRMS <ucscexrms@gmail.com>' , 
            to : email,
            subject : subject,
            text : text,
            html : html,
        }
        const result = await transport.sendMail(mailOption)
        return result
    } catch (error) {
        
    }
}
 

module.exports = { sendMail } 



