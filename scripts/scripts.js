let file = "json.txt";
//
$.getData = function(){
	let dfd = $.Deferred();
	$.ajax({
		url:file,
		type:"GET",
		dataType:"json",
		success:function(result){
			//console.log(result);
			dfd.resolve(result);
		},
		error:function(err){
			//console.log(err);
			dfd.reject(err);
		}
	});
	
	return dfd.promise();
};
//
$.getData().then(
	function(result){
		console.log(result);
	},
	function(err){
		console.log(err);
	}
)
//
