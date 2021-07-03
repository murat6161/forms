import { Card, Grid, TextField, CardContent, Button, Typography } from '@material-ui/core'
import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <h1 align="center">React-App</h1>
            <Card style={{maxWidth:450, margin:"0 auto" , padding:"20px 5px"}}>
                <CardContent>
                 <Typography gutterBottom  variant="h5">Contact Us</Typography>
                <Typography gutterBottom color="textSecondary" variant="body2" component="p">Fill up the form and our team will get back to you within 24 hours.</Typography>
                    <form>
                    
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                            <TextField label="First Name" placeholder="First name" variant="outlined" fullWidth required/>
                        </Grid>

                        <Grid xs={12} sm={6} item>
                            <TextField label="Last Name" placeholder="Last name" variant="outlined" fullWidth required/>
                        </Grid>

                        <Grid xs={12} item>
                        <TextField type="email" label="Email" placeholder="Enter email" variant="outlined" fullWidth required/>
                        </Grid>

                        <Grid xs={12} item>
                        <TextField type="number" label="Phone number" placeholder="Enter phone number" variant="outlined" fullWidth required/>
                        </Grid>

                        <Grid xs={12} item>
                        <TextField  label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required/>
                        </Grid>

                        <Grid xs={12} item>
                            <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                        </Grid>



                    </Grid>
                    </form>
                </CardContent>
               
            </Card>
        </div>
    )
}

export default ContactUs
