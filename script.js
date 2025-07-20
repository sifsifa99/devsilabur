function buatLaporan() {
  window.open('https://forms.gle/6TUKASUTH7wQcunK7', '_blank');
}

function getBUMD() {
  const url = "https://script.google.com/macros/s/AKfycbyPiPwJbum73ofGc2beDrZKlXeMUuh4fFZq_VDVh_EQEf6WtkU7N8zcT_ekQaKv-wgu/exec";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      renderTable(data, "Laporan BUMD");
    })
    .catch(error => console.error('Error:', error));
}

function getRUPS() {
  const url = "https://script.google.com/macros/s/AKfycbzyeNYReXi4Z861QYNw2Zb5mWa9Bcoisps_2CgczA9O0ost1xWZubTRTP6Du7eS3J0lpg/exec";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      renderTable(data, "Laporan RUPS");
    })
    .catch(error => console.error('Error:', error));
}

function renderTable(data, title) {
  const container = document.getElementById('data-container');
  if (!Array.isArray(data)) {
    container.innerHTML = "<p>Format data tidak sesuai.</p>";
    return;
  }

  let table = `<h2>${title}</h2><table><thead><tr>`;
  // Ambil header dari key object pertama
  const headers = Object.keys(data[0]);
  headers.forEach(header => {
    table += `<th>${header}</th>`;
  });
  table += `</tr></thead><tbody>`;

  // Isi data
  data.forEach(row => {
    table += `<tr>`;
    headers.forEach(header => {
      table += `<td>${row[header]}</td>`;
    });
    table += `</tr>`;
  });

  table += `</tbody></table>`;
  container.innerHTML = table;
}
