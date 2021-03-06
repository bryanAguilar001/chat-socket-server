const mongoose = require('mongoose');

// Databse connection
const dbConnection = async () => {
    try {
        await mongoose.connect( process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('DB online');
    } catch (error) {
        console.log(error);
        throw new Error('Database connection failed!');
    }
}

module.exports = {
    dbConnection
}