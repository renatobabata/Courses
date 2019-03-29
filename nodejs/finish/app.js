var flight = require('./flight');

var pdxlax = {
	number: 123,
	origin: 'CPS',
	destination: 'GRU'
};

var pl = flight(pdxlax);

pl.triggerDepart();

console.log(pl.getInformation());

var ausdca = {
	number: 456,
	origin: 'AMS',
	destination: 'DUB'
};

var ad = flight(ausdca);

console.log(ad.getInformation());

console.log(pl.getInformation());


/*
flight.setOrigin('Campinas');
flight.setDestination('Londres');
flight.setNumber(123);

console.log(flight.getInfo());

var anotherFlight = require('./flight');

console.log(anotherFlight.getInfo());
*/
