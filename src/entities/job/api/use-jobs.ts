import { useQuery } from "@tanstack/react-query";
import { getJobs, getUserJobs } from "../api/get-jobs";

export const useJobs = () => {
  return useQuery({
    queryKey: ["jobs"], // Unique query key
    queryFn: getJobs, // Function to fetch the jobs
    staleTime: 5 * 60 * 1000, // Optional: Cache data for 5 minutes
    retry: 3, // Optional: Retry failed requests up to 3 times
  });
};

export const useUserJobs = (userId: string) => {
  return useQuery({
    queryKey: ["userJobs", userId], // Unique query key includes userId
    queryFn: () => getUserJobs(userId), // Fetch jobs for the specified user
    staleTime: 5 * 60 * 1000,
    retry: 3,
    enabled: !!userId, // Only fetch if userId is provided
  });
};
