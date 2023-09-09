const express=require("express")
const app=express()

const port=process.env.PORT || 8080
require("./middleware")(app)
require("./database/db")()

app.listen(port,()=>{
    console.log(`Server listening onport ${port}`)
})