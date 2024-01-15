require("mongoose").connect("mongodb://0.0.0.0:27017/project").then(()=>{
    console.log("DB is Connected");
}).catch((err)=>{
    console.log("DB is --NOT-- Connected",err);
});