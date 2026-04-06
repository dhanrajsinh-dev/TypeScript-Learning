import { apiClient } from "./apiClient.js";
// GET all users
export function getUsers() {
    return apiClient("https://jsonplaceholder.typicode.com/users");
}
// GET single user
export function getUser(id) {
    return apiClient(`https://jsonplaceholder.typicode.com/users/${id}`);
}
// CREATE
export function createUser(data) {
    return apiClient("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(data),
    });
}
// UPDATE
export function updateUser(id, data) {
    return apiClient(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
    });
}
// DELETE
export function deleteUser(id) {
    return apiClient(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
    });
}
