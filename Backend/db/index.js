const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://lekha:lekhapass@cluster0.f03h823.mongodb.net/Employee')
.then(()=>{
    console.log('Mongo DB is connected')
})
.catch(()=>{
    console.log('Error in connecting MongoDB'+ err)
})