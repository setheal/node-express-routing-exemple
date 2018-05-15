const router = require('express').Router();
const defaultController = require('../controllers/defaultController');

router.all('*', defaultController.allInit);

router.all('/auth/*', defaultController.allAuth);

router.get('/|/index', defaultController.getIndex);

router.get('/form', defaultController.getForm);

router.post('/form', defaultController.postForm);

module.exports = router;