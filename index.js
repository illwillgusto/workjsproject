import createPrompt from 'prompt-sync';
let prompt = createPrompt();

let employee = {};

let firstName = prompt("First Name: ");
if (!firstName) {
  console.error('Invalid first name'); // this will appear if a user doesn't enter their first name
  process.exit(1); // exiting the application
}
employee.firstName = firstName;

let lastName = prompt("Last Name: ");
if (!lastName) {
  console.error('Invalid last name');
  process.exit(1);
}
employee.lasttName = lastName;

let startDateYear = prompt("Employee Start Year (2010-2024): ");
startDateYear = Number(startDateYear);
// Check if it is a valid integer
if (!Number.isInteger(startDateYear)) {
  console.error('Enter a valid start date year');
  process.exit(1);
}
// Check if the number is in the range
if (startDateYear < 2010 || startDateYear > 2024) {
   console.error('Enter a start date year within the correct range');
   process.exit(1);
}


