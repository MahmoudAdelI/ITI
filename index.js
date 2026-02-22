var errors = {
    name:[],
    age:[]
};
var student = document.querySelector('#studentName')
var age = document.querySelector('#studentAge')

var id = 0;

document.querySelector('form').addEventListener('submit', (event)=>{
    event.preventDefault();
    var existingErrors = document.querySelectorAll('ul')
    existingErrors.forEach(el => {
        el.remove();
    })
    
    // Name Validation
    errors.name = []
    if(!student.value) errors.name.push("Name is required");
    if(student.value.length < 3 && student.value.length > 0 ) errors.name.push("Name length must be greater than 3");
    // render errors
    if(errors.name.length > 0) renderErrors(errors.name, student);

    // Age Validation
    errors.age = []
    if(age.value < 18 && age.value > 0 ) errors.age.push("Age must be greater than 18");
    if(!age.value) errors.age.push("Age is required");
    if(errors.age.length > 0) renderErrors(errors.age, age);

    // Add to table
    if(errors.age.length == 0 || errors.student.length == 0 ){
    var newRow = `
            <tr>
                <td>${id++}</td>
                <td>${student.value}</td>
                <td>${age.value}</td>
                <td><button class="delete">Delete</button></td>
            </tr>`

    document.querySelector('#table-body').innerHTML +=newRow;
    }
})

// Deletion 
document.querySelector('#table-body').addEventListener('click', event=>{
    if(event.target.classList.contains('delete')){
        //event.target.parentElement.parentElement.remove();
        event.target.closest('tr').remove();
    }
})

// -----------------------------------------
function renderErrors(errors, element){
    var ErrorList = document.createElement('ul');
    element.after(ErrorList);
    errors.forEach(errMsg => {
        var err = document.createElement('li');
        err.textContent = errMsg;
        ErrorList.append(err)
    });
}