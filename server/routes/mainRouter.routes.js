const router = require('express').Router();
const registerRouteApi = require('./Api/regRouter.routes');
const loginRouteApi = require('./Api/loginRouter.routes');
const logoutRoteApi = require('./Api/logoutRouter.routes');

router.use('/registration', registerRouteApi);
router.use('/login', loginRouteApi);
router.use('/logout', logoutRoteApi);

module.exports = router;