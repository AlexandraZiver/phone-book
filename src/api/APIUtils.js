import axios from "axios";

async function sendRequest(url, setState) {
  const response = await axios.get(url);
  const allPersons = await response.data;
  setState(allPersons);
}

async function sendRequestById([url, id, setState]) {
  const response = await axios.get(url + "/" + id);
  const person = await response.data;
  setState(person);
}

export { sendRequest, sendRequestById };
