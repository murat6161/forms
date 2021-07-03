import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import {
  FormControl,
  FormLabel,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FormHelperText } from '@material-ui/core'

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const Signup = () => {

    

    const initialValues = {
        name:"",
        email:"",
        gender:"",
        phoneNumber:"",
        password:"",
        confirmPassword:"",
        termsAndConditions:false

    }

    const validationSchema=Yup.object().shape({
        name:Yup.string().min(3, "It's too short").required("Required"),
        email:Yup.string().email("Enter valid email").required("Required"),
        gender:Yup.string().required("Required"),
        phoneNumber:Yup.number().typeError("Enter valid Phone Number").required("Required"),
        password:Yup.string().min(8, "Password minimum length should 8").required("Required"), 
        confirmPassword:Yup.string().oneOf([Yup.ref('password')], "Pasword not matched"),
        termsAndConditions:Yup.string().oneOf(["true"], "Accept terms and conditions")

    })

    const onSubmit= (values, props) => {
        console.log("values:", values)
        

        setTimeout(()=>{
           props.resetForm()
           props.setSubmitting(false)
       }, 2000)
    }

  const paperStyle = { padding: "30px 20px", width: 340, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  //const marginTop = { marginTop: 10 };
  
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h1 style={headerStyle}>Sign up</h1>
          <Typography variant="caption">
            Please fill this form to create an account
          </Typography>
        </Grid>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
       { (props) => (
            <Form>
            <Field as={TextField} fullWidth name="name" label="Name" placeholder="Enter your name" helperText={<ErrorMessage name="name"/>} />
            <Field as={TextField} fullWidth type="email" name="email" label="Email" placeholder="Enter your email" helperText={<ErrorMessage name="email"/>}/>
  
            <FormControl component="fieldset" >
              <FormLabel component="legend">Gender</FormLabel>
              <Field as={RadioGroup}
                aria-label="gender"
                name="gender"
                style={{ display: "initial" }}
               
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </Field>
            </FormControl>
            <FormHelperText><ErrorMessage name="gender"/></FormHelperText>
  
            <Field as={TextField}
              name="phoneNumber"
              fullWidth
              label="Phone Number"
              placeholder="Enter your phone number"
              helperText={<ErrorMessage name="phoneNumber"/>}
            />
            <Field as={TextField}
              name="password"
              type="password"
              fullWidth
              label="Password"
              placeholder="Enter a password"
              helperText={<ErrorMessage name="password"/>}
            />
            <Field as={TextField}
              name="confirmPassword"
              type="password"
              fullWidth
              label="Confirm Password"
              placeholder="Confirm your password"
              helperText={<ErrorMessage name="confirmPassword"/>}
            />
            <FormControlLabel
              control={<Field as={Checkbox} name="termsAndConditions" />}
              label="I accept the terms and conditions."
              helperText={<ErrorMessage name="termsAndConditions"/>}
            />
            <FormHelperText><ErrorMessage name="termsAndConditions"/></FormHelperText>
            
            {/* <Button type="submit" variant="contained" disabled={props.isSubmitting} color="primary">
             Sign Up
            </Button> */}

             <Button type="submit" variant="contained" disabled={props.isSubmitting} color="primary">
                 {props.isSubmitting ? "Loading" : "Sign Up"}
            </Button>

          </Form>
           
       ) }

        </Formik>


       
      </Paper>
    </Grid>
  );
};

export default Signup;
