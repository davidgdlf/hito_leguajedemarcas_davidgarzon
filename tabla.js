fetch('https://www.el-tiempo.net/api/json/v1/provincias')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('#table tbody');
    data.forEach(item => {
      const row = document.createElement('tr');
      const codeCell = document.createElement('td');
      codeCell.textContent = item.CODPROV;
      row.appendChild(codeCell);

      const nameCell = document.createElement('td');
      nameCell.textContent = item.NOMBRE_PROVINCIA;
      row.appendChild(nameCell);
      
      const capitalCell = document.createElement('td');
      capitalCell.textContent = item.CAPITAL_PROVINCIA;
      row.appendChild(capitalCell);
      
      const comunidadCell = document.createElement('td');
      comunidadCell.textContent = item.COMUNIDAD_CIUDAD_AUTONOMA;
      row.appendChild(comunidadCell);

      
      tableBody.appendChild(row);
    });
  });
