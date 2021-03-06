const router = require("express").Router();
let Client = require("../models/client.model");

router.route('/').put((req, res)=>{
   
})

//get All clients
router.route('/').get(async (req, res) => {
    try{
      let clients = await Client.find();
      res.json(clients)
    }
    catch (e){
      res.json({
        status: "error",
        message: e.message
      })
    }
  })
  //get a client by id
  
  router.route('/:id').get(async (req, res) => {
    try{
      let client = await Client.findById(req.params.id);
      res.json(client)
    }
    catch (e){
      res.json({
        status: "error",
        message: e.message
      })
    }
  })
  
  //modify a client by id
  router.route('/:id').put(async (req, res) => {
    try{
      await Client.findByIdAndUpdate(req.params.id, req.body);
  
      res.json("client updated successfully!!")
    }
    catch (e){
      res.json({
        status: "error",
        message: e.message
      })
    }
  })
  
  //create a client if doesn't exist
  router.route('/auth/facebook').post(async (req, res) => {
    try{
      let client = await Client.findOne({userID: req.body.userID});
      if(!client){
        client = new Client({userID: req.body.userID, email: req.body.email, addresses: [{address: "", lat: 0, lng: 0}]})
        await client.save();
      }
        res.json(client)
    }
    catch (e){
      res.json({
        status: "error",
        message: e.message
      })
    }
  })

module.exports = router;
