type Role = "User" | "HR";

export interface ILoginDto {
  email: string;
  password: string;
}

export interface IRegisterDto {
  email: string;
  username: string;
  password: string;
  role: Role;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  role: "User" | "HR";
}
