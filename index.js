import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url"; 

const app = express();
const port = 3000;
const _dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render(_dirname+"/views/index.ejs");
});
  
  app.get("/about", (req, res) => {
    res.render(_dirname+"/views/about.ejs");
  });

  app.get("/login", (req, res) => {
    res.render(_dirname+"/views/login.ejs");
  });
  
  app.get("/home", (req, res) => {
    res.render(_dirname+"/views/index.ejs");
  });

  app.post("/submit", (req, res) => {
    res.render(_dirname+"/views/dashboard.ejs");
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  