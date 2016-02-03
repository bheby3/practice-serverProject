/**
 * Created by brandonhebbert on 2/2/16.
 */
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var Cart = new Schema({
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
});

module.exports = Mongoose.model('Cart', Cart);