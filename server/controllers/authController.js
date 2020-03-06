const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { email_address, password } = req.body;
    const { session } = req;
    const db = req.app.get("db");

    let user = await db.check_user([email_address]);
    user = user[0];
    if (user) {
      return res.status(401).send("User already exists");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    let newUser = await db.register_user({ email_address, hash });
    newUser = newUser[0];
    session.user = newUser;
    res.status(201).send(session.user);
  },

  login: async (req, res) => {
    const { email_address, password } = req.body;
    const { session } = req;
    const db = req.app.get("db");

    let user = await db.check_user([email_address]);
    user = user[0];
    if (!user) {
      return res.status(400).send("Email not found");
    }

    const authenticated = bcrypt.compareSync(password, user.password);
    if (authenticated) {
      delete user.password;
      session.user = user;
      // console.log(session.user);
      res.status(202).send(session.user);
    } else {
      res.status(401).send("Incorrect email or password");
    }
  },

  logout: (req, res) => {
    if (req.session) {
      req.session.destroy();
      res.sendStatus(200);
    }
  }
};
