const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {

  const router = express.Router();

  router.get("/", (req,res)=>{ //all bookings
    collection.find()
    .toArray()
    .then((docs)=>{
      res.json(docs)
    }).catch((err)=>{
      console.log("oh no!", err);
      res.status(500);
      res.json({status:500, error:err})
    });

  });

  router.get("/:id", (req,res)=>{ //individ booking
    const someId = req.params.id
    collection.findOne({_id: ObjectId(someId)})
    .then((doc)=>{
      res.json(doc)
    }).catch((err)=>{
      console.log("oh no!", err);
      res.status(500);
      res.json({status:500, error:err})
    });

  })


  router.post("/", (req,res)=>{ //new booking
    const newData = req.body


    collection.insertOne(newData)
    .then(docs=>{
      res.json(docs.ops[0])})
    })

  router.delete("/:id", (req,res)=>{ //remove booking
    collection.removeOne({_id: ObjectId(req.params.id)})
    .then((docs)=>{
      res.json(docs)
    }).catch((err)=>{
      console.log("oh no!", err);
      res.status(500);
      res.json({status:500, error:err})
    })
    })

//update needss added
  return router;

};

module.exports = createRouter;
