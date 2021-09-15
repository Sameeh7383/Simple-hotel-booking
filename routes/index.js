var express = require('express');
var router = express.Router();
const hotelHelpers = require("../helpers/hotelHelpers.js");
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("enter")
 hotelHelpers.getHotels().then((result)=>{
   console.log(result)
  res.render('index',{hotels:result});
 })
  

});
router.get('/hotelDetails', function(req, res, next) {
 hotelHelpers.getHotel(req.query.id).then((result)=>{
  res.render('hotelDetails',{hotel:result});
 })
  

});
router.post('/getTotalRate', function(req, res, next) {
  console.log("enter2")
 hotelHelpers.getTotalPrize(req.body.date).then((total)=>{
  res.json(total);
 })
  

});

module.exports = router;
