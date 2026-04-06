import { apiClient } from "./apiClient.js";
import type { User, CreateUserDto, UpdateUserDto } from "./types.js";

// GET all users
export function getUsers(): Promise<User[]> {
  return apiClient<User[]>("https://jsonplaceholder.typicode.com/users");
}

// GET single user
export function getUser(id: number): Promise<User> {
  return apiClient<User>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
}

// CREATE
export function createUser(data: CreateUserDto): Promise<User> {
  return apiClient<User>(
    "https://jsonplaceholder.typicode.com/users",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}

// UPDATE
export function updateUser(
  id: number,
  data: UpdateUserDto
): Promise<User> {
  return apiClient<User>(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );
}

// DELETE
export function deleteUser(id: number): Promise<void> {
  return apiClient<void>(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: "DELETE",
    }
  );
}