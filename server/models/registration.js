const mongoose = require("mongoose");

const registrationSchema = mongoose.Schema({
    MRNo: int,
    name: String,
    TokenNo: int,
    FatherOrHusband: String,
    DOB: new Date(),
    Age: int,
    Gender: String,
    Religion: String,
    District: String,
    City: String,
    Area: String,
    HousNo: String,
    Address: String,
    CNIC: int,
    Phone: int,
    OffPhone: int,
    Mobile: int,
    RefBy: String,
    Remarks: String,
    IsRejected: false,
    IsZakat: String,
    IsPAFEmp: false,
    MonthlyConsLimit: int,
    ThumbImage: "",
    NOY: "",
    EmpID: int,
    IsStaff: false,
    CreateUser: "",
    ModifyUser: "",
    ModifyDate: "",      
createdAt: {
    type: Date,
    default: new Date(),
  },
});
//===========================================================

const Registration = mongoose.model("registration", registrationSchema);
module.exports = Registration;
