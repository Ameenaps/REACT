
const express=require("express")
require('./connection')
const empmodel=require("./models/employee")
var cors=require('cors')

const app=express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post("/add",async(req,res)=>{
    try{
        await empmodel(req.body).save()
        res.send("data added")
    } catch (error) {
        console.log(error)
    }
})

app.get("/view",async(req,res)=>{
    try{
       const v= await empmodel.find()
        res.send(v)
    } catch (error) {
        console.log(error)
    }
})

app.delete("/remove/:id",async(req,res)=>{
    try{
       await empmodel.findByIdAndDelete(req.params.id)
        res.send("data deleted")
    } catch (error) {
        console.log(error)
    }
})


app.put("/update/:id",async(req,res)=>{
    try{
       await empmodel.findByIdAndUpdate(req.params.id,req.body)
        res.send("data updated")
    } catch (error) {
        console.log(error)
    }
})

app.listen(3004,()=>{
    console.log("port is running at 3004")
})