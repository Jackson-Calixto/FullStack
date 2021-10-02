const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'Weights';
const mClient = new MongoClient(url, {
	useNewUrlParser: true
});
//
mClient.connect(function(err) {
	if(err) console.log("Error");
	const db = mClient.db(dbName);
  getDocuments(db, function(result){
		console.log(result);
		mClient.close();
	});
});
//
const getDocuments = function(db, callback) {
	db.collection("EmployeeWeights").find().toArray(	 		function(err, result){
		if(err) throw err;
		//console.log(result);
		callback(result);
	});
};
