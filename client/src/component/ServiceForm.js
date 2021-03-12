import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  InputLabel,
  Grid,
  MenuItem,
  Select,
  FormControl,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import AppBar from "./GlobalHeader";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ServiceForm({
  serviceFormData,
  setserviceFormData,
  handleNext,
  handleBack,
  setOpen,
  step,
}) {
  const classes = useStyles();
  const formName = "Services";

  // const [serviceFormData, setserviceFormData] = useState({
  //   TokenNo: "",
  //   ServiceDate: new Date(),
  //   MRNo: "recID",
  //   Ward: "",
  //   Amount: "",
  //   TotalAmount: "",
  //   PatientContribution: "",
  //   Remarks: "",
  //   CreatedUser: "Admin",
  //   ModifyUser: "Admin",
  // });

  const handleSubmit = () => {
    console.log(serviceFormData);
    // next();
  };
  return (
    <div>
      <AppBar
        setOpen={setOpen}
        step={step}
        handleNext={handleNext}
        handleBack={handleBack}
        formName={formName}
      />{" "}
      <div
        style={{
          padding: 16,
          margin: "auto",
          maxWidth: "80%",
          justifyContent: "center",
        }}
      >
        <Grid container>
          <Grid sm={12}>
            <Grid container spacing={4}>
              <Grid item lg={7} sm={12}>
                <Grid container spacing={2}>
                  <Grid item md={4} sm={12} lg={3}>
                    <TextField
                      value={serviceFormData.MRNo}
                      id="MRNo"
                      fullWidth
                      type="text"
                      disabled={true}
                      label="M.R. #"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} lg={3}>
                    <TextField
                      value={serviceFormData.TokenNo}
                      id="TokenNo"
                      type="text"
                      fullWidth
                      onChange={(e) =>
                        setserviceFormData({
                          ...serviceFormData,
                          TokenNo: e.target.value,
                        })
                      }
                      label="Token No"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} lg={3}>
                    <TextField
                      id="ServiceDate"
                      label="Service Date"
                      type="date"
                      value={serviceFormData.ServiceDate}
                      fullWidth
                      onChange={(e) =>
                        setserviceFormData({
                          ...serviceFormData,
                          ServiceDate: e.target.value,
                        })
                      }
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item md={4} sm={12} lg={3}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-helper-label">
                        Gender
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="Gender"
                        value={serviceFormData.Gender}
                        onChange={(e) =>
                          setserviceFormData({
                            ...serviceFormData,
                            Gender: e.target.value,
                          })
                        }
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={4} sm={12} lg={3}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-helper-label">
                        Ward
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="Ward"
                        value={serviceFormData.Ward}
                        onChange={(e) =>
                          setserviceFormData({
                            ...serviceFormData,
                            Ward: e.target.value,
                          })
                        }
                      >
                        <option value="Ward #1">Ward #1</option>
                        <option value=" Ward #2">Ward #2</option>
                        <option value="Ward #3">Ward #3</option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={4} sm={12} lg={3}>
                    <TextField
                      value={serviceFormData.Amount}
                      id="Amount"
                      type="number"
                      fullWidth
                      onChange={(e) =>
                        setserviceFormData({
                          ...serviceFormData,
                          Amount: e.target.value,
                        })
                      }
                      label="Amount"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} lg={3}>
                    <TextField
                      value={serviceFormData.TotalAmount}
                      id="TotalAmount"
                      type="number"
                      fullWidth
                      onChange={(e) =>
                        setserviceFormData({
                          ...serviceFormData,
                          TotalAmount: e.target.value,
                        })
                      }
                      label="Total Amount"
                    />
                  </Grid>
                  <Grid item md={4} sm={12} lg={3}>
                    <TextField
                      value={serviceFormData.PatientContribution}
                      id="PatientContribution"
                      type="text"
                      fullWidth
                      onChange={(e) =>
                        setserviceFormData({
                          ...serviceFormData,
                          PatientContribution: e.target.value,
                        })
                      }
                      label="Contribution"
                    />
                  </Grid>
                  <Grid item md={8} sm={12} lg={6}>
                    <TextField
                      value={serviceFormData.Remarks}
                      id="Remarks"
                      type="text"
                      fullWidth
                      onChange={(e) =>
                        setserviceFormData({
                          ...serviceFormData,
                          Remarks: e.target.value,
                        })
                      }
                      label="Remarks"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={1} />
              <Grid item lg={4} sm={12}>
                <Grid container spacing={2}>
                  <Grid item md={6} sm={12} lg={6}>
                    <TextField
                      value={serviceFormData.TokenNo}
                      id="TokenNo"
                      type="text"
                      fullWidth
                      label="Token No"
                      disabled={true}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
