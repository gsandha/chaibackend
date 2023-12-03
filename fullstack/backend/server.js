import express from "express";
import studentRouter from "./router/student.routes.js";
import teachers from "./router/teacher.routes.js";

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.use("/students",studentRouter)
const port = 5000;
app.use("/teachers", teachers);

app.listen(port, () => {
  console.log(`Serve at port ${port}`);
});
