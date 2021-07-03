import React, { useState } from 'react'
import { Paper, Tab, Tabs, Box, Typography} from '@material-ui/core'
import Loginform from '../codeenemy/Loginform';
import Signup from '../codeenemy/Signup'


const SignInOutContaier = () => {
    const [value, setValue] = useState(0)
    const paperStyle = {width:380, margin:"20px auto"}
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

    return (
<Paper elevation={20} style={paperStyle}>
  <Tabs
    value={value}
    indicatorColor="primary"
    textColor="primary"
    onChange={handleChange}
    aria-label="disabled tabs example"
  >
    <Tab label="Sign in" />
    <Tab label="Sign Up" />
  </Tabs>

    <TabPanel value={value} index={0}>
        <Loginform handleChange={handleChange}/>
    </TabPanel>

    <TabPanel value={value} index={1}>
        <Signup/>
    </TabPanel>
</Paper>
    )
}

export default SignInOutContaier
