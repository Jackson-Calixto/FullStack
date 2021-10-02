module.exports = function(app){
  let controller = require('../controllers/controller');
  app.route('/').get(controller.getdefault);
  app.route('/aboutus').get(controller.aboutus);
  app.route('/employees/:employeeName').get(controller.employees);
  app.route('/getallrecords').get(controller.getallrecords);
  //
};
