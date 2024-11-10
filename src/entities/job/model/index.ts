export interface Job {
  id: number; // Unique identifier for the job
  userId: number; // User ID who posted the job
  title: string; // Title of the job
  description: string; // Description of the job
  hard_skills: string[]; // Array of required hard skills
  soft_skills: string[]; // Array of required soft skills
  formatOfWork: string[]; // Array of work formats (e.g., "In-office", "Remote")
  employmentType: string; // Employment type (e.g., "Full-time")
  salary: [number, number] | [number]; // Salary range or single value
  task: string; // Task or responsibility description
  requirements: string[]; // Array of job requirements
  location: string | null; // Location (city) or null if not specified
  additional: string[]; // Array of additional benefits or details
  contacts: string[]; // Array of contact information
  created_at: string | null; // ISO date string for creation date or null
}
