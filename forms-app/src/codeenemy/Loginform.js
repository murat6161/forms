import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Formik, Form, Field , ErrorMessage} from 'formik'
import * as Yup from 'yup'

const Loginform = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "59vh",
    width: 340,
    margin: "0 auto",
  };

  const avatarStyle = { backgroundColor: "#077682" };
  const btnstyle = { margin: "20px 0" };
  const initialValues = {
      username:"",
      password:"",
      remember:false
  }

  const validationSchema = Yup.object().shape({
      username:Yup.string().email('Please enter valid email').required("Required"),
      password:Yup.string().required("Required")
  })
  

  const onSubmit=(values, props) => {
      console.log("Values:", values)
      setTimeout(()=>{
        props.resetForm()
        props.setSubmitting(false)
      }, 2000)
      
  }

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {(props) => (
            <Form>
              <Field as={TextField}
                name="username"
                label="Username"
                placeholder="Enter Username"
                fullWidth
                required
                helperText={<ErrorMessage name="username"/>}
              />
              <br />
              <br />
              <Field as={TextField}
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
                fullWidth
                required
                helperText={<ErrorMessage name="password"/>}
              />
              <FormControlLabel
                name="remember"
                control={<Field as={Checkbox} name="checkedB" color="primary" />}
                label="Remember me"
              />

        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          disabled={props.isSubmitting}
        >
          {props.isSubmitting ? "Loading" : "Sign In"}
        </Button>

            </Form>
          )}
        </Formik>

        

        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>

        <Typography>
          Do you have an acoount ?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Loginform;
