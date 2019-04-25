const request = require('request');

var express=require('express');

var app=express();

var googleApiKey='<Google Places API Key>'


//Get place by text search.
app.get('/GetPlace',function(req,res)
{
	var responseBody;
	
	//Check if userId is null or empty and userId is equal to "admin@123"
	if(req.query.userId != null && req.query.userId==='admin@123')
	{
		//Check if parameter place is null or empty..
		if(req.query.place != null)
		{
			//Create search url
			var url='https://maps.googleapis.com/maps/api/place/textsearch/json?query='+req.query.place+'&key='+googleApiKey;		
			
			//Log url
			console.log(url);
			
			//Requesting google. 
			request(url, { json: true }, (err, response, body) => {
			if (err) { return console.log(err); }
			console.log(body);
			responseBody =	body;
			res.send(responseBody);
			});
		}
		else
			res.send("Parameter 'place' is null or empty!!");
			
	}	
	else
		res.send("Failed To Authenticate User.");
	
});


//Get places nearby location (lat,lng)
app.get('/GetNearby',function(req,res)
{
	var responseBody;
	
	//Check if userId is null or empty and userId is equal to "admin@123"
	if(req.query.userId != null && req.query.userId==='admin@123')
	{
		//Check if parameter location attributes (Lat,Lng) are null or empty..
		if(req.query.location != null)
		{
			//Create search url
			var url='https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+req.query.location+'&radius=1500&key='+googleApiKey;		
			
			//Log url
			console.log(url);
			
			//Requesting google. 
			request(url, { json: true }, (err, response, body) => {
			if (err) { return console.log(err); }
			console.log(body);
			responseBody =	body;
			res.send(responseBody);
			});
		}
		else
			res.send("Parameter 'location' is null or empty!!");
			
	}	
	else
		res.send("Failed To Authenticate User.");
	
});

//Get places nearby location (lat,lng)
app.get('/FindPlace',function(req,res)
{
	var responseBody;
	
	//Check if userId is null or empty and userId is equal to "admin@123"
	if(req.query.userId != null && req.query.userId==='admin@123')
	{
		//Check if parameter location attributes (Lat,Lng) are null or empty..
		if(req.query.placeToFind != null)
		{
			//Create search url
			var url='https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input='+req.query.placeToFind+'&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key='+googleApiKey;		
			
			//Log url
			console.log(url);
			
			//Requesting google. 
			request(url, { json: true }, (err, response, body) => {
			if (err) { return console.log(err); }
			console.log(body);
			responseBody =	body;
			res.send(responseBody);
			});
		}
		else
			res.send("Parameter 'placeToFind' is null or empty!!");
			
	}	
	else
		res.send("Failed To Authenticate User.");
	
});





var server=app.listen(3000,function() {});




