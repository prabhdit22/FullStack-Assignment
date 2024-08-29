const express=require("express");
const mongoose=require("mongoose");

const ejsMate=require("ejs-mate");
const path=require("path"); 
const Card=require("./Models/card");               //DB Model
const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");

const cors=require("cors");

let app=express();
let Port=8080;

app.use(cors());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));

app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

const MONGO_URL="mongodb://127.0.0.1:27017/Card";

async function main()
{
   await mongoose.connect(MONGO_URL); 
}


main().then((res)=>{
    console.log("Database Connected Successfully");
})
.catch((err)=>
{
  console.log("Database not Connected bcz of some error : ",err);  
}
)


app.get("/",(req,res)=>{
    res.send("Listening at Root");
})

// Index Route

app.get("/cards",wrapAsync( async(req,res)=>{
    const allCards=await Card.find({});
    // res.render("Cards/index.ejs",{allCards});
    res.send(allCards);
    // console.log(allCards);
   })
   )
   

 //Create Route

 app.get("/cards/new",(req,res)=>{
    res.render("cards/new.ejs");
   })
  
  app.post("/cards",wrapAsync(async(req,res,next)=>{  
    const newCard=new Card(req.body.card);
    await newCard.save();
    res.redirect("/cards");
   }));
  
   app.get("/cards/details",wrapAsync( async(req,res)=>{
    const allCards=await Card.find({});
    res.render("Cards/index.ejs",{allCards});
    // res.send(allCards);
    // // console.log(allCards);
   })
   )

// Show Route for Particular Card

 app.get("/cards/:id",wrapAsync(async(req,res)=>{
  let {id}=req.params;
  const card=await Card.findById(id);  
  res.render("Cards/show.ejs",{card});
 })
) 


app.listen(Port,()=>{
  console.log(`Listening at Port : ${Port}`);  
})


app.all("*",(req,res,next)=>{   //When no page exist as searched
    next(new ExpressError(404,"Page not found!"));
  })
  
  //Error Handling middleware 
  
  app.use((err,req,res,next)=>{
    let{statusCode=500,message="Something went wrong"}=err;
    res.status(statusCode).render("Cards/error.ejs",{message});
  })