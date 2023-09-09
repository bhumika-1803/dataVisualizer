const express = require("express");
const router = express.Router();
const data = require("../database/jsondata.json");
const {Plot} = require("../database/plotSchema");

// FETCHING DATA FROM JSON FILE AND STORING IT IN MONGODB
async function postData(el){
  try{
    let ans={
      Sector: el.sector,
      Topic: el.topic,
      Country: el.country,
      Region: el.region,
      End_Year: el.end_year,
      Start_Year: el.start_year,
      Pestle: el.pestle,
      Source: el.source,
      url: el.url,
      Intensity: el.intensity,
      Likelihood: el.likelihood,
      Relevance: el.relevance,
      Added:el.added,
      Published:el.published,
      Insight:el.insight,
      Impact:el.impact,
      Title:el.title
    }
    let obj = new Plot(ans);
    let find_unique=await Plot.find({Title:el.title})
    if(!find_unique.length){
      await obj.save()
    }
  }
  catch(err){
    console.log("Error",err)
  }
}
router.post("/", (req,res) => {
  const data=req.body
  data.map((el, i) => {
    postData(el)
  });
  res.send("DATA SENT!")
});

router.get("/",async(req,res)=>{
  const ans_data=await Plot.find().limit(20)
  // res.send("DATA RECIEVED!")
  res.send(ans_data)
})

module.exports.getData = router;
