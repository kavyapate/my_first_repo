const userModel = require("../model/user");
// const { jobArray } = require('../test.js');

exports.add = async (req, res) => {
  try {
    // Save the jobArray in the database
    // const result = await userModel.create({ jobs: jobArray });
    // console.log("result------------------>",result);

    const data = req.body;

  // Create a new instance of the Data model with the received data
  const newData = new userModel(data);

  // Save the data to MongoDB
  newData.save()

    res.status(200).json({ message: 'Job array stored in the database successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
