module.exports=(app)=>{
    var route_controllers = require('../controllers/controllers')
    app.get('/',route_controllers.test);
    app.post('/signup',route_controllers.signup);
    app.post('/login',route_controllers.login);
    app.post('/masterupload',route_controllers.masterupload);
    app.post('/assignurl',route_controllers.assignurl);
    app.post('/agentstart',route_controllers.agentstart);
    app.post('/agentcomplete',route_controllers.agentcomplete);
    app.post('/adminhold',route_controllers.adminhold);
    
}