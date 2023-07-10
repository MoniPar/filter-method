  
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
