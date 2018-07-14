const express = require("express");
const parser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const tables = [
	{
		tableNo: 1,
		status: true
	},
	{
		tableNo: 2,
		status: false
	},
	{
		tableNo: 3,
		status: false
	},
	{
		tableNo: 4,
		status: false
	},
	{
		tableNo: 5,
		status: false
	}
];

const reservations = [];
const waitingList = [];

// Sets up the Express app to handle data parsing
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
/* Start Workspace */

// New Reservation Handling
app.post("/api/new", function(req, res){
	var newTable = req.body;

    var doWeNeedToDoSomethingElse = true;
    for(i = 0; i < tables.length; i++){
        if (tables.status === false){
			reservations.push(res.json(newTable));
            table.status = true
            doWeNeedToDoSomethingElse = false;
            break;
        }
    }

    if (doWeNeedToDoSomethingElse) {
		waitingList.push(res.json(newTable))
		console.log("You have been added to the waiting list!")
		doWeNeedToDoSomethingElse = true;
}

    

    res.json({message: "Added Reservation"})
    res.json({message: "Sorry but you have been added to the waiting list"})
    res.json(newTable);

});


// Retrive Reservation JSON


// Serve HTML pages


/* End Workspace */
app.listen(PORT, function() {
	console.log(`http://localhost:${PORT}`);
});