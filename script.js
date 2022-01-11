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
        if (genderVal == 'default') {
            e.preventDefault();
            alert("Please choose your gender");
            return false;
        }
        

    
        //Checking if person is in the country within the last 14 days
        let inNigeria_14 = '';

        if (formBody.querySelector('input[type="checkbox"]').checked) {
            inNigeria_14 =  'Yes';
        }else{
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
        
    });
    
})

