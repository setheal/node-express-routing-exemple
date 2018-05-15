const path = require('path');

const defaultController = {
  allInit: (req, res, next) => {
    console.log('All init');
    next();
  },

  allAuth: (req, res, next) => {
    console.log('All auth');
    next();
  },

  getIndex: (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
  },

  getForm: (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'form.html'));
  },

  postForm: (req, res) => {
    res.send({ result: 'success' });
  }
}

module.exports = defaultController;