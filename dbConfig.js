const { connect } = require("mongoose");
const URL = "mongodb://127.0.0.1:27017/dribbbleDB";

export const dbConfig = async () => {
  try {
    await connect(URL).then(() => {
      console.clear();
      console.log("DB connection ❤️❤️🚀🚀");
    });
  } catch (error) {
    return error;
  }
};
