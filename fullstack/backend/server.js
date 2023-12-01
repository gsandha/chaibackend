import express from "express";
const app = express();
import teacher from "./router/teacher.routes.js";

app.use(express.urlencoded({ extended: true }));
//Middleware exercise 1 create a middleware function that adds a custom header to all outgoing responses. Here's an example of how you can do this in an Express 
app.use((req,res,next)=>{
    res.setHeader("X-Hello-Middleware","Hello from custom header middleware")
    next()
})
app.use((req, res, next) => {
  if (req.query.maa) {
    console.log("Successful");
    next();
  }
  console.log("Got Request", req.query);
  next();
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});
const port = 5000;
app.use("/teachers", teacher);

app.listen(port, () => {
  console.log(`Serve at port ${port}`);
});
