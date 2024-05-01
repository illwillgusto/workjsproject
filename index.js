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

let StartDateMonth = prompt("Employee Start Date Month (1-12): ");
StartDateMonth = Number(StartDateMonth);
// Check if it is a valid integer
if (!Number.isInteger(StartDateMonth)) {
  console.error('Enter a valid start date month');
  process.exit(1);
}
// Check if the number is in the range
if (StartDateMonth < 1 || StartDateMonth > 12) {
   console.error('Enter a start date month within the correct range');
   process.exit(1);
}

let StartDateDay = prompt("Employee Start Date Day (1-31): ");
StartDateDay = Number(StartDateDay);
// Check if it is a valid integer
if (!Number.isInteger(StartDateDay)) {
  console.error('Enter a valid start date day');
  process.exit(1);
}
// Check if the number is in the range
if (StartDateDay < 1 || StartDateDay > 31) {
   console.error('Enter a start date day within the correct range');
   process.exit(1);
}

// Date elements are correct, let's create the date
employee.startDate = new Date(startDateYear, StartDateMonth - 1, StartDateDay);

let isActive = prompt("Is employee active (yes or no): ");
// Check if incorrect value was entered
if (isActive !== "yes" && isActive !== "no") {
  console.error(`Enter yes or no for employee active status`);
  process.exit(1);
}
employee.isActive = (isActive === "yes");
