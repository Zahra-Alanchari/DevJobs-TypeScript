export interface Job {
  data: Array<JobDetail>;
}
export interface JobDetail {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: JobRequirements;
  role: JobRole;
}

export interface JobRequirements {
  content: string;
  items: Array<string>;
}
export interface JobRole {
  content: string;
  items: Array<string>;
}

export interface RootState {
  job: {
    lightMode: boolean;
    job: Job["data"];
    input: string;
    id: number | null;
    location: string;
    fullTime: string;
    filteredData: Job["data"];
  };
}
