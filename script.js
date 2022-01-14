document.addEventListener('DOMContentLoaded', function (e) {
    //Getting form
    const formBody = document.forms['add-data'];
    const table = document.querySelector('#output');

    //Extracting Data on form submission
    formBody.addEventListener('submit', function (e) {
        e.preventDefault();

        //Getting values from Input boxes
        const fName = formBody.querySelector('#f-name').value,
            lName = formBody.querySelector('#l-name').value,
            email = formBody.querySelector('#email').value;

        //Getting input from Select options
        const genderOpt = formBody.querySelector('#gender');
        const genderVal = genderOpt.options[genderOpt.selectedIndex].textContent;
        //Validating Gender selection
        if (genderOpt.options[genderOpt.selectedIndex].value == 'default') {
            e.preventDefault();
            alert("Please choose your gender");
            return false;
        }

        //Checking if person is in the country within the last 14 days
        let inNigeria_14 = '';

        if (formBody.querySelector('input[type="checkbox"]').checked) {
            inNigeria_14 = 'Yes';
        } else {
            inNigeria_14 = 'No';
        };

    
        //Creating element
        const tr = document.createElement('tr');
        const td_1 = document.createElement('td');
        const td_2 = document.createElement('td');
        const td_3 = document.createElement('td');
        const td_4 = document.createElement('td');
        const td_5 = document.createElement('td');
        const td_6 = document.createElement('td');

        //Creating buttons for Edit and Delete
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        editBtn.textContent = 'Edit';
        deleteBtn.textContent = 'Delete'

        //adding class to buttons
        editBtn.className = 'edit';
        deleteBtn.className = 'delete'

        //Adding content
        td_1.textContent = fName + " " + lName;
        td_2.textContent = email;
        td_3.textContent = genderVal;
        td_4.textContent = inNigeria_14;
        td_5.appendChild(editBtn);
        td_6.appendChild(deleteBtn);

        //Appending to Dom
        tr.appendChild(td_1);
        tr.appendChild(td_2);
        tr.appendChild(td_3);
        tr.appendChild(td_4);
        tr.appendChild(td_5);
        tr.appendChild(td_6);
        table.appendChild(tr);

        //Showing table when input is received
        if (table.className != 'active') {
            table.className = 'active';
        }
        formBody.reset();
    });

    //Editing row.
    const editRow = document.querySelector('#output');
    editRow.addEventListener('click', function (e) {
        e.preventDefault();

        //deleteRow and editRow have the same reference to table
        //if statement is required to prevent the delete operation
        //from triggering the edit function.
        if (e.target.className != 'delete') {
                // Declaring variables
            const showEditTable = document.querySelector('#form-update-section');
            const hideAddTable = document.querySelector('#form-section');
            const newName = document.querySelector('#name');
            const newEmail = document.querySelector('#emailUpdate');
            let genderVal = '';
            let inNigeria_14 = '';

            //Show Update form
            hideAddTable.style.display = 'none';
            showEditTable.style.display = 'block';

            //Get content from table for update
            const trContent = e.target.parentElement.parentElement;
            nameEdit = Array.from(trContent.children)[0].textContent;
            emailEdit = Array.from(trContent.children)[1].textContent;

            newName.value = nameEdit;
            newEmail.value = emailEdit;

            //Update form content
            const updateForm = document.forms['update-data'];

            updateForm.addEventListener('submit', function (ee) {
                ee.preventDefault();

                const nameUpdate = updateForm.querySelector('#name').value,
                emailUpdate = updateForm.querySelector('#emailUpdate').value;

                    //Getting input from Select options
                const genderOpt = updateForm.querySelector('#genderUpdate');
                const genderVal = genderOpt.options[genderOpt.selectedIndex].textContent;
                //Validating Gender selection
                if (genderOpt.options[genderOpt.selectedIndex].value == 'default') {
                    ee.preventDefault();
                    alert("Please choose your gender");
                    return false;
                }

                //Checking if person is in the country within the last 14 days
                if (updateForm.querySelector('input[type="checkbox"]').checked) {
                    inNigeria_14 = 'Yes';
                } else {
                    inNigeria_14 = 'No';
                };

                // Updating form content
                Array.from(trContent.children)[0].textContent = nameUpdate;
                Array.from(trContent.children)[1].textContent = emailUpdate;
                Array.from(trContent.children)[2].textContent = genderVal;
                Array.from(trContent.children)[3].textContent = inNigeria_14;
                
                // Show the data appending form
                hideAddTable.style.display = 'block';
                showEditTable.style.display = 'none'; 
            });
        };
    });

     //Deleting an already appended row.
    const deleteRow = document.querySelector('#output');
    deleteRow.addEventListener('click', function (e) {
        if (e.target.className == 'delete') {
            const trDl = e.target.parentElement.parentElement;
            deleteRow.removeChild(trDl);
        }
        if (deleteRow.childElementCount == 1) {
            table.style.display = 'none'
        }
    });
});