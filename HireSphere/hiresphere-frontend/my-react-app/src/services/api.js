const BASE_URL = "http://localhost:8080/api";

/* ================= USERS ================= */

export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/users/all`);
  return res.json();
};

export const createUser = async (data) => {
  const res = await fetch(`${BASE_URL}/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};


/* ================= JOBS ================= */

export const getJobs = async () => {
  const res = await fetch(`${BASE_URL}/jobs/all`);
  return res.json();
};

export const createJob = async (data) => {
  const res = await fetch(`${BASE_URL}/jobs/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};


/* ================= APPLICATION ================= */

export const applyJob = async (jobId, candidateId) => {
  const res = await fetch(`${BASE_URL}/applications/apply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jobId,
      candidateId,
      matchPercentage: 75,
      status: "APPLIED",
    }),
  });
  return res.json();
};

export const getApplications = async () => {
  const res = await fetch(`${BASE_URL}/applications/all`);
  return res.json();
};


/* ================= PROFILE ================= */

export const createProfile = async (data) => {
  const res = await fetch(`${BASE_URL}/profiles/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};