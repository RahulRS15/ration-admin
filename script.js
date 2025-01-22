const families = [
    { id: 1, name: "Family 1", ration: 0 },
    { id: 2, name: "Family 2", ration: 0 },
    { id: 3, name: "Family 3", ration: 0 },
    { id: 4, name: "Family 4", ration: 0 },
    { id: 5, name: "Family 5", ration: 0 }
  ];
  
  function populateTable() {
    const tableBody = document.getElementById('familyTable');
    tableBody.innerHTML = ""; 
    families.forEach(family => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${family.id}</td>
        <td>${family.name}</td>
        <td>${family.ration} kg</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  function assignRations() {
    const rationValues = [5, 10, 15, 20, 25];
    families.forEach((family, index) => {
      family.ration = rationValues[index];
    });
    populateTable(); 
  }
  
  function resetRations() {
    families.forEach(family => {
      family.ration = 0;
    });
    populateTable(); 
  }
  
  populateTable();
  