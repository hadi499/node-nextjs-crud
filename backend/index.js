import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import ProductRoutes from "./routes/ProductRoutes.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(express.static("public"));
app.use("/api/products/", ProductRoutes);

app.listen(5000, () => console.log("server running on port 5000..."));
