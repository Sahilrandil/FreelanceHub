import { seedJobs, seedProposals } from "../data/data";

const LS_KEYS = {
  jobs: "flh_jobs",
  proposals: "flh_proposals",
};

const CURRENT_FREELANCER_NAME = "You (Freelancer)";

function sleep(ms = 150) {
  return new Promise((r) => setTimeout(r, ms));
}

function readLS(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function writeLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function initMockDb() {
  const existingJobs = readLS(LS_KEYS.jobs, null);
  const existingProps = readLS(LS_KEYS.proposals, null);
  if (!existingJobs) writeLS(LS_KEYS.jobs, seedJobs);
  if (!existingProps) writeLS(LS_KEYS.proposals, seedProposals);
}

// TODO (API): Replace these functions with Spring Boot endpoints (fetch/axios).

// -------------------- Jobs (Client) --------------------
export async function getJobs() {
  await sleep();
  return readLS(LS_KEYS.jobs, seedJobs);
}

export async function getPublicJobs() {
  await sleep();
  const jobs = readLS(LS_KEYS.jobs, seedJobs);
  return jobs.filter((j) => j.visibility === "public");
}

export async function createJob(payload) {
  await sleep();
  const jobs = readLS(LS_KEYS.jobs, seedJobs);
  const newJob = {
    ...payload,
    id: `job_${Date.now()}`,
    createdAt: new Date().toISOString().slice(0, 10),
  };
  const next = [newJob, ...jobs];
  writeLS(LS_KEYS.jobs, next);
  return newJob;
}

export async function updateJob(jobId, patch) {
  await sleep();
  const jobs = readLS(LS_KEYS.jobs, seedJobs);
  const next = jobs.map((j) => (j.id === jobId ? { ...j, ...patch } : j));
  writeLS(LS_KEYS.jobs, next);
  return next.find((j) => j.id === jobId);
}

export async function deleteJob(jobId) {
  await sleep();
  const jobs = readLS(LS_KEYS.jobs, seedJobs);
  const next = jobs.filter((j) => j.id !== jobId);
  writeLS(LS_KEYS.jobs, next);

  // delete proposals tied to job
  const props = readLS(LS_KEYS.proposals, seedProposals);
  writeLS(LS_KEYS.proposals, props.filter((p) => p.jobId !== jobId));
  return { ok: true };
}

// -------------------- Proposals --------------------
export async function getProposals() {
  await sleep();
  return readLS(LS_KEYS.proposals, seedProposals);
}

export async function getProposalsByJob(jobId) {
  await sleep();
  const props = readLS(LS_KEYS.proposals, seedProposals);
  return props.filter((p) => p.jobId === jobId);
}

export async function getFreelancerProposals() {
  await sleep();
  const props = readLS(LS_KEYS.proposals, seedProposals);
  return props.filter((p) => p.freelancerName === CURRENT_FREELANCER_NAME);
}

export async function getProposalCountsByJob() {
  await sleep();
  const props = readLS(LS_KEYS.proposals, seedProposals);
  const map = {};
  for (const p of props) {
    map[p.jobId] = (map[p.jobId] || 0) + 1;
  }
  return map;
}

export async function submitProposal(payload) {
  await sleep();
  const proposals = readLS(LS_KEYS.proposals, seedProposals);
  const newProp = {
    ...payload,
    id: `prop_${Date.now()}`,
    createdAt: new Date().toISOString().slice(0, 10),
    status: "sent",
    freelancerName: payload.freelancerName || CURRENT_FREELANCER_NAME,
  };
  const next = [newProp, ...proposals];
  writeLS(LS_KEYS.proposals, next);
  return newProp;
}

export async function updateProposal(proposalId, patch) {
  await sleep();
  const proposals = readLS(LS_KEYS.proposals, seedProposals);
  const target = proposals.find((p) => p.id === proposalId);
  if (!target) return null;
  if (target.status === "accepted") return { ok: false, message: "Accepted proposal can't be edited." };

  const next = proposals.map((p) => (p.id === proposalId ? { ...p, ...patch } : p));
  writeLS(LS_KEYS.proposals, next);
  return { ok: true };
}

export async function withdrawProposal(proposalId) {
  await sleep();
  const proposals = readLS(LS_KEYS.proposals, seedProposals);
  const target = proposals.find((p) => p.id === proposalId);
  if (!target) return null;
  if (target.status === "accepted") return { ok: false, message: "Accepted proposal can't be withdrawn." };

  const next = proposals.map((p) => (p.id === proposalId ? { ...p, status: "withdrawn" } : p));
  writeLS(LS_KEYS.proposals, next);
  return { ok: true };
}

export async function setProposalStatus(proposalId, status) {
  await sleep();
  const proposals = readLS(LS_KEYS.proposals, seedProposals);
  const next = proposals.map((p) => (p.id === proposalId ? { ...p, status } : p));
  writeLS(LS_KEYS.proposals, next);

  const updated = next.find((p) => p.id === proposalId);

  // If accepted/rejected, update the job status too (client workflow)
  if (updated?.jobId && (status === "accepted" || status === "rejected")) {
    const jobs = readLS(LS_KEYS.jobs, seedJobs);
    const hasAcceptedForJob = next.some((p) => p.jobId === updated.jobId && p.status === "accepted");
    const jobNext = jobs.map((j) => {
      if (j.id !== updated.jobId) return j;
      return {
        ...j,
        status: hasAcceptedForJob ? "in_progress" : j.status === "in_progress" ? "open" : j.status,
      };
    });
    writeLS(LS_KEYS.jobs, jobNext);
  }

  return updated;
}
