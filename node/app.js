const express = require("express");
const app = express()
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken")

const JWT_SECRET = "fpqowijfqwoifjqwop1039812301980391283"

const mongoUrl = "mongodb+srv://joaosegal:joao1010@cluster0.bxlmkha.mongodb.net/myFirstDatabase" 

app.listen(5000,() => {
    console.log("Server Started")
})

mongoose.connect(mongoUrl, {
    useNewUrlParser: true
}).then(()=> {
    console.log('conectado ao db')
}).catch((e) => console.log(e))

require("./userDetails")
const User = mongoose.model("UserInfo")

app.post("/register",async(req,res)=>{
    const {username, email, password} = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10)
    try{
        const oldUser = await User.findOne({username})
        const oldEmail = await User.findOne({email})
        if(oldUser == true || oldEmail == true) {
          return res.send({error:"User or Email Exists"})
        }
        await User.create({
            username,
            email,
            password: encryptedPassword
        })
        res.send({status:"ok"})
    } catch(error) {
        res.send({status:"error"})
    }
})

app.post("/login", async (req,res) => {
    const {username , password} = req.body;

    const userExist = await User.findOne({username})
    if (!userExist){
        return res.json({erro: "User Not Found"})
    }
    if(await bcrypt.compare(password, userExist.password)){
        const token = jwt.sign({email:userExist.email}, JWT_SECRET)

        if(res.status(201)) {
            return res.json({status: "ok", data: token})
        } else {
            return res.json({error: "error"})
        }
    }
    res.json({status:"error", error: "Invalid password"})
})

app.post("/userData", async (req,res) => {
    const {token} = req.body;

    try {
        const user = jwt.verify(token, JWT_SECRET)
        const useremail = user.email;
        User.findOne({email: useremail})
            .then((data) => {
                res.send({status:"ok", data:data})
            }).catch((error) => {
                res.send({error:"error", data:error})
            })
        
    } catch (error) {
        
    }
})