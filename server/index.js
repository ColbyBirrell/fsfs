require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
//controller inputs need to be imported
const authCtrl = require("./controllers/authController");
const postCtrl = require("./controllers/postController");
// still need middleware

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    secret: SESSION_SECRET
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set("db", db);
  console.log("<--DB CONNECTED-->");
});

//middleware for check user

// auth endpoints
// app.post(`auth/login`, authCtrl.login)
// app.post(`auth/register`, authCtrl.register)
// app.post(`auth/logout`, authCtrl.logout)
// app.post(`auth/user`, authCtrl.checkUser)

// endpoints
// app.post(`api/posts`, postCtrl.createPost)
// app.get(`api/posts`, postCtrl.getPosts)
// app.put(`api/posts/:id`, postCtrl.editPost)
// app.delete(`api/posts/:id`, postCtrl.deletePost)

app.listen(SERVER_PORT, () =>
  console.log(`<--- SERVER JOGGING ON PORT ${SERVER_PORT} --->`)
);
