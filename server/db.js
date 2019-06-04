const mongoose = require('mongoose');
require('dotenv').config();

 const MONGO_USER = process.env.MONGO_USER;
 const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
 const MONGO_URL = process.env.MONGO_URL;

// console.log('hola', MONGO_URL);

mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0-x46xc.mongodb.net/amazin?retryWrites=true`, { useNewUrlParser: true });

//url-mongo:cluster0-x46xc.mongodb.net/test?retryWrites=true

const connect = mongoose.connection;

module.exports.getOne = (id, callback) => {
  connect.db.collection('descriptions', (err, collection) => {
    if(err) {
      console.log('there is an error', err);
    } else {
      collection.findOne({_id: id},function(err, result) {
        if(err) {
          callback(err);
        } else {
          console.log('this is result DB ', result);
          callback(null, result);
        }
      });
    }  
  });
}



