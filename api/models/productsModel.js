/**
 * Created by brandonhebbert on 2/1/16.
 */


var Mongoose = require('mongoose');

var Product = Mongoose.Schema({
    brand: {
      type: String, lowercase: true
    },
    model: {type: String, lowercase: true}
    //category: [  //road, track, cc, trail, road racing, minimal //ARRAY
    //    {type: String}
    //],
    //stability: {  //min, moderate, max, motion control
    //  type: String, lowercase: true
    //},
    //styles: [ //red, yellow, blue  ARRAY
    //    {type: String}
    //],
    //width: { //narrow, medium, 2E, 4E
    //    type: Number
    //},
    //price: {
    //    type: Number
    //},
    //description: {
    //    type: String, lowercase: true
    //},
    //image: {
    //    type: String,
    //    default: '/images/products/imgnotavailable.png'
    //},
    //imageAlt: {
    //    type: String
    //}
});

module.exports = Mongoose.model('products', Product);
