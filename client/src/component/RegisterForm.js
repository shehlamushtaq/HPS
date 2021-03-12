import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import NumberFormat from "react-number-format";
import RadioGroup from "@material-ui/core/RadioGroup";
import AppBar from "./GlobalHeader";

const RegisterForm = ({
  registrationFormData,
  setRegistrationFormData,
  handleNext,
  handleBack,
}) => {
  const [err, setErr] = useState("");
  const formName = "Registration";
  const [options, setOptions] = useState([]);
  // const [registrationFormData, setRegistrationFormData] = useState({
  //   MRNo: "",
  //   TokenNo: "",
  //   RegistrationDate: new Date(),
  //   Name: "",
  //   FatherOrHusband: "",
  //   DOB: new Date(),
  //   Age: "",
  //   Gender: "",
  //   Religion: "",
  //   District: "",
  //   City: "",
  //   Area: "",
  //   HousNo: "",
  //   Address: "",
  //   CNIC: "",
  //   Phone: "",
  //   OffPhone: "",
  //   Mobile: "",
  //   RefBy: "",
  //   Remarks: "",
  //   IsRejected: false,
  //   IsZakat: false,
  //   IsPAFEmp: false,
  //   MonthlyConsLimit: 0,
  //   ThumbImage: "",
  //   NOY: "",
  //   EmpID: "",
  //   IsStaff: false,
  //   CreateUser: "",
  //   ModifyUser: "",
  //   CreateDate: "",
  //   ModifyDate: "",
  // });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const [state, setState] = React.useState({
    gender: "",
    name: "gender",
  });

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  console.log(registrationFormData);

  const classes = useStyles();
  const validate = () => {
    setErr("this is error");
  };
  // const handleSubmit = () => {
  //   validate();
  //   console.log(err);
  //   console.log(registrationFormData);
  //   // next();
  // };
  const handleOption = (val) => {
    if (val == "islam") {
      setOptions([
        { val: true, opt: "Zakaat" },
        { val: false, opt: "Welfare" },
      ]);
    } else {
      setOptions([{ val: false, opt: "Welfare" }]);
    }
  };
