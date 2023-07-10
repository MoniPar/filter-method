  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
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

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

const paul = people.filter(person => person.name === 'Paul');
console.log(paul);
// This can be shortened further by changing the person parameter to just p
// const paul = people.filter(p => p.name === "Paul");
// console.log(paul);

// To access the object itself rather than the array, simply append [0] to the end
// const paul = people.filter(p => p.name === "Paul")[0];
// console.log(paul); 

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

// const candidates = students.filter(student => {
//   let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//   return strongSkills.length > 0;
// });
// console.log(candidates); 

// This case extracts the whole filter function into its own function, then passes
// the hasStrongSkills funciton to the filter.  This will allow us to reuse the filter
// function elsewhere.
// ----
// const hasStrongSkills = student => {
//   let strongSkills = student.skills.filter(skill => skill.yrsExperience >=5);
//   return strongSkills.length > 0;
// };
// const candidates = students.filter(hasStrongSkills);
// console.log(candidates)
// ----

// For more complex filtering, this is easier to read if writing the callback function
// first, then pass it to the filter method.
const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
const candidates = students.filter(hasStrongSkills);
const names = candidates.map(student => [student.name]);
console.log(names);


// Challenge - Create a single line of code that should filter the secStudents array and
// and retur only the items whose maths scores are greater than or equal to 90. You are
// required to use an arrow funciton that does not have a return statement.

let secStudents = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 84, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 67, english: 87, art: 95},
  }
];

// Create a variable named topMaths using the const keyword.
// Assign it a value from using the filter method on the secStudents array.
// Use a single line arrow function within the filter method.
const topMaths = secStudents.filter(student => student.results.maths >= 90);
// Log out the variable topMaths
console.log(topMaths);
