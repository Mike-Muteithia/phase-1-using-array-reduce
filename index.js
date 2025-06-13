//> Lab: Use reduce() to Create a Single Aggregate of All Items in a List

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce(function (totalAmount, accum) {
    return totalAmount += accum;
}, 0);

console.log(totalBatteries);












//> Learn How the reduce() Method Works

/* const products = [
  { name: "Shampoo", price: 4.99 },
  { name: "Donuts", price: 7.99 },
  { name: "Cookies", price: 6.49 },
  { name: "Bath Gel", price: 13.99 },
];

function getTotalAmountForProducts(products) {
    let totalPrice = 0;

    for (const product of products) {
        totalPrice += product.price;
    }

    return totalPrice;
}

console.log(getTotalAmountForProducts(products))
 */

/* const couponLocations = [
    {room: "Living room", amount: 5},
    {room: "Kitchen", amount: 2},
    {room: "Bathroom", amount: 1},
    {room: "Master bedroom", amount: 7},
];

function ourReduce(arr, reducer, init) {
    let accum = init;
    for (const element of arr) {
        accum = reducer(accum, element);
    }

    return accum;
}

function couponCounter(totalAmount, location) {
    return totalAmount + location.amount;
}

console.log(ourReduce(couponLocations, couponCounter, 0))
 */

//> Demonstrate using reduce() with a Primitive Return Value

/* const couponLocations = [
    {room: "Living room", amount: 5},
    {room: "Kitchen", amount: 2},
    {room: "Bathroom", amount: 1},
    {room: "Master bedroom", amount: 7},
];

function couponCounter(totalAmount, location) {
    return totalAmount + location.amount;
}

console.log(couponLocations.reduce(couponCounter, 0));
 */

/* const doubleAndSummed = [1, 2, 3].reduce(function (accumulator, element) {
    return element * 2 + accumulator;
}, 0);

console.log(doubleAndSummed)
 */

/* const doubleAndSummed = [1, 2, 3].reduce(function (accumulator, element) {
    return element * 2 + accumulator;
});

console.log(doubleAndSummed)
 */

/* const doubleAndSummed = [1, 2, 3].reduce(function (
    accumulator, 
    element
) {
    return element * 2 + accumulator;
}, 10);


console.log(doubleAndSummed)
 */

//> Demonstrate using reduce() with an Object as the Return Value

/* const letters = ["a", "b", "c", "b", "a", "a"];

const lettersCount = letters.reduce(function (countObj, currentLetter) {
    if (currentLetter in countObj) {
        countObj[currentLetter]++;
    } else {
        countObj[currentLetter] = 1;
    }
    return countObj;
}, {});

console.log(lettersCount);
 */

/* const artsShowcases = {
    Dance: [],
    Visual: [],
    Music: [],
    Theater: [],
    Writing: [],
};

incomingStudents.reduce(function (showcases, student) {
    showcases[studentSorter.showcaseAssign(student)].push(student);
}, artsShowcases);

artsShowcases["Visual"];
 */

