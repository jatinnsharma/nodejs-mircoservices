import dotenv from 'dotenv';
import fs from 'fs';

// Check if the .env file exists
const envExists = fs.existsSync('.env');
if (!envExists) {
  console.error("Error: .env file not found!");
  process.exit(1);
}

// const envFile = process.env.NODE_ENV !== "prod" ? `.env.${process.env.NODE_ENV}` : '.env';
dotenv.config({ path: '.env'});

const config = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
  EXCHANGE_NAME: process.env.EXCHANGE_NAME,
  MSG_QUEUE_URL: process.env.MSG_QUEUE_URL,
  CUSTOMER_SERVICE: "customer_service",
  SHOPPING_SERVICE: "shopping_service",
};


export default config;
