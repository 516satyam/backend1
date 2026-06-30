import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.on("error", (error) => {
  console.log("ERR: ", error);
  throw error;
});

// app.use is used in case of middlewares or in configuration settings

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// using extended Allows you to receive deeply nested objects (objects inside objects) from form submissions instead of just flat key-value strings.

app.use(express.static("public"));
// it is used to keep assets like images, pdf in public folder so it can be accessed easily by typing their name in the browser URL without needing a specific route handler.

app.use(cookieParser());

export { app };
