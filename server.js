const express = require('express');
const app = express();
const crypto = require('crypto');

const tokenContainer = {
  token: null
}

app.get('/login', (req, res) => {
  setTimeout(function () {
    const data = ''+ Math.random(4);
    tokenContainer.token = crypto.createHash('md5').update(data).digest("hex");
    res.send(tokenContainer.token);
  }, 200);
});

app.get('/dob', (req, res) => {
  if(!req.query){
    res.status(400).send('DOB FAIL NO TOKEN PRESENT');
  } else {
    if(req.query.token === tokenContainer.token){
      setTimeout(function () {
        res.send('24-02-1970');
      }, 110);
    }
    else{
      res.status(400).send('DOB FAIL WRONG TOKEN SENT');
    }
  }
});

app.get('/name', (req, res) => {
  if(!req.query){
    res.status(400).send('NAME FAIL NO TOKEN PRESENT');
  } else {
    if(req.query.token === tokenContainer.token){
      setTimeout(function () {
        res.send('Test User');
      }, 150);
    }
    else{
      res.status(400).send('NAME FAIL WRONG TOKEN SENT');
    }
  }
});

app.get('/phone', (req, res) => {
  if(!req.query){
    res.status(400).send('PHONE FAIL NO TOKEN PRESENT');
  } else {
    if(req.query.token === tokenContainer.token){
      setTimeout(function () {
        res.send('+6612323232');
      }, 210);
    }
    else{
      res.status(400).send('PHONE FAIL WRONG TOKEN SENT');
    }
  }
});


app.get('/logout', (req, res) => {
  if(!req.query){
    res.status(400).send('LOGOUT FAIL NO TOKEN PRESENT');
  } else {
    if(req.query.token === tokenContainer.token){
      setTimeout(function () {
        tokenContainer.token = null;
        res.send('LOGOUT SUCCESS');
      }, 1000);
    }
    else{
      res.status(400).send('LOGOUT FAIL WRONG TOKEN SENT');
    }
  }
});


app.listen(3008, () => console.log('SERVER RUNNING ON 3008'))
