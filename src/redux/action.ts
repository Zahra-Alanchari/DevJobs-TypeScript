import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchgetAllJobs = createAsyncThunk('jobs/allJobs', async () => {
  const respons = await fetch('/data.json');
  const data = await respons.json();
  return data.data;
});
