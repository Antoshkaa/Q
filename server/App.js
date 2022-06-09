const express = require('express');
const createError = require('http-errors');
require('@babel/register');
const path = require('path');
const config = require('./config/config');

const mainRoute = require('./routes/mainRouter.routes');

const errorConfig = require('./config/error');

// const homeRouter = require('./routes/home.router');

const app = express();
const PORT = process.env.PORT ?? 4000;
const publicPath = path.resolve('public');

app.use(express.static(publicPath));

config(app);

// app.use('/', homeRouter);
app.use('/', mainRoute);

errorConfig(app, createError);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
