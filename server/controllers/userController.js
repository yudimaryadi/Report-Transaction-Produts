const { User, Products } = require("../models");
const { sign } = require("../helpers/jwtcreate");

class userControllers {
  static async handleRegister(req, res) {
    try {
      const { email, password, role } = req.body;
      const user = await User.create({
        email,
        password,
        role,
      });
      res.status(201).json({
        id: user.id,
        email: user.email,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async handleLogin(req, res) {
    try {
      const { email, password } = req.body;

      const data = await User.findOne({
        where: {
          email,
        },
      });

      if (data.email === email && data.password === password) {
        res.status(200).json({
          access_token: sign({ id: data.id, email: data.email }),
          role: data.role,
        });
      } else {
        throw { name: "invalid email or password" };
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = userControllers;
