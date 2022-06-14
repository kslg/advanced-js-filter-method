  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
// A simple  array of people. Each item in the array is an object containing 
// the name and the age of a  person.

// I want to iterate through this array and  
// create a new array of only the people who are old  enough to drink alcohol
// those who are at least 21 years old.
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];
// use a simple arrow function that takes the "person" as a parameter, and returns person.age >= 21.
const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);
  // output: [ { name: 'Michael', age: 23 } ]

const paul = people.filter (people => people.name === "Paul")
console.log(paul)
  // output: [ { name: 'Paul', age: 18 } ]

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

const candidates = students.filter (student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
   // To return a true or false result for the original filter is return
   // whether strongSkills.length is greater than zero.  
  return strongSkills.length > 0;
})
console.log(candidates);

// cleaner way
const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
const candidatesNew  = students.filter(hasStrongSkills);
console.log(candidatesNew);

// output same on both:
// [
//   {
//     id: 1,
//     name: 'Mark',
//     profession: 'Developer',
//     skills: [ [Object], [Object], [Object] ]
//   },
//   {
//     id: 3,
//     name: 'Jason',
//     profession: 'Designer',
//     skills: [ [Object], [Object], [Object] ]
//   }
// ]