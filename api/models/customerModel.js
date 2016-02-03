var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var Customer = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    }
});

module.exports = Mongoose.model('Customer', Customer);