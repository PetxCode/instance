const { connect } = require("mongoose");
// const URL = "mongodb://127.0.0.1:27017/dribbbleDB";
const URL =
  "mongodb+srv://skillscapeofficier:skillscapeofficier@cluster0.0dubq.mongodb.net/builderDB?retryWrites=true&w=majority&appName=Cluster0";

const dbConfig = async () => {
  try {
    await connect(URL).then(() => {
      console.clear();
      console.log("DB connection ❤️❤️🚀🚀");
    });
  } catch (error) {
    return error;
  }
};

module.exports = dbConfig;
