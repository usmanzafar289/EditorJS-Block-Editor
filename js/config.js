function callService(serviceMethodName, successMethodCallBack, errorMethodCallBack, params, requestType = "get", requestFrom = "file_system" ){
	var url = serviceMethodName;
	if(requestFrom != "file_system"){
	$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
			contentType: 'application/json',
			data: JSON.stringify(params),
			success: function (msg) {		        
			successMethodCallBack(msg);
			$('#loading').hide();
			},
			error: function (xhr, status, error) {
				errorMethodCallBack(xhr, status, error);
			  $('#loading').hide();
			}
		});
	}else{
	//	debugger
		readJSONFile(url, function(data){
			var data = JSON.parse(data);
			successMethodCallBack(data);
		});
	}
		
}

function readJSONFile(file, callback) {
    var rawFile = new XMLHttpRequest();
	//rawFile.mode('no-cors');
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
			debugger
            //callback(rawFile.respons);
        }
    }
	/* rawFile.onerror = function (err) {
	  callback(err);
	}; */
    rawFile.send(null);
}

//usage:
/* readJSONFile("/Users/Documents/workspace/test.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
}); */