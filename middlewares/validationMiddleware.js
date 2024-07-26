
const { body } = require("express-validator");

  let validator=[
    body("name")
    .isString()
    .withMessage("name must be a valid string")
    .notEmpty()
    .withMessage("name must not be empty")
    .isLength({ min: 3, max: 12 })
    .withMessage("name length should be 3 to 12 char long"),

  body("email")
    .isString()
    .withMessage("email must be a valid string")
    .notEmpty()
    .withMessage("email must not be empty")
    .isEmail()
    .withMessage("email should be a valid email"),

  body("password")
    .isString()
    .withMessage("password must be a valid string")
    .notEmpty()
    .withMessage("password must not be empty")
    .isStrongPassword()
    .withMessage("password should be a strong password")

  ]


  module.exports = validator;