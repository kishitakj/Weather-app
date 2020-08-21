const path = require('path')
const express = require('express');
const app = express()
const hbs = require('hbs')
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast') 
const request= require('request')
const port = process.env.PORT || 3000



// define path for express config
const pubdirp = path.join(__dirname, '../public')
const viewspath = path.join(__dirname, '../templates/views' )
const partialspath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewspath)
hbs.registerPartials(partialspath)


// setup static directory to serve
app.use(express.static(pubdirp))

app.get('/', (req, res)=>{

    res.render('index', {
        title: 'weather',
        name: 'Kishita jain'

 })


})

app.get('/about', (req, res)=>{

    res.render('about', {
        title: 'About',
        name: 'Kishita Jain'
        
 })

})

app.get('/help', (req, res)=>{

    res.render('about', {
        title: 'help',
        name : 'Kishita Jain'
        
 })

})




/*app.get('*', (req,res)=>{

    res.send('my 404 page')
}) 

app.get('/about/*', (req,res)=>{

    res.send('about article not found')
})  

app.get('*', (req,res)=>{

    res.render('404',{
        title:'404',
        name: 'Kishita Jain',
        errorMessage: 'page not found'

    })
})  */

app.get('/weather' , (req,res)=>{

    if(!req.query.address){

        return res.send ({
            error: 'You must provide a address term'


        })
    }

    geocode(req.query.address, (error,{latitude,longitude,location}= {})=>{   // using destructive property

        if(error)
        {
            return res.send({error})
        }
    
       
    
        forecast(latitude,longitude, (error, forecastdata)=>{
    
            if(error)
            {
                return res.send({error})
            }
    res.send({

        forecast: forecastdata,
        location,
        address:req.query.address
    })
    
        })  
    })  
    
})

app.get('/products', (req,res)=>{
    if(!req.query.search){

        return res.send ({

            error: 'You must provide a search term'
        })
    }
        console.log(req.query.search)

    
    

    res.send({
    forecast: 'it is snowing',
    location: 'Philadelphia'
    })
})

app.listen(port, ()=>{

    console.log(`server is up on port ${port}!`)
})




