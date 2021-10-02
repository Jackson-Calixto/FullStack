exports.getdefault = function(req, res){
    res.send('You are on the root route.');
};
//
exports.aboutus=function(req, res){
    res.send('You are on the about us route.');
};
//
exports.employees=function(req, res){
    res.send('You are viewing employee# ' + req.params.employeeName); 
};
//
exports.getallrecords=function(req, res){
    res.send('You are on the getallrecords route.');
};
