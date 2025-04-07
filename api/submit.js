const controller = require('../controller'); // Import the controller

module.exports = (req, res) => {
  // Call the form function in the controller
  controller.form(req, res);
};