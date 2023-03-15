import mongoose, { connect } from "mongoose";

const connectToDb = <T extends string>(connectionString: T): void => {
  try {
    mongoose.connect(connectionString);
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};

export default connectToDb;
