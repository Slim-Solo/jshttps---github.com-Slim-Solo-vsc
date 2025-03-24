
/*
IF -palyginimo savyga

Paliginimo operatoriai:
- visi: >, <, >=, <=, ==, ===, !=, !==
- naudotini: >, <, >=, <=, ===, !==
- nenaudotini: ==, !=

Kodo sablonai:
if () {}
if () {} else {}
if () {} else if {}
if () {} else if {} else {}
if () {} ... else if {} ... else {}
*/


console.log('START');

if (4 <= 2) {
    console.log('taip');
} else {
    console.log('ne');
}

console.log('END');

console.clear();

const temp = -2;

if (temp != 18) {
    console.log('silta 🌞');
} else {
    console.log('salta 🥶');
}

// jei zemiau 0 -> salta
// jai zemiau 10 -> meh
// jai zemiau 22 -> silta
// jai duaugiau -> karsta


const temp2 = 0;

if (temp2 < 0) {
    console.log('salta 🥶');
} else if (temp2 < 10) {
    console.log('meh 😐');
}
else if (temp2 < 22) {
    console.log('silta 🌞');
} else {
    console.log('karsta 🔥');
}

console.clear();

const clientValue = 4

if (4 === clientValue) {
    console.log('tenkina');
} else {
    console.log('NE-tenkina');
}