import express from "express"
const studentRouter=express.Router()

studentRouter.get("/",(req,res)=>{
res.send({msg:"All students data here"})
})

studentRouter.get("/add",(req,res)=>{
    res.send("Adding a new student")
})

export default studentRouter