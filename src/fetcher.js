export const jobFetcher = async () => {
    const data = await fetch("http://localhost:8000/data");
    const res = await data.json();
    return res;
  }


