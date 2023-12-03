import { Router } from "express";

const teachers=Router()
teachers.get("/",(req,res)=>{
    res.send("Welcome to teachers")
})

teachers.get("/get",(req,res)=>{
    res.send("Get req teacher")
})
teachers.post("/post",(req,res)=>{
    res.send("Post req teacher")
})

export default teachers