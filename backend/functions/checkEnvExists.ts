import dotenv from "dotenv";
dotenv.config();

const checkEnvExists = <T extends string>(key: string | undefined): T => {
  if (typeof key === "undefined") throw new Error(`${key} is not defined.`);

  return process.env[key] as T;
};

export default checkEnvExists;
