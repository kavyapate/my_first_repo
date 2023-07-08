const { Schema, model } = require("mongoose");

let userScheama = new Schema({
  title: {
    type: String,
    default: null,
    trim: true,
  },
  postLink: {
    type: String,
    default: null,
    trim: true,
  },
  company_name: {
    type: String,
    default: null,
    trim: true,
  },
  company_link: {
    type: String,
    default: null,
    trim: true,
  },
  // description: {
  //   type: String,
  //   default: null,
  //   trim: true,
  // },
  // hiring_info: [
  // {
  //   username: {
  //     type: String,
  //     default: null,
  //     trim: true,
  //   },
  //   profilelink: {
  //     type: String,
  //     default: null,
  //     trim: true,
  //   },
  //   designation: {
  //     type: String,
  //     default: null,
  //     trim: true,
  //   },
  // }
// ]
});
module.exports = model("chromeExtensionms", userScheama);
