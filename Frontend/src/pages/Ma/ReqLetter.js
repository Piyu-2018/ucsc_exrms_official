import { Box, Input, label, Button, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import React from 'react';

export default function ReqLetter() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('email_service', 'template_no7h8vg', e.target, 'keu2uiOoWRf4DAz2a')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <Box sx={{backgroundColor:"#E4EBF5", minHeight:"100vh",paddingTop:"100px" }}>
            
            <div sx={{paddingTop:"100px"}} >
                <div className="container" >
                <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" name="name"/>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="Send Message"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </Box>


        
        
    )
}

