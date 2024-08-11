import { Job } from "./Type/type";

export const jobFetcher = async ():Promise<Job> => {
    const data = await fetch("http://localhost:8000/data");
    const res = await data.json();
    return res;
  }


