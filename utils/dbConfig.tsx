import { connect } from "mongoose";
// const URL = "mongodb://127.0.0.1:27017/dribbbleDB";
const URL: string =
  "mongodb+srv://skillscapeofficier:skillscapeofficier@cluster0.0dubq.mongodb.net/builderDB?retryWrites=true&w=majority&appName=Cluster0";

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
