const mongoose=require("mongoose");
const initData=require("./data.js");
const Card=require("../Models/card.js");

const MONGO_URL="mongodb://127.0.0.1:27017/Card";

main().then((res)=>{
    console.log("Database Connected Successfully");
})
.catch((err)=>
{
  console.log("Database not Connected bcz of some error : ",err);  
}
)

async function main()
{
   await mongoose.connect(MONGO_URL); 
}

const initDB=async()=>{
    await Card.deleteMany({});
    await Card.insertMany(initData.data);
    console.log("Data is initialised to Database Successfully");
}

initDB();