// Write your solution in this file!
let employee = {
 streetAddress: '11 Broadway',
 name: 'Sam'
}
function  updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee} 
    newObject[key] = value
    return newObject;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign ({}, employee)
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    const newEmployee = ('12 Broadway', employee);
    return newEmployee;
}