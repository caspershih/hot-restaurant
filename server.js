const express = require("express");
const parser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const tables = [
	{
		tableNo: 1,
		status: false
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
app.post("/api/new", function (req, res) {
	var newTable = req.body;

	var control = true;
	for (i = 0; i < tables.length; i++) {
		if (tables[i].status === false) {

			reservations.push(newTable);
			tables[i].status = true;
			control = false;
			res.json({ message: "Added Reservation", data: tables });
			break;
		}
	}
	if (control) {
		waitingList.push(newTable)
		res.json({ message: "Sorry but you have been added to the waiting list", data: tables })
	}
});

// Retrive Reservation JSON
app.get("/api/reservations", function(req, res) {
  if (reservations.length === 0) {
    return res.json([]);
  } else {
    return res.json({
      reservations: reservations,
      waiting: waitingList
    });
  }
});

// Serve HTML pages
app.get(/\/(([\w]+)\.html)$/, function (req, res, next) {
	const fileName = req.params[0];
	res.sendFile(
		fileName,
		{
			root: __dirname + "/",
			dotfiles: "deny",
			headers: {
				"x-timestamp": Date.now(),
				"x-sent": true
			}
		},
		function (err) {
			if (err) {
				next(err);
			} else {
				console.log("Sent:", fileName);
			}
		}
	);
});

/* End Workspace */
app.listen(PORT, function () {
	console.log(`http://localhost:${PORT}`);
});
