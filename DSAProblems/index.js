// var name = "promise";

// let correctName;

// // correctName = name.charAt(0).toUpperCase() + name.slice(1);
// // correctName = name[0].toUpperCase(){ + name.slice(1);
// // correctName = `${name[0].toUpperCase()} ${name.slice(1)}`;

// console.log(correctName);

// for (i = 0; i < 5; i++) {
//     console.log("Hello World");
// }

// let array = [];

// Array(5).fill("Hello World").forEach(message => console.log(message));

// let studentData = [
//     { name: "Kwabc", email: "kwabc@gmail.com", gen: 25, },
//     { name: "Promise", email: "promise@gmail.com", gen: 27, },
//     { name: "Ngozi", email: "ngozi@gmail.com", gen: 25, },
//     { name: "Sam", email: "sam@gmail.com", gen: 27, },
//     { name: "Robert", email: "robert@gmail.com", gen: 24, },
// ];

// console.table(studentData);

// for (let i = 0; i < studentData.length; i++) {
//     console.log(studentData[i]);
// }

// for (let student of studentData) {
//     console.log(student);
// }

// let gen24Student = studentData.filter((studetData) => studetData.gen === 27);
// console.log(gen24Student);

// DSA Class Two (Destructuring)

// let student = {
//     name: "Promise",
//     email: "Promise@gmail.com",
//     gen: 27,
//     age: 25,
// }

// let studentName = student.name;
// // console.log(studentName)

// let {name, age: currentName=1, gen, email , phoneNumber= "0542939165"} = student;

// console.log(currentName);

//I have two CSSSupportsRule, and on my left Cup is salt and on the right Cup is Sugar, How do I swap the sugar for the salt cup.
// let leftCup = "salt";
// let rightCup = "sugar";

// let temp = leftCup;
// leftCup = rightCup;
// rightCup = temp;

// [leftCup="salt", rightCup="sugar"] = [rightCup="sugar", leftCu="salt"];

// console.log("Left Cup: " + leftCup);
// console.log("Right Cup: " + rightCup);


// let name = ['will', 'promise', 'kwabc', 'sam', 'ngozi', 'robert'];

// [a,b, ...rest] = name;

// console.log(a);

// Create a nested object and destructure it
// let userObject = {
//     name: "Promise",
//     age: "25",
//     email: "promise@gmail.com",
//     School: {
//         title: "Codetrain",
//         gen: "27",
//         location: "EastLegon"
//     }
// };

// let { name, age, email, School: { title: schoolName, gen, location } } = userObject;

// console.log(name);

// Destructuring
// Nested Object
// Array Destructure
// Object Destructure
// Undefined
// Spread Operator
// Swapping Values