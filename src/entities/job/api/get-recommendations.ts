import { apiClient } from "@/shared/api/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface Candidate {
  id: number;
  userId: number;
  hard_skills: string[];
  soft_skills: string[];
  work_experience: string[];
  formatOfWork: string;
  employmentType: string;
  experience: number;
  salary: number[];
  position: string;
  location: string;
  additional: string[];
  summary: string;
  contacts: string[];
  evaluation: number;
}

export const getRecommendations = async (id: string): Promise<Candidate[]> => {
  const response = await apiClient.get(`/vacancies/recommend/${id}`);
  return response.data;
};

export const useRecommendations = (id: string) => {
  return useQuery<Candidate[], Error>({
    queryKey: ["recommendations", id],
    queryFn: () => getRecommendations(id),
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
};
