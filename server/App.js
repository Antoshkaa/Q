const express = require('express');
const createError = require('http-errors');

const config = require('./config/config');
// const mainRoute = require('./routes/main/main.routes');

const errorConfig = require('./config/error');


// const homeRouter = require('./routes/home.router');

const app = express();
const PORT = process.env.PORT ?? 4000;

config(app);

// app.use('/', homeRouter);
// app.use('/', mainRoute);

errorConfig(app, createError);


app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
