import React from 'react'
import '../../style/form.css';
import { Box, Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import MenuItem from '@mui/material/MenuItem';

const degrees = [
    {
      value: 'Bachelor of Science in Computer Science',
      label: 'Bachelor of Science in Computer Science',
    },
    {
      value: 'Bachelor of Science (Honours) in Computer Science',
      label: 'Bachelor of Science (Honours) in Computer Science',
    },
    {
      value: 'Bachelor of Science (Honours) in Software Engineering',
      label: 'Bachelor of Science (Honours) in Software Engineering',
    },
   
  ];

  const year = [
    {
      value: 'Year 1',
      label: 'Year 1',
    },
    {
      value: 'Year 2',
      label: 'Year 2',
    },
    {
      value: 'Year 3',
      label: 'Year 3',
    },
    {
      value: 'Year 4',
      label: 'Year 4',
    },
  ];

  const status = [
    {
      value: 'Completed',
      label: 'Completed',
    },
    {
      value: 'Pending',
      label: 'Pending',
    },
    
  ];

  const duration = [
    {
      value: '3 Year',
      label: '3 Year',
    },
    {
      value: '4 Year',
      label: '4 Year',
    },
    
  ];

  const classstatus = [
    {
      value: 'First Class',
      label: 'First Class',
    },
    {
        value: 'Second (Upper Class)',
        label: 'Second (Upper Class)',
      },
      {
        value: 'Second (Lower Class)',
        label: 'Second (Lower Class)',
      },
    {
      value: 'Pass',
      label: 'Pass',
    },
    
  ];

  const no = [
    {
      value: '1',
      label: '1',
    },
    {
        value: '2',
        label: '2',
      },
      {
        value: '3',
        label: '3',
      },
    {
      value: '4',
      label: '4',
    },
    {
        value: '5',
        label: '5',
      },
    
  ];

  const method = [
    {
      value: 'Postage - Local (Registered) (LKR 125.00)',
      label: 'Postage - Local (Registered) (LKR 125.00)',
    },
    {
      value: 'Postage - International (Registered) (LKR 1,250.00)',
      label: 'Postage - International (Registered) (LKR 1,250.00)',
    },
    {
        value: 'Collect in Person',
        label: 'Collect in Person',
      },
  ];
function RequestLetter() {
    const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

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
                <br></br>
                <h4>sasanisamanga@gmail.com </h4>Switch accounts<br></br><br></br>
                
                The name and photo associated with your Google Account will be recorded when you upload files and submit this form. Only the email address you enter is part of your response.<br></br><br></br>
                *Required
                
                <br></br><br></br>
                <Divider variant="middle" />
          </Typography>  
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                <h5 >Select degree programme </h5>
                <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField
                    id="outlined-select-currency"
                    maxWidth="100%"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    
                    >
                    {degrees.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField></Box>
                </Grid> 

                <Grid item xs={12}>
                    <h5 >Select your study year</h5>
                  <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField
                    id="outlined-select-currency"
                    maxWidth="100%"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    
                    >
                    {year.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField></Box>
                </Grid>
                <Grid item xs={12}>
                <h5 >Degree status</h5>
                <h6>Select your degree status whether still pending or completed</h6>
                  <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField
                    id="outlined-select-currency"
                    maxWidth="100%"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    
                    >
                    {status.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField></Box>
                </Grid>
                <Grid item xs={12}>
                    <h5 >Duration of the degree programme</h5>
                    <h6>Applied only for completed qualifications</h6>
                  <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField
                    id="outlined-select-currency"
                    maxWidth="100%"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    
                    >
                    {duration.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField></Box>
                </Grid>
                <Grid item xs={12}>
                    <h5 >Class/Status of final qualification</h5>
                    
                  <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField
                    id="outlined-select-currency"
                    maxWidth="100%"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    
                    >
                    {classstatus.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField></Box>
                </Grid>
                <Grid item xs={12}>
                    <h5 >No. of copies requested - Academic transcripts with grades / Records of examinations</h5>
                    <h6>Rs. 750.00 for each document</h6>
                  <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField
                    id="outlined-select-currency"
                    maxWidth="100%"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    
                    >
                    {no.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField></Box>
                </Grid>
                <Grid item xs={12}>
                    <h5 >No. of additional copies requested - Academic transcripts with grades / Records of examinations</h5>
                    <h6>Rs. 750.00 for each document</h6>
                  <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField
                    id="outlined-select-currency"
                    maxWidth="100%"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    
                    >
                    {no.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField></Box>
                </Grid>
                <Grid item xs={12}>
                    <h5 >Degree/Student Status/Other letters</h5>
                    <h6>Please describe the purpose and number of copies required. Note : Rs. 250 is charged for each copy.</h6>
                    <TextField type="text" placeholder="Your Answer"  variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <h5 >No. of copies requested - Degree/Student Status/Other letters</h5>
                    <h6>Rs. 250.00 for each document</h6>
                    <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField
                    id="outlined-select-currency"
                    maxWidth="100%"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    
                    >
                    {no.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField></Box>
                </Grid>
                <Grid item xs={12}>
                    <h5 >No. of additional copies requested - Degree/Student Status/Other letters</h5>
                    <h6>Rs. 250.00 for each document</h6>
                    <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField
                    id="outlined-select-currency"
                    maxWidth="100%"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    
                    >
                    {no.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField></Box>
                </Grid>
                <Grid item xs={12}>
                    <h5 >Document(s) pickup method</h5>
                    <h6>If your pickup method is Postage, you need to make the relevant payment. And if you are going to pickup in person, you don't need to make a payment. The "Collect in Person" option is only applicable when the university premises is allowed for the students by the government.</h6>
                    <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField
                    id="outlined-select-currency"
                    maxWidth="100%"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    
                    >
                    {method.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField></Box>
                </Grid>
                <Grid item xs={12}>
                    <h5 >Local/International postal address</h5>
                    <h6>If your pickup method is Postage, you're required to fill this section as appropriate. And relevant Postage fee need to be paid.</h6>
                  <TextField type="text" placeholder="Your Answer"  variant="outlined" fullWidth required />
                </Grid>
                 <Grid item xs={12}>
                    <h5 >Total amount paid</h5>
                    
                  <TextField type="text" placeholder="Your Answer"  variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <h5 >Additional Information and Comments</h5>
                    
                  <TextField type="text" placeholder="Your Answer"  variant="outlined" fullWidth required />
                </Grid>
                
                <Typography variant="body2" color="black" component="p" sx={{textAlign:'left', borderColor:'black'}} gutterBottom>
                <br></br><br></br>
                <Divider variant="middle" />
                <br></br><br></br>
                <h4>Notice - When uploading the payment slip</h4>
                
                When uploading the payment slip, you're required to rename the file with your Index No. and last name with initials.
                <br></br><br></br>
                [Index No.]-[Last Name with initials]   
                <br></br><br></br>
                e.g: 19896789-LAKMAL SND.pdf
                
                </Typography> 
                <Typography variant="body2" color="black" component="p" sx={{textAlign:'left', borderColor:'black'}} gutterBottom>
                <br></br><br></br>
                <Divider variant="middle" />
                <br></br><br></br>
                <h4>Attach payment slip</h4>
                
                The file size must be less than 10MB and the file type must be PDF or JPEG image
                <br></br><br></br>
                <Button variant="contained" endIcon={<FileUploadIcon />}>
                    Send
                </Button>
                <br></br><br></br>
                <Divider  />
                <br></br><br></br>
                </Typography> 

                

              </Grid>
              <Grid>
                <h5 ></h5>
                  <Button type="submit" variant="contained" color="success" fullWidth><a href='/requestletter1'>Back</a></Button>
                  <h6></h6>
                  <Button type="submit" variant="contained" color="error" fullWidth>Submit</Button>
                  
                </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}

export default RequestLetter

