import express from "express";
import router from "./src/Routes/_Routes";

var app = express();

app.use(express.json());

app.use('/', router);

app.listen(8080, function () {
  console.log("Api started succes! Listening in port 8080!");
});
