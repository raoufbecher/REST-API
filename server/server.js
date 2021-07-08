const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config({ path: './config/config.env' });
//routes
app.use("/user", require('./routers/userRouter'))
//creation du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT,(err)=>{
    err? console.log(err) : console.log('server running on PORT', PORT)
})
//connecter a database
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then((res) => console.log('database connected ... '))
.catch((err) => console.log(err))
