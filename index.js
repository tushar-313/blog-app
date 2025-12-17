const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("server working well");
});

let post = [
  {
    id: uuidv4(),
    user: "tushar",
    content: "Hi, everyone welcome to my first blog",
  },
  {
    id: uuidv4(),
    user: "bishop",
    content: "I love coding on codechef.",
  },
];
app.get("/posts", (req, res) => {
  res.render("index.ejs", { post });
});
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let id = uuidv4();
  let { user, content } = req.body;
  post.push({ id, user, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let pos = post.find((p) => id === p.id);
  res.render("show.ejs", { pos });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let ps = post.find((p) => id === p.id);
  ps.content = newContent;
  res.redirect("/posts");
});

app.get("/posts/:id/new", (req, res) => {
  let { id } = req.params;
  let ps = post.find((p) => id === p.id);
  res.render("edit.ejs", { ps });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  post = post.filter((p) => id !== p.id);
  res.redirect("/posts");
});
app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
