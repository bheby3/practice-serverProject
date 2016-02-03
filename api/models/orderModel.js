var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var Order = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    name: {
        first: {
            type: String
        },
        last: {
            type: String
        }
    },

    address: {
        street: {
            type: String
        },
        city: {
            type: String
        },
        zip: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = Mongoose.model('Order', Order);