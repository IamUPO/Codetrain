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

const studentData = [
    { name: "Kwabc", email: "kwabc@gmail.com", gen: 25, },
    { name: "Promise", email: "promise@gmail.com", gen: 27, },
    { name: "Ngozi", email: "ngozi@gmail.com", gen: 25, },
    { name: "Sam", email: "sam@gmail.com", gen: 27, },
    { name: "Robert", email: "robert@gmail.com", gen: 24, },
];

// console.table(studentData);

// for (let i = 0; i < studentData.length; i++) {
//     console.log(studentData[i]);
// }

// for (let student of studentData) {
//     console.log(student);
// }

const gen24Student = studentData.filter((studetData) => studetData.gen === 27);
console.log(gen24Student);