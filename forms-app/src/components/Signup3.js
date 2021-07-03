import React from 'react'
import '../App.css'
import { TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'


const Signup3 = () => {
    return (
        <div>
           
           <div className="icon">
               <div className="icon_class"></div>
               <div className="text">Sign Up</div>
           </div>

           <div className="row m-2">
               <div className="col-6">
                   <TextField id="firstname" type="text" variant="outlined" label="Enter First Name" fullWidth/>
               </div>
               <div className="col-6">
               <TextField id="lastname" type="text" variant="outlined" label="Enter Last Name" fullWidth/>
               </div>
           </div>

           <div className="row">
           <TextField id="email" type="email" variant="outlined" label="Enter email" fullWidth/>
           <TextField id="password" type="password" variant="outlined" label="Enter password" fullWidth/>
           <Button variant="contained" color="primary">Create Account</Button>
           </div>

          

           <p className="text-center">
               <Link to="\login">
                   Already have an account ?
               </Link>
           </p>
           
        </div>
    )
}

export default Signup3
