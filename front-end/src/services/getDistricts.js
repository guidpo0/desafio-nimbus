const API_URL = new URL('http://localhost:3001');

function all() {
  return fetch(`${API_URL}districts`).then(
    (response) => response.json(),
  ).then(({ districts }) => districts);
}

function byId(id) {
  return fetch(`${API_URL}districts/${id}`).then(
    (response) => response.json(),
  ).then((data) => data).catch((error) => error);
}

export default { all, byId };
