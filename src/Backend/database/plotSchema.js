const mongoose=require("mongoose");

const plotSchema=new mongoose.Schema({
    Sector:String,
    Topic:String,
    Country:String,
    Region:String,
    End_Year:String,
    Start_Year:String,
    Pestle:String,
    Source:String,
    Title:{
        type:String,
        unique:true
    },
    url:String,
    Added:String,
    Published:String,
    Insight:String,
    Impact:String,
    Intensity:Number,
    Likelihood:Number,
    Relevance:Number
})

const Plot=mongoose.model("Plot",plotSchema)

module.exports.Plot=Plot
module.exports.plotSchema=plotSchema