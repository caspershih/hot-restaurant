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


// Retrive Reservation JSON


// Serve HTML pages


/* End Workspace */
app.listen(PORT, function() {
	console.log(`http://localhost:${PORT}`);
});