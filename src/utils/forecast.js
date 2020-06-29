const request = require('request');

const forecast=(latitude, longitude, callback)=>{

request({url: `https://api.darksky.net/forecast/5514e43a3235ce258291e0e520a563ee/${latitude},${latitude}`
, json:true}, (error,{body})=> {

if(error)
{
    callback('unable to connect!', undefined)
}

else if (body.error)
{
    callback('unable to detect location!', undefined)
}
else { 
    callback(undefined, 
    `${body.daily.data[0].summary}It is currently ${body.currently.temperature} degress. There is ${body.currently.precipProbability}% chances of rain`)

}


})

}



module.exports= forecast
