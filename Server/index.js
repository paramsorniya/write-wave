import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import dbConnection from "./dbConfig/index.js";
import router from "./routes/index.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;

// Database connection
dbConnection();

// Middleware
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Configure CORS
const allowedOrigins = [
  "https://writewave-admin.onrender.com",
  "https://writewave-client.onrender.com", // Add your client domain here
  "https://writewave-client.netlify.app",
  "https://writewave-admin.netlify.app",

];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true, // Allow cookies if needed
  })
);

// Routes and Middleware
app.use(router);
app.use(errorMiddleware);

// Serve frontend static files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});












// import dotenv from "dotenv";

// import bodyParser from "body-parser";
// import cors from "cors";
// import express from "express";
// import mongoose from "mongoose";
// import helmet from "helmet";
// import morgan from "morgan";
// import dbConnection from "./dbConfig/index.js";
// import router from "./routes/index.js";
// import errorMiddleware from "./middleware/errorMiddleware.js";
// import path from "path";
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 8800;

// dbConnection();

// app.use(helmet());
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true }));

// app.use(morgan("dev"));

// app.use(router);
// app.use(errorMiddleware);

// const __dirname = path.resolve();
// app.listen(PORT, () => {
//   console.log("Server running of port " + PORT);
// });

// app.use(express.static(path.join(__dirname, "/client/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });
























// import dotenv from "dotenv";
// import bodyParser from "body-parser";
// import cors from "cors";
// import express from "express";
// import helmet from "helmet";
// import morgan from "morgan";
// import path from "path";
// import { fileURLToPath } from 'url'; // Import fileURLToPath
// import dbConnection from "./dbConfig/index.js";
// import router from "./routes/index.js";
// import errorMiddleware from "./middleware/errorMiddleware.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 8800;

// // Get the directory name using import.meta.url
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// dbConnection();

// // Enable CORS for requests from the client
// app.use(cors({
//     origin: 'http://localhost:3000', // Allow requests only from this origin
// }));

// app.use(helmet());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true }));

// app.use(morgan("dev"));

// // Serve client
// app.use(express.static(path.join(__dirname, '../client/build')));
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// // Serve admin
// app.use('/admin', express.static(path.join(__dirname, '../admin/build')));
// app.get('/admin/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../admin/build/index.html'));
// });

// app.use(router);
// app.use(errorMiddleware);

// app.listen(PORT, () => {
//   console.log("Server running on port " + PORT);
// });
