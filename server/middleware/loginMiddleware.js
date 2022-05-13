const jwt = require("../helpers/jwtcreate");
const { User } = require("../models");

function loginAuth(req, res, next) {
  try {
    if (!req.headers.token) next({ name: "belum login" });
    let idUser = jwt.decode(req.headers.token).user.id;

    User.findOne({
      where: {
        id: idUser,
      },
    })
      .then((user) => {
        if (!user) throw { name: "LOGIN GAGAL" };
        req.user = {
          id: user.id,
          email: user.email,
          role: user.role,
        };
        next();
      })
      .catch((err) => {
        next(err);
      });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  loginAuth,
};
