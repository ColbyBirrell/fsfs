require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
//controller inputs need to be imported
const authCtrl = require("./controllers/authController");
// const postCtrl = require("./controllers/postController");
const checkUser = require("./middleware/checkUser");

const {
  SERVER_PORT,
  CONNECTION_STRING,
  SESSION_SECRET,
  S3_BUCKET,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY
} = process.env;

const app = express();

app.use(express.json());

//start s3
const aws = require("aws-sdk");

app.get("/api/signs3", (req, res) => {
  aws.config = {
    region: "us-west-1",
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
  };

  const s3 = new aws.S3();
  const fileName = req.query["file-name"];
  const fileType = req.query["file-type"];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: "public-read"
  };

  s3.getSignedUrl("putObject", s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };

    return res.send(returnData);
  });
});

//end s3

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
app.post(`/auth/login`, checkUser, authCtrl.login);
app.post(`/auth/register`, checkUser, authCtrl.register);
app.post(`/auth/logout`, authCtrl.logout);
app.get(`/auth/user`, checkUser); //middleware

// endpoints
// app.post(`/api/posts`, postCtrl.createPost)
// app.get(`/api/posts`, postCtrl.getPosts)
// app.put(`/api/posts/:id`, postCtrl.editPost)
// app.delete(`/api/posts/:id`, postCtrl.deletePost)

app.listen(SERVER_PORT, () =>
  console.log(`<--- SERVER JOGGING ON PORT ${SERVER_PORT} --->`)
);
