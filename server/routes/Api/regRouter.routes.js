/* eslint-disable camelcase */
const router = require('express').Router();
const bcrypt = require('bcrypt');

const saltRounds = 10;

const {
  User,
} = require('../../db/models');

router.route('/')
  .post(async (req, res) => {
    console.log(req.body);
    try {
      const {
        user_name,
        user_email,
        user_password,
      } = req.body;
      const user = await User.findOne({
        where: {
          user_email,
        },
      });
      if (user_password.length < 8) {
        res.status(200).json({
          message: 'Пароль минимум 8 символов',
        });
      } else if (!user && user_password.length >= 8) {
        const hashPassword = await bcrypt.hash(user_password, saltRounds);
        await User.create({
          user_name,
          user_email,
          user_password: hashPassword,
        });
        res.status(200).json({
          message: 'Пользователь успешно зарегистрирован',
        });
      } else {
        res.status(409).json({
          message: 'Пользователь с таким email уже зарегистрирован',
        });
      }
    } catch (error) {
      res.status(400).json({
        message: 'Ошибка регистрации',
      });
    }
  });

module.exports = router;
