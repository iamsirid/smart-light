const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
let tempData = [
  {
    mode: 99,
    isOn: 99
  },
  {
    mode: 1,
    isOn: 0
  },
  {
    mode: 1,
    isOn: 0
  },
  {
    mode: 1,
    isOn: 0
  },
  {
    mode: 1,
    isOn: 0
  },
  {
    mode: 1,
    isOn: 0
  },
  {
    mode: 1,
    isOn: 0
  }
];

app.get("/api/get/led1", (req, res) => {
  //   console.log(req.body);
  let data = [{ payload: `netpie_LED1=${tempData[1].isOn}` }];
  res.send(data);
});
app.get("/api/get/led2", (req, res) => {
  //   console.log(req.body);
  let data = [{ payload: `netpie_LED2=${tempData[2].isOn}` }];
  res.send(data);
});
app.get("/api/get/led3", (req, res) => {
  //   console.log(req.body);
  let data = [{ payload: `netpie_LED3=${tempData[3].isOn}` }];
  res.send(data);
});
app.get("/api/get/led4", (req, res) => {
  //   console.log(req.body);
  let data = [{ payload: `netpie_LED4=${tempData[4].isOn}` }];
  res.send(data);
});
app.get("/api/get/led5", (req, res) => {
  //   console.log(req.body);
  let data = [{ payload: `netpie_LED5=${tempData[5].isOn}` }];
  res.send(data);
});
app.get("/api/get/led6", (req, res) => {
  //   console.log(req.body);
  let data = [{ payload: `netpie_LED6=${tempData[6].isOn}` }];
  res.send(data);
});

app.get("/api/get/mode1", (req, res) => {
  //   console.log(req.body);
  let data = [{ payload: `netpie_MOD1=${tempData[1].mode}` }];
  res.send(data);
});

app.get("/api/get/mode2", (req, res) => {
  //   console.log(req.body);
  let data = [{ payload: `netpie_MOD2=${tempData[2].mode}` }];
  res.send(data);
});
app.get("/api/get/mode3", (req, res) => {
  //   console.log(req.body);
  let data = [{ payload: `netpie_MOD3=${tempData[3].mode}` }];
  res.send(data);
});
app.get("/api/get/mode4", (req, res) => {
  //   console.log(req.body);
  let data = [{ payload: `netpie_MOD4=${tempData[4].mode}` }];
  res.send(data);
});
app.get("/api/get/mode5", (req, res) => {
  //   console.log(req.body);
  let data = [{ payload: `netpie_MOD5=${tempData[5].mode}` }];
  res.send(data);
});
app.get("/api/get/mode6", (req, res) => {
  //   console.log(req.body);
  let data = [{ payload: `netpie_MOD6=${tempData[6].mode}` }];
  res.send(data);
});

app.put("/api/invoke", (req, res) => {
  console.log(req.body);
  console.log(Object.keys(req.body)[0]);
  const command = Object.keys(req.body)[0];
  if (command[0] === "L") {
    tempData[command[3]] = {
      ...tempData[command[3]],
      isOn: parseInt(command[7])
    };
  } else if (command[0] === "M") {
    tempData[command[3]] = {
      ...tempData[command[3]],
      mode: parseInt(command[7])
    };
  }
  console.log(tempData);

  // let data = req.body.input.replace(/(\r\n\t|\n|\r\t|\r\n)/gm, " ");
  // data = operation.operate(data);
  // console.log(data);

  // res.json({ bcodes: data });
  res.send(null);
});

const port = process.env.PORT || 5008;

app.listen(port, function() {
  console.log(`The Server has started! (Port: ${port})`);
});
