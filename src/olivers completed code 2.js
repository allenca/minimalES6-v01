// name manufacturer and year, only action is Fly


export default class Plane {
	constructor(name, manufacturer, year) {
		if (name !== undefined && manufacturer !== undefined &&
		 typeof year == 'number') {
			console.log("The year is " + year);
			console.log("A plane was created from " + manufacturer);
			console.log("The plane was named " + name);
			this.name = name;
			this.manufacturer = manufacturer;
			this.year = year;
		} else {
			console.log("Whoops! You need a name, manufacturer and valid year in order to make a plane. Anything else is make believe.");
			this.name = "no name";
			this.manufacturer = "no manufacturer";
			this.year = "no year";
		}
	}

	fly(plane) {
		console.log('Starting the engines...');
		let output = "";
		if (plane.name !== undefined && plane.manufacturer !== undefined && typeof plane.year == 'number') {
			output = `
				The ${plane.year} ${plane.manufacturer} ${plane.name} is flying! Woo hooooo!
			`;
		}
		else {
			output = 'Crap. Engine of this make-believe plane blew up. Sucks to be you.';
		}
		console.log(output);
	}
}