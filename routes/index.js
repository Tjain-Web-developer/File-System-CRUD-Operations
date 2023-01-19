const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get("/",function(req,res){
  fs.readdir("./files",function(err,files){
    if(err) res.send(err);
    else res.render("index",{files,data: "",filename: ""})
  });
});

router.post("/details",function(req,res){
  fs.writeFile(`./files/${req.body.filename}`,"",function(err){
    if(err) res.send(err)
    else{
      res.redirect("/")
    }
  });
});

router.get("/delete/:plc",function(req,res){
  fs.unlink(`./files/${req.params.plc}`,function(err){
    if(err) res.send(err)
    else{
      res.redirect("/")
    }
  });
});

router.get("/open/:plc",function(req,res){
  fs.readFile(`./files/${req.params.plc}`,"utf-8",function(err,data){
    if(err) res.send(err)
    else{
      fs.readdir("./files",function(err,files){
        if(err) res.send(err);
        else res.render("index",{files,data,filename: req.params.plc})
      });
    }
  });
});

router.post("/savefile/:plc",function(req,res){
  fs.writeFile(`./files/${req.params.plc}`,`${req.body.textdata}`,function(err){
    if(err) res.send(err)
    else{
      res.redirect(`/open/${req.params.plc}`)
    }
  });
});

router.get("/closefile/:plc",function(req,res){
  res.redirect("/")
});
module.exports = router;