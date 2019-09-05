const app = require("./weather_details.js");
const knex = require("./knexfile.js");
const express = require("express");
const app = express();
app.use(express.json());

app.get('/',(request,response) => {
    response.send("heY......")
});


let weather_data = express.Router();
app.use('/weather_data',weather_data);
require('./weather_details.js')(weather_data,knex);


app.listen(3401,()=>{
    console.log("server is listening at the port 3401........")
})
