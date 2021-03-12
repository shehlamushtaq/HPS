import React from "react";
import { tableIcons } from "../component/editable/tableIcone";
import MaterialTable from "material-table";
import Stepper from "./Stepper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import LoupeIcon from '@material-ui/icons/Loupe';
function Register() {
  const { useState } = React;
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(false);
  const [next, setnext] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [columns, setColumns] = useState([
    { title: "Name", field: "name" },
    {
      title: "Surname",
      field: "surname",
      initialEditValue: "initial edit value",
    },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
    {
      title: "Birth Place",
      field: "birthCity",
      lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
    },
  ]);

  const [data, setData] = useState([
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: 34 },
  ]);

  return (
    <>
      {open === true ? (
        <Stepper setOpen={setOpen} />
      ) : (
        <MaterialTable
          title="Editable Preview"
          columns={columns}
          data={data}
          icons={tableIcons}
          actions={[
            {
              icon: LoupeIcon,
              isFreeAction: true,
              tooltip: "add user",
              onClick: handleClickOpen,
            },
          ]}
          editable={{
            //   onRowAdd: newData =>
            //     new Promise((resolve, reject) => {
            //       setTimeout(() => {
            //         setData([...data, newData]);

            //         resolve();
            //       }, 1000)
            //     }),
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
      )}
    </>
  );
}

export default Register;
