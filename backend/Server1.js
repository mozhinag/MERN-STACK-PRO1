

import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
import path from 'path';
import colors from 'colors'
dotenv.config();

const app = express();
app.use(express.json());

connectDB(); // 🔥 MUST BE BEFORE app.listen

app.use('/api/products', productRoutes);

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on this ${PORT} port`
      .cyan.bgWhite.underline.bold
  );
});


// import express from "express";
// import dotenv from "dotenv";
// import { connectDB } from "./config/db.js";
// import productRoutes from "./routes/product.route.js";
// import path from "path";

// dotenv.config();

// const app = express();

// app.use(express.json());

// const __dirname = path.resolve();

// app.use("/api/products", productRoutes)
// if(process.env.NODE_ENV === "production"){
//   app.use(express.static(path.join(__dirname, "/frontend/dist")))
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
//   })
// }


// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//   connectDB();
//   console.log(`Server started at http://localhost:${PORT}`);
// });
