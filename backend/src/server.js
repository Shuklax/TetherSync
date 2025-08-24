import express from "express";
import cors from "cors";
import dotenv from "dotenv";


const app = express();

app.get("/", (req, res)=> {
    res.send("app is running");
});

app.listen(5001, ()=> {
    console.log("server is running on port 5001");
})
