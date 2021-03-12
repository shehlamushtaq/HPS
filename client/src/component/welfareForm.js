import React, { useState } from "react";
import AppBar from "./GlobalHeader";
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
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import NumberFormat from "react-number-format";
import RadioGroup from "@material-ui/core/RadioGroup";
import MaterialTable from "material-table";
import { tableIcons } from "../component/editable/tableIcone";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const formName = "Welfare";
const WelfareForm = ({
  handleNext,
  handleBack,
  welfareFormData,
  setwelfareFormData,
}) => {
  const [columns, setColumns] = useState([
    { title: "MemberName", field: "MemberName" },
    {
      title: "Relation with Patient",
      field: "Relation with Patient",
      initialEditValue: "Relation",
    },
    { title: "Monthly Income", field: "Monthly Income", type: "numeric" },
  ]);
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);

  // const [welfareFormData, setwelfareFormData] = useState({
  //   MRNo: "recID",
  //   TokenNo: "",
  //   WelfareDate: new Date(),
  //   Profession: "",
  //   Fiqa: "",
  //   Education: "",
  //   Cast: "",
  //   MonthlyIncome: 0,
  //   Guardian: "",
  //   OtherInfo: "",
  //   MaleKids: "",
  //   FemaleKids: "",
  //   OtherKids: "",
  //   Brothers: "",
  //   Sisters: "",
  //   NoOFFamilyMembers: "",
  //   IsMarried: false,
  //   IsAbleToPay: false,
  //   IsEarning: false,
  //   IsZakat: false,
  //   IsDonation: false,
  //   HaveGold: false,
  //   ReqName: "",
  //   ReqPhone: "",
  //   ReqRelationWithPatient: "",
  //   CreateUser: "Admin",
  //   ModifyUser: "Admin",
  // });
  const classes = useStyles();
  const [value, setValue] = React.useState("abc");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(welfareFormData);

  return (
    <div>
      <AppBar
        handleNext={handleNext}
        handleBack={handleBack}
        formName={formName}
      />
      <div
        style={{
          padding: 16,
          margin: "auto",
          maxWidth: "80%",
          justifyContent: "center",
        }}
      >
        <form noValidate autoComplete="off">
          <Grid container spacing={4}>
            <Grid item md={4} sm={12} lg={3}>
              <TextField
                value={welfareFormData.MRNo}
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
                value={welfareFormData.TokenNo}
                id="TokenNo"
                type="number"
                label="Token ID"
                variant="outlined"
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    TokenNo: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item md={4} sm={12} lg={3}>
              <TextField
                id="WelfareDate"
                label="Registration date"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                value={welfareFormData.WelfareDate}
                fullWidth
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    WelfareDate: e.target.value,
                  })
                }
              />
            </Grid>

            <Grid item md={4} sm={12} lg={3}>
              <FormControlLabel
                color="primary"
                control={
                  <Checkbox
                    checked={welfareFormData.IsZakat}
                    name="Is Rejected"
                    fullWidth
                    onChange={(e) =>
                      setwelfareFormData({
                        ...welfareFormData,
                        IsZakat: !welfareFormData.IsZakat,
                      })
                    }
                  />
                }
                label="Zakaat"
              />
              <FormControlLabel
                color="primary"
                control={
                  <Checkbox
                    checked={welfareFormData.IsDonation}
                    name="Is Rejected"
                    fullWidth
                    onChange={(e) =>
                      setwelfareFormData({
                        ...welfareFormData,
                        IsDonation: !welfareFormData.IsDonation,
                      })
                    }
                  />
                }
                label="Donation"
              />
            </Grid>
          </Grid>
          {/* //=================================Second Portion================================================= */}
          <fieldset>
            <legend>Contact</legend>

            <Grid container spacing={2}>
              <Grid item sm={12} md={4} lg={3}>
                <TextField
                  id="Profession"
                  label="Profession"
                  variant="outlined"
                  fullWidth
                  value={welfareFormData.Profession}
                  onChange={(e) =>
                    setwelfareFormData({
                      ...welfareFormData,
                      Profession: e.target.value,
                    })
                  }
                />
              </Grid>
              {/* -------------------------------------------------------- */}
              <Grid item md={4} sm={12} lg={3}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">
                    Education
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="Education"
                    value={welfareFormData.Education}
                    onChange={(e) =>
                      setwelfareFormData({
                        ...welfareFormData,
                        Education: e.target.value,
                      })
                    }
                  >
                    <option value="matriculation">Matric</option>
                    <option value=" intermediate">Inter</option>
                    <option value="bachelors">Graduation</option>
                  </Select>
                </FormControl>
              </Grid>
              {/* -------------------------------------------------------- */}
              <Grid item md={4} sm={12} lg={3}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">
                    Fiqa
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="Fiqa"
                    value={welfareFormData.Fiqa}
                    onChange={(e) =>
                      setwelfareFormData({
                        ...welfareFormData,
                        Fiqa: e.target.value,
                      })
                    }
                  >
                    <option value="shia">Shia</option>
                    <option value="sunni">Sunni</option>
                  </Select>
                </FormControl>
              </Grid>
              {/* ---------------------------------------------------------------------- */}
              <Grid item md={4} sm={12} lg={3}>
                <TextField
                  value={welfareFormData.Cast}
                  id="Cast"
                  type="text"
                  fullWidth
                  onChange={(e) =>
                    setwelfareFormData({
                      ...welfareFormData,
                      Cast: e.target.value,
                    })
                  }
                  label="Cast"
                />
              </Grid>
            </Grid>
          </fieldset>
          {/* //===========================Third Portion========================================================== */}
          <Grid container>
            <Grid sm={12}>
              <Grid container spacing={4}>
                <Grid item lg={7} sm={12}>
                  <Grid container spacing={2}>
                    <Grid item md={6} sm={12} lg={6}>
                      <TextField
                        value={welfareFormData.ReqName}
                        id="ReqName"
                        type="text"
                        fullWidth
                        onChange={(e) =>
                          setwelfareFormData({
                            ...welfareFormData,
                            ReqName: e.target.value,
                          })
                        }
                        label="Requestor Name"
                      />
                    </Grid>
                    {/* -------------------------------------------------------------------- */}
                    <Grid item md={6} sm={12} lg={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-helper-label">
                          Relation With Patient
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="ReqRelationWithPatient"
                          value={welfareFormData.ReqRelationWithPatient}
                          onChange={(e) =>
                            setwelfareFormData({
                              ...welfareFormData,
                              ReqRelationWithPatient: e.target.value,
                            })
                          }
                        >
                          <option value="mother">Mother</option>
                          <option value="father">Father</option>
                          <option value="daughter">Daughter</option>
                          <option value="son">Son</option>
                          <option value="self">Self</option>
                        </Select>
                      </FormControl>
                    </Grid>
                    {/* ------------------------------------------------------------------- */}
                    <Grid item md={6} sm={12} lg={6}>
                      <TextField
                        value={welfareFormData.ReqPhone}
                        id="ReqPhone"
                        type="number"
                        fullWidth
                        onChange={(e) =>
                          setwelfareFormData({
                            ...welfareFormData,
                            ReqPhone: e.target.value,
                          })
                        }
                        label="Requestor Phone"
                      />
                    </Grid>
                    <Grid item md={6} sm={12} lg={6}>
                      <TextField
                        value={welfareFormData.Guardian}
                        id="Guardian"
                        type="text"
                        fullWidth
                        onChange={(e) =>
                          setwelfareFormData({
                            ...welfareFormData,
                            Guardian: e.target.value,
                          })
                        }
                        label="Guardian"
                      />
                    </Grid>
                    {/* ----------------------------------------------------------------------- */}
                    <Grid item md={6} sm={12} lg={6}>
                      <TextField
                        value={welfareFormData.MonthlyIncome}
                        id="MonthlyIncome"
                        type="number"
                        fullWidth
                        onChange={(e) =>
                          setwelfareFormData({
                            ...welfareFormData,
                            MonthlyIncome: e.target.value,
                          })
                        }
                        label="Monthly Income"
                      />
                    </Grid>
                    {/* ---------------------------------------------------------------------------- */}
                    <Grid item md={6} sm={12} lg={6}>
                      <TextField
                        value={welfareFormData.OtherInfo}
                        id="OtherInfo"
                        type="text"
                        fullWidth
                        onChange={(e) =>
                          setwelfareFormData({
                            ...welfareFormData,
                            OtherInfo: e.target.value,
                          })
                        }
                        label="Other Info"
                      />
                    </Grid>
                    {/* --------------------------------------------------------------------------------- */}
                    <Grid item sm={12} md={12} lg={12}>
                      <FormControlLabel
                        color="primary"
                        control={
                          <Checkbox
                            checked={welfareFormData.IsMarried}
                            name="Is Maried"
                            fullWidth
                            onChange={(e) =>
                              setwelfareFormData({
                                ...welfareFormData,
                                IsMarried: !welfareFormData.IsMarried,
                              })
                            }
                          />
                        }
                        label="Maried"
                      />
                      {/* ------------------------------------------------------------------- */}
                      <FormControlLabel
                        color="primary"
                        control={
                          <Checkbox
                            checked={welfareFormData.HaveGold}
                            name="HaveGold"
                            fullWidth
                            onChange={(e) =>
                              setwelfareFormData({
                                ...welfareFormData,
                                HaveGold: !welfareFormData.HaveGold,
                              })
                            }
                          />
                        }
                        label="Have Gold"
                      />
                      {/* ------------------------------------------------------------------------------ */}
                      <FormControlLabel
                        color="primary"
                        control={
                          <Checkbox
                            checked={welfareFormData.IsEarning}
                            name="IsEarning"
                            fullWidth
                            onChange={(e) =>
                              setwelfareFormData({
                                ...welfareFormData,
                                IsEarning: !welfareFormData.IsEarning,
                              })
                            }
                          />
                        }
                        label="Is Earning"
                      />
                      {/* ------------------------------------------------------------------------------------- */}
                      <FormControlLabel
                        color="primary"
                        control={
                          <Checkbox
                            checked={welfareFormData.IsAbleToPay}
                            name="IsAbleToPay"
                            fullWidth
                            onChange={(e) =>
                              setwelfareFormData({
                                ...welfareFormData,
                                IsAbleToPay: !welfareFormData.IsAbleToPay,
                              })
                            }
                          />
                        }
                        label="Is Able To Pay"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                {/* //================================================================================== */}
                <Grid item lg={1} />
                <Grid item lg={4} sm={12}>
                  <Grid container spacing={2}>
                    <Grid item md={6} sm={12} lg={6}>
                      <TextField
                        value={welfareFormData.MaleKids}
                        id="MaleKids"
                        type="number"
                        fullWidth
                        onChange={(e) =>
                          setwelfareFormData({
                            ...welfareFormData,
                            MaleKids: e.target.value,
                          })
                        }
                        label="No of Kids(male)"
                      />
                    </Grid>
                    {/* -------------------------------------------------------------------------------- */}
                    <Grid item md={6} sm={12} lg={6}>
                      <TextField
                        value={welfareFormData.FemaleKids}
                        id="FemaleKids"
                        type="number"
                        fullWidth
                        onChange={(e) =>
                          setwelfareFormData({
                            ...welfareFormData,
                            FemaleKids: e.target.value,
                          })
                        }
                        label="No of Kids(female)"
                      />
                    </Grid>
                    {/* --------------------------------------------------------------------------------------- */}
                    <Grid item md={6} sm={12} lg={6}>
                      <TextField
                        value={welfareFormData.OtherKids}
                        id="OtherKids"
                        type="number"
                        fullWidth
                        onChange={(e) =>
                          setwelfareFormData({
                            ...welfareFormData,
                            OtherKids: e.target.value,
                          })
                        }
                        label="Other Kids"
                      />
                    </Grid>
                    {/* ------------------------------------------------------------------------------------------- */}
                    <Grid item md={6} sm={12} lg={6}>
                      <TextField
                        value={welfareFormData.Brothers}
                        id="Brothers"
                        type="number"
                        fullWidth
                        onChange={(e) =>
                          setwelfareFormData({
                            ...welfareFormData,
                            Brothers: e.target.value,
                          })
                        }
                        label="No of Brothers"
                      />
                    </Grid>
                    {/* ----------------------------------------------------------------------------------------------- */}
                    <Grid item md={6} sm={12} lg={6}>
                      <TextField
                        value={welfareFormData.Sisters}
                        id="Sisters"
                        type="number"
                        fullWidth
                        onChange={(e) =>
                          setwelfareFormData({
                            ...welfareFormData,
                            Sisters: e.target.value,
                          })
                        }
                        label="No of Sisters"
                      />
                    </Grid>
                    {/* ----------------------------------------------------------------------------------------------- */}
                    <Grid item md={6} sm={12} lg={6}>
                      <TextField
                        value={welfareFormData.NoOFFamilyMembers}
                        id="NoOFFamilyMembers"
                        type="number"
                        fullWidth
                        onChange={(e) =>
                          setwelfareFormData({
                            ...welfareFormData,
                            NoOFFamilyMembers: e.target.value,
                          })
                        }
                        label="Family Members"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* //=======================================================================last portion============================================== */}

      <fieldset>
        <legend>Details</legend>

        <MaterialTable
          columns={columns}
          icons={tableIcons}
          data={data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setData([...data, newData]);

                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);

                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);

                  resolve();
                }, 1000);
              }),
          }}
        />
      </fieldset>
    </div>
  );
};

export default WelfareForm;

// ==================================================================================
