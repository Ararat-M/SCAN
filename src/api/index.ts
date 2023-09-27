const token = JSON.parse(localStorage.getItem("token") || "{}");

export const headers = {
  "Content-type": "application/json",
  "Accept": "application/json",
  "Authorization": `bearer ${token}`
};