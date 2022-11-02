import app from "./app.js";
import {connectDB} from "./config/database.js"
connectDB();

app.get("/",(req,res)=>{
    res.send("hii")
})

app.listen(process.env.PORT,()=>console.log(`server is worrking on port :${process.env.PORT}`))