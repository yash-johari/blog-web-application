import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const blogCount = 5;
var title;
var blog;

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}.`);
});


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});


app.post("/submit", (req, res) => {
    title = req.body["title"];
    blog = req.body["blog"];
    // blogCount++;
    console.log(title);
    console.log(blog);
    // console.log(blogCount);
    res.render("submit.ejs", {
        blogTitle: title,
        blogDes: blog,
    });
});

app.get("/view", (req, res) => {
    res.render("view.ejs", {
        blogTitle: title,
        blogDes: blog,
    });
});

