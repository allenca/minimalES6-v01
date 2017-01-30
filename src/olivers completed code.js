/**
 * Created by Edward_J_Apostol on 2016-08-29.
 */
// this is where the "main" section of your app begins.
// its like a launch pad, where you bring all your other classes
// together for use.

import Person from './Person';
import Car from './Car';
import Plane from './Plane';

let edward = new Person("Edward");
let eds_car = new Car("ford");

edward.car = eds_car;
edward.car.drive(edward);

let cessna = new Plane("Cessna", "Boeing", 1972);
cessna.fly(cessna);

let crapPlane = new Plane();
crapPlane.fly(crapPlane);

// new plane: Sesna, Boeing, 1972