import inquirer from 'inquirer';
let schoolName: string="millat gramer school"
console.log(schoolName);
let studentDetails=await inquirer.prompt([{message:"enter student name",name:"student"}]);

console.log("Student Details:", studentDetails);
let studentEmail=await inquirer.prompt([{message:"enter student email",name:"email"}]);
console.log("Student Email:", studentEmail);
let studentAge=await inquirer.prompt([{message:"enter student age",name:"age"}]);
console.log("Student Age:", studentAge);
let fatherName=await inquirer.prompt([{message:"enter father name",name:"father"}]);
console.log("Father Name:", fatherName);
let cellNmber=await inquirer.prompt([{message:"enter cell number",name:"cell"}]);
console.log("Cell Number:", cellNmber);
