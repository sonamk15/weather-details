const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

module.exports = function(weather_data,knex,axios){
    weather_data.get('/getAllData/:id',(request,response,next) =>{
        var id = request.params.id
        knex('weather_details').where('id',id).then((data)=>{
            response.send(data)
        })
    })
        
        
     weather_data.post('/postAllData',urlencodedParser, (request, response, next) => {
        console.log("I am coming from the post weather endpoint......:)");
        var weather_data = {
            city_name: request.body.city_name,
            city_id: request.body.city_id,
            weather_id: request.body.weather_id,
            weather_status: request.body.weather_status,
            description:request.body.description
        }
        knex('weather_details').insert(weather_data).then((data)=> {
            console.log("done!");
        })


    weather_data.put('/putAllData',urlencodedParser, (request, response, next) => {
        var weather_data = {
            city_name: request.body.city_name,
            city_id: request.body.city_id,
            weather_id: request.body.weather_id,
            weather_status: request.body.weather_status,
            description:request.body.description
        }
        knex('weather_details').where(city_name = query).insert(weather_data).then((data)=> {
            console.log("updation done!!!!!!");
        })
    })




    var axios = require('axios')
    const raw_input = require('readline-sync').question;
    var query = raw_input("enter any city name  ");
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=feca631bc378f039d5bf78420f93853d";
    console.log(url)
    axios.get(url).then((res) =>{

        var dict = {}
        var data  = res.data
            
        var weather = (data.weather)
        for (let index = 0; index < weather.length; index++) {
            weather_id = (weather[index].id)
            weather_status = (weather[index].main)
            description = (weather[index].description)
            }
        name = (data.name)
        cityId = data.id
        dict["city_name"]=name
        dict["city_id"]=cityId
        dict["weather_id"]=weather_id
        dict["weather_status"]=weather_status
        dict["description"]=description
        response.send(dict);
        });
    });
    }
