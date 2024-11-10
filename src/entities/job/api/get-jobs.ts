import { apiClient } from "@/shared/api/apiClient";
import { Job } from "../model";

export const getJobs = async (): Promise<Job[]> => {
  const response = await apiClient.get<Job[]>("/vacancies/get");
  return response.data;
};

export const getUserJobs = async (userId: string): Promise<Job[]> => {
  const response = await apiClient.get(`/vacancies/get/user?userId=${userId}`);
  return response.data;
};
