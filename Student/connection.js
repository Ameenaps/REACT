const mongoose= require('mongoose')

mongoose.connect('mongodb+srv://ameenaps07:ameena@cluster0.5odxzgb.mongodb.net/ICT?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Connected!'))
.catch((err)=>console.log(err))