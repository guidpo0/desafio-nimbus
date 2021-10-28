const API_URL = new URL('http://localhost:3001');

function all() {
  return fetch(`${API_URL}dates`).then(
    (response) => response.json(),
  ).then(({ dates }) => dates);
}

function byId(id) {
  return fetch(`${API_URL}dates/${id}`).then(
    (response) => response.json(),
  ).then((data) => data).catch((error) => error);
}

export default { all, byId };
