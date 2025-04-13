let patients = [
  { id: 1, name: "Alen", age: 39 },
  { id: 2, name: "Deena", age: 47 },
  { id: 3, name: "Diana", age: 21 },
  { id: 4, name: "Jack", age: 54 },
  { id: 5, name: "Jain", age: 23 },
  { id: 6, name: "Kelvin", age: 61 },
  { id: 7, name: "Louis", age: 69 },
  { id: 8, name: "Rex", age: 49 }
];

// (i) Sort in descending order by age and display
patients.sort((a, b) => b.age - a.age);
console.log("Sorted by Age (Descending):");
patients.forEach(p => console.log(`${p.name}: ${p.age}`));

// (ii) Check if a particular P-Id is present
function checkPId(id) {
  const found = patients.some(patient => patient.id === id);
  console.log(`P-Id ${id} is ${found ? 'present' : 'not present'}`);
}
checkPId(4);  // Change the value to test with different P-Ids

// (iii) Filter patients by age range
function filterByAge(min, max) {
  const filtered = patients.filter(p => p.age >= min && p.age <= max);
  console.log(`Patients between age ${min} and ${max}:`);
  filtered.forEach(p => console.log(`${p.name}: ${p.age}`));
}
filterByAge(40, 60);  // Change the range to test with different values
