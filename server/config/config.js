const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const cors = require('cors');

const local = (req, res, next) => {
  if (req.session.uid) {
    res.locals.isAuth = true;
    res.locals.uid = req.session.uid;
  }
  return next();
};

const sessionConfig = {
  // будем хранить данные сессии в файлах, а не в оперативной памяти
  // тогда пользователей не будет выкидывать из сессии при перезагрузке сессии
  store: new FileStore(),
  name: 'sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'elbrus_bears', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
    // path: '/count'
  },
};

const config = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true,
  }));
  app.use(session(sessionConfig));
  app.use(local);
  // app.use(cors({ origin: 'http://localhost:3000' }));
};

module.exports = config;
