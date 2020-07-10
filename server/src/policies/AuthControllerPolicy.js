// const Joi = require("@hapi/joi");

// module.exports = {
//   register(req, res, next) {
//     const schema = Joi.object({
//       password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
//       email: Joi.string().email({
//         minDomainSegments: 2,
//         tlds: { allow: ["com", "net"] },
//       }),
//     });
//     const value = schema.validate({
//       email: req.body.email,
//       password: req.body.password,
//     });
//     if (value.error) {
//       res.status(400).send({
//         error: "invalid information",
//       });
//     } else next();
//   },
// };

const Validator = require("fastest-validator");

module.exports = {
  register(req, res, next) {
    const validator = new Validator();
    const schema = {
      password: {
        type: "string",
        min: 5,
        max: 30,
        messages: {
          stringMin: "contraseña demaciado corta, minimo 5 caracteres",
        },
      },
      email: {
        type: "email",
        messages: {
          emailEmpty: "correo mal escrito",
          email: "correo mal escrito",
        },
      },
    };
    var errores="";

    const value = validator.validate(
      {
        email: req.body.email,
        password: req.body.password,
      },
      schema
    );
    if (value == true) {
      next();
    } else {
      for (var i = 0; i < value.length; i += 1) 
      {
        errores += value[i].message+ '</br>';
      }
      res.status(400).send({
        error: errores,
        bla: value,
      });
    }
  },
};
