import mongoose, { connect } from "mongoose";

const connectToDb = (connectionString: string) => {
  try {
    mongoose.connect(connectionString);
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};

export default connectToDb;
