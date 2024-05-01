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
