// lead data will be populated here
const leadData = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', source: 'Facebook', status: 'New' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', phone: '987-654-3210', source: 'Twitter', status: 'Contacted' },
    // ...
 ];
 
 // populate lead list
 const leadList = document.querySelector('.lead-list');
 
 leadData.forEach((lead) => {
    const leadDiv = document.createElement('div');
    leadDiv.classList.add('lead');
    leadDiv.innerHTML = `
        <h2>${lead.name}</h2>
        <p>Email: ${lead.email}</p>
        <p>Phone: ${lead.phone}</p>
        <p>Source: ${lead.source}</p>
        <p>Status: ${lead.status}</p>
        <button class="view-button" data-id="${lead.id}">View</button>
        <button class="edit-button" data-id="${lead.id}">Edit</button>
        <button class="delete-button" data-id="${lead.id}">Delete</button>
    `;
    leadList.appendChild(leadDiv);
 });
 
 // add event listeners to buttons
 const viewButtons = document.querySelectorAll('.view-button');
 const editButtons = document.querySelectorAll('.edit-button');
 const deleteButtons = document.querySelectorAll('.delete-button');
 
 viewButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        // show lead details
        const leadDetails = document.getElementById('lead-details');
        leadDetails.style.display = 'block';
        // populate lead details
        const leadData = leadData.find((lead) => lead.id === parseInt(id));
        const leadDataElement = document.querySelector('.lead-details');
        leadDataElement.innerHTML = `
            <h2>${leadData.name}</h2>
            <p>Email: ${leadData.email}</p>
            <p>Phone: ${leadData.phone}</p>
            <p>Source: ${leadData.source}</p>
            <p>Status: ${leadData.status}</p>
        `;
    });
 });
 
 editButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        // show lead management form
        const leadManagement = document.getElementById('lead-management');
        leadManagement.style.display = 'block';
        // populate form with lead data
        const leadData = leadData.find((lead) => lead.id === parseInt(id));
        document.getElementById('name').value = leadData.name;
        document.getElementById('email').value = leadData.email;
        document.getElementById('phone').value = leadData.phone;
        document.getElementById('source').value = leadData.source;
        document.getElementById('status').value = leadData.status;
    });
 });
 
 deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        // delete lead logic
        const index = leadData.findIndex((lead) => lead.id === parseInt(id));
        if (index > -1) {
            leadData.splice(index, 1);
            // refresh lead list
            leadList.innerHTML = '';
            leadData.forEach((lead) => {
                const leadDiv = document.createElement('div');
                leadDiv.classList.add('lead');
                leadDiv.innerHTML = `
                    <h2>${lead.name}</h2>
                    <p>Email: ${lead.email}</p>
                    <p>Phone: ${lead.phone}</p>
                    <p>Source: ${lead.source}</p>
                    <p>Status: ${lead.status}</p>
                    <button class="view-button" data-id="${lead.id}">View</button>
                    <button class="edit-button" data-id="${lead.id}">Edit</button>
                    <button class="delete-button" data-id="${lead.id}">Delete</button>
                `;
                leadList.appendChild(leadDiv);
            });
        }
    });
 });
 
 // handle lead form submission
 const leadForm = document.getElementById('lead-form');
 leadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newLead = {
        id: leadData.length + 1,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        source: document.getElementById('source'). value,
        status: document.getElementById('status').value,
    };
    leadData.push(newLead);
    // refresh lead list
    leadList.innerHTML = '';
    leadData.forEach((lead) => {
        const leadDiv = document.createElement('div');
        leadDiv.classList.add('lead');
        leadDiv.innerHTML = `
            <h2>${lead.name}</h2>
            <p>Email: ${lead.email}</p>
            <p>Phone: ${lead.phone}</p>
            <p>Source: ${lead.source}</p>
            <p>Status: ${lead.status}</p>
            <button class="view-button" data-id="${lead.id}">View</button>
            <button class="edit-button" data-id="${lead.id}">Edit</button>
            <button class="delete-button" data-id="${lead.id}">Delete</button>
        `;
        leadList.appendChild(leadDiv);
    });
    leadForm.reset();
 });