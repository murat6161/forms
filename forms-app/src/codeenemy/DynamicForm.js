import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { inputFormElements } from "../formElements";

const DynamicForm = () => {
  return (
    <div>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant="h4" color="primary">
              Create an account
            </Typography>

            <Typography variant="subtitle1" color="textSecondary">
              Fill all the mandatory fields to create an account.
            </Typography>

            <form>
              <Typography variant="body2" align="left" gutterBottom>
                Personal Info:
              </Typography>
              <Grid container spacing={1}>
                {inputFormElements.slice(0, 4).map((input) => (
                  <Grid xs={input.xs} sm={input.sm} item>
                    <TextField {...input} />
                  </Grid>
                ))}
              </Grid>

              <Typography variant="body2" align="left" gutterBottom>
                Adress:
              </Typography>

              <Grid container spacing={1}>
                {inputFormElements.slice(4, 9).map((input) => (
                  <Grid xs={input.xs} sm={input.sm} item>
                    <TextField {...input} />
                  </Grid>
                ))}
              </Grid>

              <Grid container spacing={1}>
                <Grid xs={12} align="right" item>
                  <Button
                    style={{ margin: "0 5px" }}
                    type="reset"
                    color="primary"
                    variant="outlined"
                  >
                    Reset
                  </Button>

                  <Button type="submit" color="primary" variant="contained">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default DynamicForm;
