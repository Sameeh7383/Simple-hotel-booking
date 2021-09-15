var express = require('express');
var router = express.Router();
const hotelHelpers = require("../helpers/hotelHelpers.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("enter")
 hotelHelpers.getHotels().then((result)=>{
   console.log(result)
  res.render('index',{hotels:result});
 })
  

});

module.exports = router;
