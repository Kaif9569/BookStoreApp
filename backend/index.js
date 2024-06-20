import express from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";


const app = express()
app.use(cors());
app.use(express.json());

dotenv.config();
const PORT=process.env.PORT || 4000
const URI=process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
        console.log("MongoDB database connection established successfully");
} catch (err) {
    console.log("ERROR:", err)
}

// defining route
app.use('/book', bookRoute);
app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(`server is  listening on port ${PORT}`)
})