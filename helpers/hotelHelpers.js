var db = require("../config/connection");
var { ObjectId, ObjectID } = require("mongodb");

module.exports={
    getHotels:()=>{
        return new Promise(async (resolve, reject) => {
        db.get().collection("hotels").find().toArray().then((result)=>{
            resolve(result)
            console.log(result)
        }
         
        )})
    },
    getHotel:(id)=>{
        return new Promise(async (resolve, reject) => {
        db.get().collection("hotels").findOne({_id:ObjectId(id)}).then((result)=>{
            resolve(result)
        }
         
        )})
    },getTotalPrize:(date)=>{
     
    }
}