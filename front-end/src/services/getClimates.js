const API_URL = new URL('http://localhost:3001');

function all() {
  return fetch(`${API_URL}climates`).then(
    (response) => response.json(),
  ).then(({ climates }) => climates);
}

function byId(id) {
  return fetch(`${API_URL}climates/${id}`).then(
    (response) => response.json(),
  ).then((data) => data).catch((error) => error);
}

export default { all, byId };
