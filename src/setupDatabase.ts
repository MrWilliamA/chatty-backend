import mongoose from "mongoose";
import { config } from "./config";

export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => {
        console.log("connected to database");
      })
      .catch((error) => {
        console.log("error connecting to database ", error);
        return process.exit();
      });
  };
  connect();
  mongoose.connection.on("disconnect", connect);
};