const handleSubmit=()=>{
  //api call
  handleNext();
}
  return (
    <>
      <AppBar
        handleNext={handleSubmit}
        handleBack={handleBack}
        formName={formName}
      />
      <Typography variant="subtitle1" gutterBottom>
        Registration Form:
      </Typography>
      <div
        style={{
          padding: 16,
          margin: "auto",
          maxWidth: "80%",
          justifyContent: "center",
        }}
      >
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item md={4} sm={12} lg={3}>
              <TextField
                value={registrationFormData.MRNo}
                id="MRNo"
                label="Your MR #"
                fullWidth
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid>

            <Grid item md={4} sm={12} lg={3}>
              <TextField
                fullWidth
                required
                value={registrationFormData.TokenNo}
                id="TokenNo"
                type="number"
                label="Token ID"
                variant="outlined"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...registrationFormData,
                    TokenNo: e.target.value,
                  })
                }
              />
            </Grid>

            <Grid item md={4} sm={12} lg={3}>
              <TextField
                id="RegistrationDate"
                label="Registration date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                value={registrationFormData.RegistrationDate}
                fullWidth
                onChange={(e) =>
                  setRegistrationFormData({
                    ...registrationFormData,
                    RegistrationDate: e.target.value,
                  })
                }
              />
            </Grid>

            <Grid item md={4} sm={12} lg={3}>
              <TextField
                fullWidth
                id="Name"
                label="Name"
                // defaultValue="Name"
                variant="outlined"
                alue={registrationFormData.Name}
                onChange={(e) =>
                  setRegistrationFormData({
                    ...registrationFormData,
                    Name: e.target.value,
                  })
                }
              />
            </Grid>
          </Grid>
          {/* //==================================================================================== */}
          <Grid container spacing={3}>
            <Grid item md={4} sm={12} lg={3}>
              <TextField
                id="FatherOrHusband"
                label="Father Name"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={registrationFormData.FatherOrHusband}
                onChange={(e) =>
                  setRegistrationFormData({
                    ...registrationFormData,
                    FatherOrHusband: e.target.value,
                  })
                }
              />
            </Grid>

            <Grid item md={4} sm={12} lg={3}>
              <TextField
                id="DOB"
                label="Birth Date"
                type="date"
                defaultValue=""
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                value={registrationFormData.DOB}
                fullWidth
                onChange={(e) =>
                  setRegistrationFormData({
                    ...registrationFormData,
                    DOB: e.target.value,
                  })
                }
              />
            </Grid>

            <Grid item md={4} sm={12} lg={3}>
              <TextField
                required
                id="Age"
                type="number"
                label="Age"
                defaultValue="Age"
                variant="outlined"
                value={registrationFormData.Age}
                onChange={(e) =>
                  setRegistrationFormData({
                    ...registrationFormData,
                    Age: e.target.value,
                  })
                }
              />
            </Grid>

            <Grid item md={4} sm={12} lg={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Gender
                </InputLabel>
                <Select
                  native
                  id="Gender"
                  value={registrationFormData.Gender}
                  onChange={(e) =>
                    setRegistrationFormData({
                      ...registrationFormData,
                      Gender: e.target.value,
                    })
                  }
                >
                  <option>Male</option>
                  <option>Female</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          {/* //========================================================================= */}
          <Grid container spacing={3}>
            <Grid item md={4} sm={12} lg={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-helper-label">
                  Religion
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="Religion"
                  value={registrationFormData.Religion}
                  onChange={(e) => {
                    handleOption(e.target.value);
                    setRegistrationFormData({
                      ...registrationFormData,
                      Religion: e.target.value,
                    });
                  }}
                >
                  <MenuItem value="islam">Islam</MenuItem>
                  <MenuItem value="christian">Christian</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4} sm={12} lg={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-helper-label">
                  Help type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="IsZakat"
                  value={registrationFormData.IsZakat}
                  onChange={(e) =>
                    setRegistrationFormData({
                      ...registrationFormData,
                      IsZakat: e.target.value,
                    })
                  }
                >
                  {options.map((item) => (
                    <MenuItem value={item.val}>{item.opt}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4} sm={12} lg={3}>
              <TextField
                required
                id="CNIC"
                label="CNIC"
                defaultValue=" CNIC"
                variant="outlined"
                value={registrationFormData.CNIC}
                onChange={(e) =>
                  setRegistrationFormData({
                    ...registrationFormData,
                    CNIC: e.target.value,
                  })
                }
              />
            </Grid>
          </Grid>

          {/* //===========================second portion=========================== */}
          {/* 
    <fieldset legend="Contact" >

    </fieldset>
    
    
     */}
          <fieldset>
            <legend>Contact</legend>

            <Grid container spacing={2}>
              <Grid item sm={12} md={4} lg={3}>
                <TextField
                  id="HousNo"
                  label="House - #"
                  variant="outlined"
                  fullWidth
                  value={registrationFormData.HousNo}
                  onChange={(e) =>
                    setRegistrationFormData({
                      ...registrationFormData,
                      HousNo: e.target.value,
                    })
                  }
                />
              </Grid>
              {/* -------------------------------------------------------- */}
              <Grid item sm={12} md={4} lg={3}>
                <TextField
                  id="Address"
                  label="Address"
                  variant="outlined"
                  fullWidth
                  value={registrationFormData.Address}
                  onChange={(e) =>
                    setRegistrationFormData({
                      ...registrationFormData,
                      Address: e.target.value,
                    })
                  }
                />
              </Grid>
              {/* -------------------------------------------------------- */}
              <Grid item sm={12} md={4} lg={3}>
                <TextField
                  id="Area"
                  label="Area"
                  variant="outlined"
                  fullWidth
                  value={registrationFormData.Area}
                  onChange={(e) =>
                    setRegistrationFormData({
                      ...registrationFormData,
                      Area: e.target.value,
                    })
                  }
                />
              </Grid>
              {/* ---------------------------------------------------------------------- */}
              <Grid item sm={12} md={4} lg={3}>
                <TextField
                  id="District"
                  label="District"
                  variant="outlined"
                  fullWidth
                  value={registrationFormData.District}
                  onChange={(e) =>
                    setRegistrationFormData({
                      ...registrationFormData,
                      District: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item sm={12} md={4} lg={3}>
                <TextField
                  id="City"
                  label="City"
                  variant="outlined"
                  fullWidth
                  value={registrationFormData.City}
                  onChange={(e) =>
                    setRegistrationFormData({
                      ...registrationFormData,
                      City: e.target.value,
                    })
                  }
                />
              </Grid>
              {/* -------------------------------------------------------- */}
              <Grid item sm={12} md={4} lg={3}>
                <TextField
                  id="Phone"
                  label="Phone(RES)"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={registrationFormData.Phone}
                  onChange={(e) =>
                    setRegistrationFormData({
                      ...registrationFormData,
                      Phone: e.target.value,
                    })
                  }
                />
              </Grid>
              {/* -------------------------------------------------------- */}
              <Grid item sm={12} md={4} lg={3}>
                <TextField
                  id="OffPhone"
                  label="Phone(off)"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={registrationFormData.OffPhone}
                  onChange={(e) =>
                    setRegistrationFormData({
                      ...registrationFormData,
                      OffPhone: e.target.value,
                    })
                  }
                />
              </Grid>
              {/* ---------------------------------------------------------------------- */}
              <Grid item sm={12} md={4} lg={3}>
                <TextField
                  id="Mobile"
                  label="Mobile"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={registrationFormData.Mobile}
                  onChange={(e) =>
                    setRegistrationFormData({
                      ...registrationFormData,
                      Mobile: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item sm={12} md={4} lg={3}>
                <TextField
                  id="MonthlyConsLimit"
                  label="Monthly consumption limit"
                  variant="outlined"
                  fullWidth
                  value={registrationFormData.MonthlyConsLimit}
                  onChange={(e) =>
                    setRegistrationFormData({
                      ...registrationFormData,
                      MonthlyConsLimit: e.target.value,
                    })
                  }
                />
              </Grid>
              {/* -------------------------------------------------------- */}
            </Grid>
          </fieldset>
          {/* //========================================third portion=================================== */}

          <fieldset>
            <legend>Reffer Info</legend>

            <Grid container spacing={2}>
              <Grid item sm={12} md={4} lg={3}>
                <TextField
                  id="RefBy"
                  label="Reffered By"
                  variant="outlined"
                  fullWidth
                  value={registrationFormData.RefBy}
                  onChange={(e) =>
                    setRegistrationFormData({
                      ...registrationFormData,
                      RefBy: e.target.value,
                    })
                  }
                />
              </Grid>
              {/* -------------------------------------------------------- */}
              <Grid item sm={12} md={4} lg={3}>
                <TextField
                  id="EmpID"
                  label="Employee ID"
                  variant="outlined"
                  fullWidth
                  value={registrationFormData.EmpID}
                  onChange={(e) =>
                    setRegistrationFormData({
                      ...registrationFormData,
                      EmpID: e.target.value,
                    })
                  }
                />
              </Grid>
              {/* -------------------------------------------------------- */}
              <Grid item sm={12} md={4} lg={3}>
                <TextField
                  id="NOY"
                  label="NOY"
                  variant="outlined"
                  fullWidth
                  value={registrationFormData.NOY}
                  onChange={(e) =>
                    setRegistrationFormData({
                      ...registrationFormData,
                      NOY: e.target.value,
                    })
                  }
                />
              </Grid>
              {/* ---------------------------------------------------------------------- */}
              <Grid item sm={12} md={4} lg={3}>
                <TextField
                  id="Remarks"
                  label="Remarks"
                  variant="outlined"
                  fullWidth
                  value={registrationFormData.Remarks}
                  onChange={(e) =>
                    setRegistrationFormData({
                      ...registrationFormData,
                      Remarks: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
          </fieldset>
          {/* //==========================================forth portion=================================== */}

          <fieldset>
            <legend>Staff</legend>

            <Grid container spacing={2}>
              {/* -------------------------------------------------------- */}
              <Grid item sm={12} md={4} lg={3}>
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="end"
                    control={
                      <Checkbox
                        checked={registrationFormData.IsPAFEmp}
                        name="Is PAF Employee"
                        onChange={(e) =>
                          setRegistrationFormData({
                            ...registrationFormData,
                            IsPAFEmp: !registrationFormData.IsPAFEmp,
                          })
                        }
                      />
                    }
                    label="Is PAF Empolyeend"
                    labelPlacement="end"
                  />
                </FormGroup>
              </Grid>
              {/* -------------------------------------------------------- */}
              <Grid item sm={12} md={4} lg={3}>
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="end"
                    control={
                      <Checkbox
                        checked={registrationFormData.IsStaff}
                        name="Is Staff"
                        onChange={(e) =>
                          setRegistrationFormData({
                            ...registrationFormData,
                            IsStaff: !registrationFormData.IsStaff,
                          })
                        }
                      />
                    }
                    label="Is Staff"
                    labelPlacement="end"
                  />
                </FormGroup>
              </Grid>
              {/* ---------------------------------------------------------------------- */}
              <Grid item sm={12} md={4} lg={3}>
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="end"
                    control={
                      <Checkbox
                        checked={registrationFormData.IsRejected}
                        name="Is Rejected"
                        fullWidth
                        onChange={(e) =>
                          setRegistrationFormData({
                            ...registrationFormData,
                            IsRejected: !registrationFormData.IsRejected,
                          })
                        }
                      />
                    }
                    label="Is rejected"
                    labelPlacement="end"
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
