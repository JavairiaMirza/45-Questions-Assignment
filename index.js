// 2. Personal message
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var firstName = "Eric";
console.log("Hello ".concat(firstName, ", would you like to learn some Phython today?"));
console.log("----x----".repeat(7)); // for visual clarity
// 3. Name cases
var fullName = "ahmed ali";
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.charAt(0).toUpperCase() + fullName.slice(1));
console.log("----x----".repeat(7)); // for visual clarity
//4. Famous quote
console.log("It is during our darkest moments that we must focus to see the light.");
console.log("----x----".repeat(7)); // for visual clarity
// 5. Famous quote2
var famous_person = "Aristotle";
var message = "It is during our darkest moments that we must focus to see the light.";
console.log("".concat(famous_person, " once said,\"").concat(message, "\""));
console.log("----x----".repeat(7)); // for visual clarity
// 6. Stripping names
var name1 = "Ahmed\tAli";
var name2 = "Ahmed\nAli";
console.log(name1);
console.log(name2);
console.log("----x----".repeat(7)) // for visual clarity
;
// 7. Number eight
var a = 20;
var b = 4;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log("----x----".repeat(7)); // for visual clarity
// 8. Create four lines
console.log(6 + 4);
console.log(20 - 15);
console.log(3 * 3);
console.log(18 / 3);
console.log("----x----".repeat(7)); // for visual clarity
// 9. Favourite number
var favNumber = 1;
var message1 = "My favourite number is ".concat(favNumber);
console.log(message1);
console.log("----x----".repeat(7)); // for visual clarity
// 10. Adding comments
// addition progra
var c = 60;
var d = 40;
console.log("".concat(c, " + ").concat(d, " = ").concat(c + d));
// subtraction program
var e = 200;
var f = 100;
console.log("".concat(e, " + ").concat(f, " = ").concat(e + f));
console.log("----x----".repeat(7)); // for visual clarity
// 11. Names
var names = ["Ahmed", "Ali", "Ashar", "Hamza"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log("----x----".repeat(7)); // for visual clarity
// 12. Greetings
var message2 = "is my School friend";
console.log("".concat(names[0], " ").concat(message2));
console.log("".concat(names[1], " ").concat(message2));
console.log("".concat(names[2], " ").concat(message2));
console.log("".concat(names[3], " ").concat(message2));
console.log("----x----".repeat(7)); // for visual clarity
// 13. Your own array
var vehicles = ["Audi", "Tesla", "Mercedes"];
vehicles.map(function (item) { return console.log("I would like to own a ".concat(item)); });
console.log("----x----".repeat(7)); // for visual clarity
// 14. Guest list
var guests = ["Saad", "Hamza", "Zaid"];
guests.map(function (item) { return console.log("Dear ".concat(item, ", you are corodially invited to a dinner")); });
console.log("----x----".repeat(7)); // for visual clarity
// 15. Changing guest list
var canNotAttend = "Ahmed";
console.log("".concat(canNotAttend, " can't make it,for dinner"));
var newGuest = "Ali";
guests[guests.indexOf(canNotAttend)] = newGuest;
guests.map(function (item) { return console.log("Dear ".concat(item, ", you are corodially invited to a dinner")); });
console.log("----x----".repeat(7)); // for visual clarity
// 16. More guests
guests.map(function (item) { return console.log("Dear ".concat(item, ", I found a bigger dinner table")); });
var beginningGuest = "Ashar";
guests[guests.unshift(beginningGuest)];
var middleGuest = "Sara";
var middleIndex = guests.length / 2;
guests.splice(middleIndex, 0, middleGuest);
var lastGuest = "Saima";
guests.push(lastGuest);
guests.map(function (item) { return console.log("Dear ".concat(item, ", you are corodially invited to a dinner")); });
console.log("----x----".repeat(7)); // for visual clarity
// 17. Shrinking guests list
console.log("I can invite only two guests for dinner");
while (guests.length > 2) {
    var removeGuest = guests.pop();
    console.log("Dear ".concat(removeGuest, " sorry, you are not invited to the dinner"));
}
guests.map(function (item) { return console.log("Dear".concat(item, ", you are still invited to the dinner")); });
guests.pop(); // comment this line to run Q 19.
guests.pop(); // comment this line to run Q 19.
console.log(guests); // comment this line to run Q 19.
console.log("----x----".repeat(7)); // for visual clarity
// 18. Seeing the world
var countriesArray = ["Pakistan", "Scotland", "Norway", "Germany", "Finland"];
console.log(countriesArray);
console.log(countriesArray.sort()); // comment this line to run line no. 136-152
console.log(countriesArray);
console.log(countriesArray.reverse()); // comment this line to run line no. 142-152
console.log(countriesArray);
var reversedArray = countriesArray.reverse();
console.log(reversedArray);
var originalArray = reversedArray.reverse();
console.log(originalArray);
var sortedArray = originalArray.sort();
console.log(sortedArray);
var reverseSortedArray = sortedArray.reverse();
console.log(reverseSortedArray);
console.log("----x----".repeat(7)); // for visual clarity
// 19. Dinner guests
console.log("".concat(guests.length, " peoples are invited to the dinner"));
console.log("----x----".repeat(7)); // for visual clarity
// 20. Array of my choice
var progLanguages = ["TypeScript", "JavaScript", "Python", "C++", "SQL"];
progLanguages.map(function (item) { return console.log(item); });
console.log("----x----".repeat(7)); // for visual clarity
// 21. Typescript object
var person = {
    fullName: "Ahmed Ali",
    fatherName: "Saad Ali",
    age: 20
};
console.log(person);
console.log("----x----".repeat(7)); // for visual clarity
// 22. Intentional error
console.log(progLanguages[5]);
console.log(progLanguages[2]);
console.log("----x----".repeat(7)); // for visual clarity
// 23. Conditional tests;
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True otherwise I predict False");
console.log(car == 'subaru');
console.log(car == 'audi');
var number = 25;
console.log("Is number === '23'? I predict True otherwise I predict False");
console.log(number === 25);
console.log(number === "25");
var country = "Pakistan";
console.log("Is country == 'Pakistan'? I predict True otherwise I predict False");
console.log(country == "Pakistan");
console.log(country == "Turkey");
var mobile = "Iphone";
console.log("Is mobile == 'Iphone'? I predict True otherwise I predict False");
console.log(mobile == "Iphone");
console.log(mobile == "Android");
var mattress = "MoltyFoam";
console.log("Is mattres == 'MoltyFoam'? I predict True otherwise I predict False");
console.log(mattress == "MoltyFoam");
console.log(mattress == "DuraFoam");
var pen = "gel pen";
console.log("Is pen == 'gel pen'? I predict True otherwise I predict False");
console.log(pen == "gel pen");
console.log(pen == "ball point");
var book = "Islamic books";
console.log("Is book == 'Islamic books'? I predict True otherwise I predict False");
console.log(book == "Islamic books");
console.log(book == "story books");
var inverterAC = "Dawlance";
console.log("Is inverterAC == 'Dawlance'? I predict True otherwise I predict False");
console.log(inverterAC == "Dawlance");
console.log(inverterAC == "Panasonic");
var programmingLanguage = "TypeScript";
console.log("Is programmingLanguage == 'TypeScript'? I predict True otherwise I predict False");
console.log(programmingLanguage == "TypeScript");
console.log(programmingLanguage == "JavaScript");
var motorCycle = "Honda";
console.log("Is motorCycle == 'Honda'? I predict True otherwise I predict False");
console.log(motorCycle == "Honda");
console.log(motorCycle == "Suzuki");
console.log("----x----".repeat(7)); // for visual clarity
// 24. More conditional tests
var veg1 = "Potato";
var veg2 = "Tomato";
console.log(veg1 === veg2);
console.log(veg1 !== veg2);
var myName = "Ahmed Ali";
var lowerCaseString = myName.toLowerCase();
console.log(lowerCaseString === "Ahmed Ali");
console.log(lowerCaseString !== "Ahmed Ali");
var num1 = 10;
var num2 = 20;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
var g = true;
var h = false;
console.log(g && h);
console.log(g || h);
var stationary = ["Ink pen", "Pencil", "Eraser", "Sharpner", "Scale"];
console.log(stationary.includes("Ink pen"));
console.log(stationary.includes("Ink Pen"));
console.log("----x----".repeat(7)); // for visual clarity
// 25. Alien colors #1
var alien_color = "green";
if (alien_color == "green") {
    console.log("Congratulations! you just earned 5 points");
}
alien_color = "red";
if (alien_color == "green") {
    console.log("Congratulations! you just earned 5 points");
}
console.log("----x----".repeat(7)) // for visual clarity
;
alien_color = "green";
if (alien_color == "green") {
    console.log("you just earned 5 points for shooting the alien");
}
else {
    console.log("Congratulations! you just earned 10 points");
}
alien_color = "red";
if (alien_color == "green") {
    console.log("you just earned 5 points for shooting the alien");
}
else {
    console.log("Congratulations! you just earned 10 points");
}
console.log("----x----".repeat(7)); // for visual clarity
// 27. Alien colors #3
alien_color = "green";
if (alien_color == "green") {
    console.log("Congratulations! you just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("Congratulations! you just earned 10 points");
}
else if (alien_color == "red") {
    console.log("Congratulations! you just earned 15 points");
}
alien_color = "yellow";
if (alien_color == "green") {
    console.log("Congratulations! you just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("Congratulations! you just earned 10 points");
}
else if (alien_color == "red") {
    console.log("Congratulations! you just earned 15 points");
}
alien_color = "red";
if (alien_color == "green") {
    console.log("Congratulations! you just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("Congratulations! you just earned 10 points");
}
else if (alien_color == "red") {
    console.log("Congratulations! you just earned 15 points");
}
console.log("----x----".repeat(7)); // for visual clarity
// 28. Stages of life
var age = 85;
if (age < 2) {
    console.log("The person is a baby");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("The person is a adult");
}
else {
    console.log("The person is a elder");
}
console.log("----x----".repeat(7)); // for visual clarity
// 29. Favorite fruit
var faouriteFruits = ["Mango", "Banana", "Apple"];
if (faouriteFruits.includes("Mango")) {
    console.log("you really like Mango!");
}
if (faouriteFruits.includes("Banana")) {
    console.log("you really like Banana!");
}
if (faouriteFruits.includes("Orange")) {
    console.log("you really like Orange!");
}
if (faouriteFruits.includes("Apple")) {
    console.log("you really like Apple!");
}
if (faouriteFruits.includes("Grape")) {
    console.log("you really like Grape!");
}
console.log("----x----".repeat(7)); // for visual clarity
// 30. Hello admin
var userName = ["Admin", "Ahmed", "Ali"];
for (var i = 0; i < userName.length; i++) {
    if (userName[i] == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userName[i], ", thank you for logging in again."));
    }
}
console.log("----x----".repeat(7)); // for visual clarity
// 31. No users
if (userName.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < userName.length; i++) {
        console.log(userName[i]);
    }
}
userName = [];
if (userName.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < userName.length; i++) {
        console.log(userName[i]);
    }
}
console.log("----x----".repeat(7)); // for visual clarity
// 32. Checking usernames
var currentUsers = ["Ahmed", "Ali", "Saad", "Zohaib", "Hamza"];
var newUsers = ["Peter", "Sam", "Fatima", "Ashar", "Nisa"];
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    var available = true;
    for (var _a = 0, currentUsers_1 = currentUsers; _a < currentUsers_1.length; _a++) {
        var currentUser = currentUsers_1[_a];
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            console.log("Sorry, ".concat(newUser, " is already taken. Please choose a different username."));
            available = false;
            break;
        }
    }
    if (available) {
        console.log("".concat(newUser, " is available."));
    }
}
console.log("----x----".repeat(7)); // for visual clarity
// 33. Ordinal numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _b = 0, numbers_1 = numbers; _b < numbers_1.length; _b++) {
    var number_1 = numbers_1[_b];
    var ending = void 0;
    if (number_1 === 1) {
        ending = "st";
    }
    else if (number_1 === 2) {
        ending = "nd";
    }
    else if (number_1 === 3) {
        ending = "rd";
    }
    else {
        ending = "th";
    }
    console.log("".concat(number_1).concat(ending));
}
console.log("----x----".repeat(7)); // for visual clarity
// 34. Pizzas
var pizzas = ["Cheese", "Veggie", "BBQ Chicken"];
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like ".concat(pizzas[i], " Pizza"));
}
console.log("I really love Pizza!");
console.log("----x----".repeat(7)); // for visual clarity
// 35. Animals
var animals = ["Cat", "Rabbit", "Dog"];
for (var _c = 0, animals_1 = animals; _c < animals_1.length; _c++) {
    var animal = animals_1[_c];
    console.log("A ".concat(animal, " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
console.log("----x----".repeat(7)); // for visual clarity
// 36. T-shirts
function makeShirt1(size, message) {
    console.log("Size of the shirt is ".concat(size, " and the message on it is ").concat(message));
}
makeShirt1("medium", "'I love my Dad'");
console.log("----x----".repeat(7)); // for visual clarity
// 37. Large shirts
function makeShirt2(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "'I love TypeScript'"; }
    console.log("Size of the shirt is ".concat(size, " and the message on it is ").concat(message));
}
makeShirt2();
makeShirt2("medium");
makeShirt2("small", "'I love my Mom'");
console.log("----x----".repeat(7)); // for visual clarity
// 38. Cities
function describeCity(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describeCity("Islamabad");
describeCity("Lahore");
describeCity("Istanbul", "Turkey");
console.log("----x----".repeat(7)); // for visual clarity
// 39. City names
function cityCountry(city, country) {
    console.log("\"".concat(city, ", ").concat(country, "\""));
}
cityCountry("Karachi", "Pakistan");
cityCountry("Paris", "France");
cityCountry("Baghdad", "Iraq");
console.log("----x----".repeat(7)); // for visual clarity
// 40. Album
function makeAlbum(artist, title, tracks) {
    var musicAlbum = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        musicAlbum.tracks = tracks;
    }
    return musicAlbum;
}
var album1 = makeAlbum("The Beatles", "Abbey Road");
var album2 = makeAlbum("Queen", "A Night at the Opera");
var album3 = makeAlbum("Nirvana", "Nevermind", 12);
console.log(album1);
console.log(album2);
console.log(album3);
console.log("----x----".repeat(7)); // for visual clarity
// 41. Magicians
var magicians = ["Merlin", "Houdini", "David Copperfield", "Penn & Teller"];
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
showMagicians(magicians);
console.log("----x----".repeat(7)); // for visual clarity
// 42. Great magicians
function makeGreat(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log("The great ".concat(magician));
    }
}
makeGreat(magicians);
console.log("----x----".repeat(7)); // for visual clarity
// 43. Unchanged magicians
var greatMagicians = [];
function makeGreat2(magicians) {
    for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
        var magician = magicians_3[_i];
        greatMagicians.push("".concat(magician, " the Great"));
    }
    console.log(greatMagicians);
}
function showMagicians2(magicians) {
    for (var _i = 0, magicians_4 = magicians; _i < magicians_4.length; _i++) {
        var magician = magicians_4[_i];
        console.log(magician);
    }
}
magicians = ["Harry Houdini", "David Blaine", "Criss Angel"];
greatMagicians = makeGreat(__spreadArray([], magicians, true));
console.log(magicians);
console.log(greatMagicians);
console.log("----x----".repeat(7)); // for visual clarity
// 44. Sandwiches
function Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Here's your sandwich order:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("".concat(item));
    }
    console.log("Enjoy your delicious sandwich!");
}
Sandwich("turkey", "cheddar", "lettuce", "tomato");
Sandwich("peanut butter", "jelly");
Sandwich("grilled cheese", "bacon");
console.log("----x----".repeat(7)); // for visual clarity
function createCar(manufacturer, model) {
    var otherProperties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherProperties[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    var otherPropertiesObj = otherProperties.reduce(function (acc, prop) {
        if (Array.isArray(prop) && prop.length === 2) {
            acc[prop[0]] = prop[1];
        }
        else {
            console.warn("Invalid property: ".concat(prop));
        }
        return acc;
    }, {});
    return __assign(__assign({}, car), otherPropertiesObj);
}
var myCar = createCar("Audi", "Sportback", ["color", "blue"], ["sunroof", true]);
console.log(myCar);
console.log("==== x ====".repeat(6)); // for visual clarity
