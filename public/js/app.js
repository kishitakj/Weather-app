/*const { response } = require("express"); */


console.log('get back')

/*const address= process.argv[2];

if(!address)
{
    console.log('please provide address')
}
else{

geocode(address, (error,{latitude,longitude,location})=>{

    if(error)
    {
        return console.log(error)
    }

   

    forecast(latitude,longitude, (error, forecastdata)=>{

        if(error)
        {
            return console.log(error)
        }
    console.log(location)
    console.log(forecastdata)

    })  
})  
}  */



/*fetch('http://localhost:3000/weather?address=boston').then((response)=>{

response.json().then((data)=>{
    if(data.error)
    {
        console.log(data.error)
    }
    else {

        console.log(data.location)
        console.log(data.forecast)
    }
})

}) */

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const msg= document.querySelector('#message-1')
const msg1=document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const location = search.value;
    msg.textContent= 'loading...'



  //  fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{

        

response.json().then((data)=>{
    if(data.error)
    {
       
       // console.log(data.error)
       msg.textContent=data.error
    }
    else {

       // console.log(data.location)
       msg.textContent= data.location
       // console.log(data.forecast)
       msg1.textContent= data.forecast
    }
})

})



})
