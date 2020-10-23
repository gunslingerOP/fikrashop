import { env } from "process";

require("dotenv").config();

let config: any;
export default config = {
  jwtSecret: process.env.JWT_SECRET || "shhh",
  ZC_SECRET: process.env.ZC_SECRET || "$2y$10$9eaqimBisY15ZJZSSvC3Z.Ar1ET1.7Kgm8p7jysY1X.I8.RuwS."
};