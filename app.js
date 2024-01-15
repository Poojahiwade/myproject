const express = require("express");
const app = express();
const routes = require("./routes/AllRoutes");
const cors = require("cors")

const root = require("path").join(__dirname, "build");
app.use(express.static(__dirname+"/assets"));
app.use(express.static(root));


app.use(express.json());
app.use(express.urlencoded ({ extended : true }));
app.use(cors());
app.use(routes);

app.get("*", (req, res)=>{
    res.sendFile("index.html", {root});
})



const port = process.env.PORT || 4000;
app.listen(port, ()=>{
console.log("Server is running with port", port);
})