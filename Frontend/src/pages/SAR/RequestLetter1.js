import React from 'react'
import '../../style/form.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';




function RequestLetter() {
  return (
    <div className="Form"> 
      
      <Grid>
        <Card style={{ maxWidth: 650, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
           
          <Typography gutterBottom variant="h4">
            Application for Transcripts/Letter of Degree-Status  Undergraduate  Degrees - Computer Science / Software Engineering Degrees
           
          </Typography> 
            <Typography variant="body2" color="black" component="p" sx={{textAlign:'left'}} gutterBottom>
            <br></br><br></br>
                <Divider variant="middle" />
                <br></br><br></br>
                You are advised to see the payment schedule below and make the appropriate amount for your application including the postage fee. You are required to upload a photo/scanned image of the payment voucher with a bank stamp during the submission of the online application. Please note that without valid payment information, your application will not be processed.<br></br><br></br>

                Should you need further assistance , please contact us via exam@ucsc.cmb.ac.lk. or +94 011-2581245 during 9.00 am to 3.30 pm on weekdays except for public holidays. <br></br><br></br>

                Senior Assistant Registrar / Examinations & Registration Division, UCSC<br></br><br></br>

                University of Colombo School of Computing<br></br><br></br>

                No. 35, Reid Avenue, Colombo 7<br></br><br></br>

                Sri Lanka<br></br><br></br>
                <Divider variant="middle" />
                <br></br>
                <h4>sasanisamanga@gmail.com </h4> Switch accounts<br></br><br></br>
                
                The name and photo associated with your Google Account will be recorded when you upload files and submit this form. Only the email address you enter is part of your response.<br></br><br></br>
                *Required
          </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                <h5 >Email </h5>
                  <TextField type="email" placeholder="Your Answer" label="Email" variant="outlined" fullWidth required />
                </Grid>
                
                <Typography variant="body2" color="black" component="p" sx={{textAlign:'left', borderColor:'black'}} gutterBottom>
                <br></br><br></br>
                <Divider variant="middle" />
                <br></br><br></br>
                <h4>Processing of Transcripts/Degree Status Letters</h4>
                Upon successful submission of the application, the soft copy/ies of the requested documents (transcript or degree status letter or other letters) will be issued to the applicant through email and will receive the printed version of the documents by registered post within 14 working days.
                <br></br><br></br>
                The Examinations & Registration Division of the UCSC will not take any responsibility for the postal delay.
                </Typography> 

                <Typography variant="body2" color="black" component="p" sx={{textAlign:'left', borderColor:'black'}} gutterBottom>
                <br></br><br></br>
                <Divider variant="middle" />
                <br></br><br></br>
                <h4>To certify an Academic Certificate as a true copy</h4>
                
                
                Applicant shall physically bring the original academic documents to Examinations & Registration Division, UCSC in order to certify as true. Rs. 250.00 will be charged for each document.
                </Typography> 
                <Typography variant="body2" color="black" component="p" sx={{textAlign:'left', borderColor:'black'}} gutterBottom>
                <br></br><br></br>
                <Divider variant="middle" />
                <br></br><br></br>
                <h4>Payment Methods</h4>
                
                Applicants are allowed to make the relevant fees to the given bank account (UCSC undergraduate programme) at any Peoples' bank branch onsite or online using the online banking services.
                </Typography> 
                <Typography variant="body2" color="black" component="p" sx={{textAlign:'left', borderColor:'black'}} gutterBottom>
                <br></br><br></br>
                <Divider variant="middle" />
                <br></br><br></br>
                <h4>Pickup Methods</h4>
                
                Transcripts and other documents will be posted (registered) to a local/international address that mention in the form. The processing fee of such requests includes the applicable postage fee.
                <br></br><br></br>
                If the pick up method is "in person", please do not pay the postage fee 
                
                </Typography> 
                <Typography variant="body2" color="black" component="p" sx={{textAlign:'left', borderColor:'black'}} gutterBottom>
                <br></br><br></br>
                <Divider variant="middle" />
                <br></br><br></br>
                <h4>Sending the educational certificates directly to higher educational institution or any other organization</h4>
                
                If you wish to send your educational certificates directly to higher educational institution or any other organization, please provide information at the "Additional Information and Comments" 
                </Typography> 

                <Typography variant="body2" color="black" component="p" sx={{textAlign:'left', borderColor:'black'}} gutterBottom>
                <br></br><br></br>
                <Divider variant="middle" />
                <br></br><br></br>
                <h4>Download the Payment Voucher</h4>
                <Link href="https://drive.google.com/file/d/14Acl-QLpajLx9XLn9hgIybYraY-msVCR/view?usp=sharing" underline="always">
                  {'underline="always"'}
                </Link>
                

                <br></br><br></br>
                <Divider variant="middle" />
                <br></br>
                </Typography> 

                <Grid item xs={12}>
                    <h5 >Applicant's full name</h5>
                  <TextField type="text" placeholder="Your Answer"  variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <h5 >Applicant's name with Initials (if the applicant is not the student, an authorized letter issued by the student should be submitted)</h5>
                  <TextField type="text" placeholder="Your Answer"  variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <h5 >NIC/passport number/driving license number</h5>
                  <TextField type="text" placeholder="Your Answer"  variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <h5 >Contact numbers (mobile) of the applicant</h5>
                  <TextField type="text" placeholder="Your Answer"  variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <h5 >Alternate contact number of the applicant(land phone number/other mobile number)</h5>
                  <TextField type="text" placeholder="Your Answer"  variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <h5 >Email address of the student if applicant is applying on student's behalf(i.e applicant is not the student)</h5>
                  <TextField type="text" placeholder="Your Answer"  variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <h5 >Applicant's address</h5>
                  <TextField type="text" placeholder="Your Answer"  variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <h5 >Index number of the student</h5>
                  <TextField type="text" placeholder="Your Answer"  variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <h5 >Registration number of student</h5>
                  <TextField type="text" placeholder="Your Answer"  variant="outlined" fullWidth required />
                </Grid>
                
                
                <Grid>
                <h5 ><br></br></h5>
                  <Button type="submit" variant="contained" color="primary" fullWidth><a href="/requestletter">Next</a></Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}

export default RequestLetter

