// conf.js
exports.config = {
  // seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.40.0.jar',
  // chromeDriver: '../node_modules/protractor/selenium/chromedriver',
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../Components/todo/ToDoApp.spec.js']
  //   baseUrl: 'http://localhost:9000/'
};
