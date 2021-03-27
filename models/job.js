var mongoose = require("mongoose");
const Applicant = require("./applicant");
 
var jobSchema = new mongoose.Schema({
   jname: String,
   gender:String,
   units:String,
   location:String,
   pincode:String,
   email:String,
   description:String,
   userid:String,
   applicants: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Applicant"
      }
   ]
});
 
module.exports = mongoose.model("Job", jobSchema);