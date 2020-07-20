const { flights } = require("../test-data/flightSeating");
const { reservations } = require("../test-data/reservations");

function findClient(email) {
  return reservations.find((client) => client.email == email);
}

function findID(id) {
  return reservations.find((client) => client.id === id);
}

function findFlight(flightNumber) {
  return flights[flightNumber];
}

function flightData(req, res) {
  res.status(200).json(Object.keys(flights));
}

function handleSingleFlight(req, res) {
  const flightNo = req.params.flightID;
  const flightlookup = findFlight(flightNo);
  console.log(flightNo);
  if (flightlookup === undefined) {
    res.status(404).send("no such flight exists");
  } else {
    res.status(200).json(flightlookup);
  }
}

function handleGetReserve(req, res) {
  res.status(200).json(reservations);
  console.log(reservations);
}

function handleReserve(req, res) {
  const clientEmail = req.body.email;
  const client = findClient(clientEmail);
  const newclient = req.body;
  if (client) {
    res.status(404).send("404");
  } else {
    reservations.push(newclient);
    console.log(reservations);
    res.status(200).send("200");
  }
}

function handleConfirmation(req, res) {
  const clientID = req.params.id;
  const bookedClient = findID(clientID);
  if (bookedClient !== undefined) {
    res.render("./pages/confirm", { client: bookedClient });
  } else {
    res.render("./pages/reserror");
  }
}

function handleInfo(req, res) {
  const confirmID = req.params.id;
  const bookedClient = findID(confirmID);
  if (bookedClient !== undefined) {
    res.render("./pages/reserveinfo", { client: bookedClient });
  } else {
    res.render("./pages/reserror");
  }
}

module.exports = {
  flightData, handleSingleFlight, handleReserve, handleGetReserve, handleConfirmation, handleInfo,
};