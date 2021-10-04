import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://oscar12002:oscar12002@cluster0.qtit0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(db => console.log("DB is connected"))
    .catch(err => console.log(err))