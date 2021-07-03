import React from 'react'
import { Button, Card, CardContent, Grid, TextField, Typography } from '@material-ui/core'

const CreateAccount = () => {
    return (
        <div>
            <Grid style={{padding:"80px 5px 0 5px"}}>
               <Card style={{maxWidth:600, margin:"0 auto"}}>
                    <CardContent>
                        <Typography variant="h4" color="primary">
                            Create an account
                        </Typography>

                        <Typography variant="subtitle1" color="textSecondary">
                            Fill all the mandatory fields to create an account.
                        </Typography>

                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder="Enter first name" label="First name" variant="outlined" fullWidth required/>
                                </Grid>

                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder="Enter last name" label="Last name" variant="outlined" fullWidth required/>
                                </Grid>

                                <Grid xs={12} item>
                                    <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required/>
                                </Grid>

                                <Grid xs={12} item>
                                    <TextField type="number" placeholder="Enter phone number" label="Phone Number" variant="outlined" fullWidth required/>
                                </Grid>

                                <Grid xs={12} item>
                                    <TextField multiline rows={4} placeholder="Type your message here" label="Message" variant="outlined" fullWidth required/>
                                </Grid>

                                <Grid xs={12} item>
                                    <Button type="submit" color="primary" variant="contained" fullWidth>Submit</Button>
                                </Grid>

                                
                            </Grid>
                        </form>
                    </CardContent>
               </Card>
            </Grid>
        </div>
    )
}

export default CreateAccount
