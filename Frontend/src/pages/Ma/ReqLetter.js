import { Box, Input, label, Button, Typography,Card, CardContent,Grid } from "@mui/material";
import emailjs from "emailjs-com";
import React from 'react';
import { useParams } from "react-router";
import MaNavBar from '../../Component/Ma/MaNavBar';
import './../../style/ma/reqLetter.css';

export default function ReqLetter() {
    
  const { email,stu_year,fName,lName } = useParams();
  console.log(email)
  console.log(stu_year)

  const html = "This email is sending to confirm that the " + fName + " " + lName + " is an Undergraduate of University of Colombo School of Computing and currently studing in the " + stu_year +" of academics.";

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
        <Box sx={{backgroundColor:"#E4EBF5", minHeight:"100vh"}}>
            <MaNavBar />
            <div sx={{paddingTop:"100px"}} >
                <div className="container" >
                <Card sx={{backgroundColor:"#E4EBF5", width:"70%", margin:"5px", padding:"30px", marginLeft:"230px"}}>
        <CardContent>
                <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            {/* <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" name="name"/>
                            </div> */}
                            <div className="col-8 form-group pt-2 mx-auto" >
                                <Grid container spacing={2} >
                                    <Grid item xs={4} >
                                    <Typography id="nameLabel" >Email</Typography>
                                    </Grid>
                                    <Grid item xs={8} align="left">
                                    <input id="fieldInput" value={email} type="email" className="form-control" placeholder="Email Address" name="email"/>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <Grid container spacing={2}>
                                    <Grid item xs={4} >
                                        <Typography id="nameLabel" >Subject</Typography>
                                    </Grid>
                                    <Grid item xs={8} align="left">
                                        <input id="fieldInput" value="Confirmation Letter" type="text" className="form-control" placeholder="Subject" name="subject"/>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <Grid container spacing={2}>
                                    <Grid item xs={4} >
                                        <Typography id="nameLabel" >Content</Typography>
                                    </Grid>
                                    <Grid item xs={8} align="left">
                                        <textarea value={html} className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"> </textarea>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <input id="submitBtn" type="submit" className="btn btn-info" value="Send Message"></input>
                            </div>
                        </div>
                    </form>
                    </CardContent>
      </Card>
                </div>
            </div>

        </Box>


        
        
    )
}

