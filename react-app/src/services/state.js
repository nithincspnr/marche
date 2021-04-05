const API_BASE_PATH = "http://localhost:5000";

export function getStates(input = "0-250") {
  let api = `${API_BASE_PATH}/states?visitRange=${encodeURIComponent(input)}`;
  return fetch(api)
    .then((data) => data.json())
    .then((data) => data.results);
}
