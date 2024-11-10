import { apiClient } from "@/shared/api/apiClient";
import { AuthResponse, ILoginDto, IRegisterDto } from "../model";

export const registerUser = async (data: IRegisterDto) => {
  const result = await apiClient.post<AuthResponse>("/users/register", data);
  return result;
};

export const login = async (data: ILoginDto) => {
  const result = await apiClient.post<AuthResponse>("/users/login", data);
  return result;
};
