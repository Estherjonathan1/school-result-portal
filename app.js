const results = [
  { student: 'Amina Yusuf', admission: 'BFS-101', className: 'SS2A', subjects: 'English, Mathematics, Biology', average: '88%', status: 'Excellent' },
  { student: 'Daniel Okafor', admission: 'BFS-102', className: 'SS2A', subjects: 'Physics, Chemistry, Maths', average: '79%', status: 'Good' },
  { student: 'Chiamaka Nwosu', admission: 'BFS-103', className: 'SS2B', subjects: 'English, Literature, Civic', average: '74%', status: 'Credit' },
  { student: 'Tunde Bello', admission: 'BFS-104', className: 'SS2B', subjects: 'Economics, Geography, Government', average: '81%', status: 'Very Good' }
];

const tbody = document.getElementById('results-body');
const statusMessage = document.getElementById('status-message');
const form = document.getElementById('search-form');
const input = document.getElementById('student-search');

function renderResults(items) {
  tbody.innerHTML = '';

  if (!items.length) {
    tbody.innerHTML = '<tr><td colspan="6">No results found. Try another name or admission number.</td></tr>';
    statusMessage.textContent = 'No matching students found.';
    return;
  }

  const rows = items.map((item) => `
    <tr>
      <th scope="row">${item.student}</th>
      <td>${item.admission}</td>
      <td>${item.className}</td>
      <td>${item.subjects}</td>
      <td>${item.average}</td>
      <td>${item.status}</td>
    </tr>
  `).join('');

  tbody.innerHTML = rows;
  statusMessage.textContent = `Showing ${items.length} student${items.length === 1 ? '' : 's'}.`;
}

function filterResults(term) {
  const query = term.trim().toLowerCase();
  if (!query) {
    renderResults(results);
    return;
  }

  const filtered = results.filter((item) => {
    return [item.student, item.admission, item.className].some((value) => value.toLowerCase().includes(query));
  });

  renderResults(filtered);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  filterResults(input.value);
});

input.addEventListener('input', () => {
  filterResults(input.value);
});

renderResults(results);
