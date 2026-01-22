import { useEffect, useMemo, useState } from "react";
import Navbar from "../../components/others/Navbar";
import Footer from "../../components/others/Footer";
import "../dashboard.css";

import ProposalCard from "../../components/proposals/ProposalCard";
import {
  initMockDb,
  getJobs,
  getProposalCountsByJob,
  getProposalsByJob,
  setProposalStatus,
} from "../../services/mockApi";

export default function ClientInboxPage() {
  const [jobs, setJobs] = useState([]);
  const [counts, setCounts] = useState({});
  const [activeJobId, setActiveJobId] = useState("");
  const [jobProposals, setJobProposals] = useState([]);

  async function loadJobs() {
    const [j, c] = await Promise.all([getJobs(), getProposalCountsByJob()]);
    setJobs(j);
    setCounts(c);
    if (!activeJobId && j[0]?.id) setActiveJobId(j[0].id);
  }

  async function loadProposals(jobId) {
    if (!jobId) return;
    const p = await getProposalsByJob(jobId);
    setJobProposals(p);
  }

  useEffect(() => {
    initMockDb();
    loadJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadProposals(activeJobId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeJobId]);

  const activeJob = useMemo(() => jobs.find((j) => j.id === activeJobId), [jobs, activeJobId]);

  async function acceptProposal(p) {
    await setProposalStatus(p.id, "accepted");
    await loadJobs();
    await loadProposals(activeJobId);
    alert("Proposal accepted! Chat will be enabled for both (connect chat API later).");
  }

  async function rejectProposal(p) {
    await setProposalStatus(p.id, "rejected");
    await loadJobs();
    await loadProposals(activeJobId);
  }

  return (
    <>
      <Navbar />

      <div className="page">
        <div className="page-header">
          <div className="page-title">
            <h1>Client Inbox</h1>
            <p>
              View proposals submitted by freelancers for your jobs. You can accept or reject proposals anytime.
            </p>
          </div>
        </div>

        <div className="grid-2">
          <div className="card padded">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <h3 style={{ color: "#14532d" }}>Your Jobs</h3>
              <span className="small">Select a job to view proposals.</span>
            </div>

            <div className="list" style={{ marginTop: 14 }}>
              {jobs.map((j) => (
                <button
                  key={j.id}
                  className="card padded"
                  style={{
                    textAlign: "left",
                    cursor: "pointer",
                    borderColor: activeJobId === j.id ? "#16a34a" : "#e5e7eb",
                  }}
                  onClick={() => setActiveJobId(j.id)}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontWeight: 700, color: "#111827", overflowWrap: "anywhere" }}>{j.title}</div>
                      <div className="small" style={{ marginTop: 6 }}>
                        Status: <span className="kbd">{j.status}</span> • Visibility: <span className="kbd">{j.visibility}</span>
                      </div>
                    </div>

                    <span className="badge-pill">
                      Proposals: <span className="kbd">{counts[j.id] || 0}</span>
                    </span>
                  </div>
                </button>
              ))}

              {jobs.length === 0 && <p className="small">No jobs found.</p>}
            </div>
          </div>

          <div>
            <div className="card padded">
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ color: "#14532d" }}>Proposals</h3>
                  <div className="small" style={{ marginTop: 6 }}>
                    Job: <span className="kbd">{activeJob?.title || "—"}</span>
                  </div>
                </div>
                <span className="badge-pill">
                  Total: <span className="kbd">{jobProposals.length}</span>
                </span>
              </div>
            </div>

            <div className="list" style={{ marginTop: 14 }}>
              {jobProposals.map((p) => (
                <ProposalCard
                  key={p.id}
                  proposal={p}
                  mode="client"
                  onAccept={acceptProposal}
                  onReject={rejectProposal}
                />
              ))}

              {jobProposals.length === 0 && (
                <div className="card padded">
                  <p className="small">No proposals for this job yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
