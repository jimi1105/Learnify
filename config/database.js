const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then( () =>  {console.log("Db Connected successfully");})
    .catch((error) => { 
        console.log("Db connection falied");
        console.error(error);
        process.exit(1);
    })
};