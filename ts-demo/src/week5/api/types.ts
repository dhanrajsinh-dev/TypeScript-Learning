export interface User {
  id: number;
  name: string;
  email: string;
}

// DTOs
export type CreateUserDto = Omit<User, "id">;
export type UpdateUserDto = Partial<Omit<User, "id">>;