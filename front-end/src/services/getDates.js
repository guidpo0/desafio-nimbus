const API_URL = new URL('http://localhost:3001');

function getAll() {
  return fetch(`${API_URL}dates`).then(
    (response) => response.json(),
  ).then(({ dates }) => dates);
}

function getById(id) {
  return fetch(`${API_URL}dates/${id}`).then(
    (response) => response.json(),
  ).then((data) => data).catch((error) => error);
}

export default { getAll, getById };
