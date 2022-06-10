/* eslint-disable camelcase */
const router = require('express').Router();
const bcrypt = require('bcrypt');

const {
  User,
} = require('../../db/models');

router.route('/')
  .post(async (req, res) => {
    try {
      const {
        user_email,
        user_password, // обычный
      } = req.body;
      console.log(req.body);
      const user = await User.findOne({
        where: {
          user_email,
        },
      });

      if (user) {
        const isPassValide = await bcrypt.compare(user_password, user.user_password);
        // isPassValide = true || false

        if (isPassValide) {
          req.session.user = user;
          res.status(200).json({
            // message: 'Вы вошли в свой аккаунт',
            user,
          });
        } else {
          res.status(401).json({
            message: 'Некорректные данные',
          });
        }
      } else {
        res.status(404).json({
          message: 'Пользователь не найден',
        });
      }
    } catch (error) {
      res.status(400).json({
        message: 'Ошибка входа',
      });
    }
  });

module.exports = router;
