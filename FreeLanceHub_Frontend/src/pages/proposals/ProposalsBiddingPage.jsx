import { useEffect, useMemo, useState } from "react";
import Navbar from "../../components/others/Navbar";
import "../../pages/dashboard.css";
import ProposalCard from "../../components/proposals/ProposalCard";
import ProposalForm from "../../components/proposals/ProposalForm";
import { initMockDb, getJobs, getProposals, submitProposal, updateProposal, withdrawProposal, updateJob } from "../../services/mockApi";

export default function ProposalsBiddingPage() {
  const [tab, setTab] = useState("freelancer");
  const [jobs, setJobs] = useState([]);
  const [proposals, setProposals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    initMockDb();
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function load() {
    // TODO (API): Replace with GET /api/jobs (for dropdown) and GET /api/proposals (based on role)
    const [j, p] = await Promise.all([getJobs(), getProposals()]);
    setJobs(j);
    setProposals(p);
  }

  const clientInbox = useMemo(() => {
    // In a real app, this would be proposals for jobs posted by this client.
    // For demo: show all proposals except the one submitted by "You (Freelancer)".
    return proposals.filter((p) => p.freelancerName !== "You (Freelancer)");
  }, [proposals]);

  const myProposals = useMemo(() => {
    return proposals.filter((p) => p.freelancerName === "You (Freelancer)");
  }, [proposals]);

  const stats = useMemo(() => {
    const list = tab === "client" ? clientInbox : myProposals;
    const by = (s) => list.filter((p) => p.status === s).length;
    return {
      total: list.length,
      sent: by("sent"),
      shortlisted: by("shortlisted"),
      accepted: by("accepted"),
      rejected: by("rejected"),
      withdrawn: by("withdrawn"),
    };
  }, [tab, clientInbox, myProposals]);

  function openSubmit() {
    setEditing(null);
    setIsModalOpen(true);
  }

  function openEdit(p) {
    setEditing(p);
    setIsModalOpen(true);
  }

  async function onSubmit(form) {
    if (editing?.id) {
      // TODO (API): PUT/PATCH /api/proposals/{id}
      await updateProposal(editing.id, form);
    } else {
      // TODO (API): POST /api/proposals
      await submitProposal(form);
    }
    setIsModalOpen(false);
    setEditing(null);
    await load();
  }

  // ---------------- Client Actions (Accept/Reject) ----------------
  async function acceptProposal(p) {
    // TODO (API): PATCH /api/proposals/{id}/accept
    await updateProposal(p.id, { status: "accepted" });

    // Also update job status to in_progress (client workflow)
    // TODO (API): PATCH /api/jobs/{jobId} -> status = in_progress
    await updateJob(p.jobId, { status: "in_progress" });

    // TODO (API): Create chat room on accept (client + freelancer)
    alert("Accepted! (Demo) Now create chat room and enable chat for both users.");
    await load();
  }

  async function rejectProposal(p) {
    // TODO (API): PATCH /api/proposals/{id}/reject
    await updateProposal(p.id, { status: "rejected" });
    await load();
  }

  // ---------------- Freelancer Actions (Withdraw/Edit) ----------------
  async function withdraw(p) {
    const ok = confirm("Withdraw this proposal?");
    if (!ok) return;
    const res = await withdrawProposal(p.id);
    if (res?.ok === false) alert(res.message);
    await load();
  }

  const activeList = tab === "client" ? clientInbox : myProposals;

  return (
    <>
      <Navbar />

      <div className="page">
        <div className="page-header">
          <div className="page-title">
            <h1>Proposals & Bidding</h1>
            <p>
              Freelancers can submit proposals (cover letter, bid amount, timeline, attachments). Clients can review proposals and accept/reject them. When accepted, job moves to <span className="kbd">in_progress</span> and chat becomes available.
            </p>
          </div>

          <div className="toolbar">
            <button
              className="btn-muted"
              onClick={() => setTab("freelancer")}
              style={{ borderColor: tab === "freelancer" ? "#a7f3d0" : "#e5e7eb" }}
            >
              Freelancer view
            </button>
            <button
              className="btn-muted"
              onClick={() => setTab("client")}
              style={{ borderColor: tab === "client" ? "#a7f3d0" : "#e5e7eb" }}
            >
              Client inbox
            </button>

            {tab === "freelancer" && (
              <button className="btn-primary" onClick={openSubmit}>+ Submit Proposal</button>
            )}
          </div>
        </div>

        <div className="grid-2">
          <div className="list">
            {activeList.length === 0 ? (
              <div className="card padded">
                <h3 style={{ color: "#111827" }}>No proposals yet</h3>
                <p className="small" style={{ marginTop: 6 }}>
                  {tab === "freelancer" ? "Submit a proposal to an open job." : "Wait for freelancers to apply to your jobs."}
                </p>
              </div>
            ) : (
              activeList.map((p) => (
                <ProposalCard
                  key={p.id}
                  proposal={p}
                  mode={tab}
                  onAccept={acceptProposal}
                  onReject={rejectProposal}
                  onWithdraw={withdraw}
                  onEdit={openEdit}
                />
              ))
            )}
          </div>

          <div className="card padded">
            <h3 style={{ color: "#14532d" }}>{tab === "client" ? "Client notifications" : "My proposals"}</h3>

            <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
              <span className="badge-pill">Total <span className="kbd">{stats.total}</span></span>
              <span className="badge-pill">Sent <span className="kbd">{stats.sent}</span></span>
              <span className="badge-pill">Shortlisted <span className="kbd">{stats.shortlisted}</span></span>
              <span className="badge-pill">Accepted <span className="kbd">{stats.accepted}</span></span>
              <span className="badge-pill">Rejected <span className="kbd">{stats.rejected}</span></span>
              <span className="badge-pill">Withdrawn <span className="kbd">{stats.withdrawn}</span></span>

              <div className="card padded" style={{ background: "#fff1db", borderColor: "#fde7c2" }}>
                <h4 style={{ color: "#14532d" }}>API mapping (Spring Boot)</h4>
                <ul style={{ marginTop: 10, paddingLeft: 18, color: "#374151", lineHeight: 1.6 }}>
                  <li><span className="kbd">GET /api/proposals</span> → list proposals (by role)</li>
                  <li><span className="kbd">POST /api/proposals</span> → submit proposal</li>
                  <li><span className="kbd">PUT /api/proposals/{`{id}`}</span> → edit proposal</li>
                  <li><span className="kbd">PATCH /api/proposals/{`{id}`}/accept</span> → accept</li>
                  <li><span className="kbd">PATCH /api/proposals/{`{id}`}/reject</span> → reject</li>
                  <li><span className="kbd">PATCH /api/proposals/{`{id}`}/withdraw</span> → withdraw</li>
                </ul>
              </div>

              <p className="small" style={{ lineHeight: 1.45 }}>
                {/* TODO (API): After accept -> create chat room (jobId + proposalId) */}
                When accepted, enable chat for both users (client and freelancer).
              </p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editing ? "Edit Proposal" : "Submit Proposal"}</h2>
              <button className="btn-muted" onClick={() => setIsModalOpen(false)}>Close</button>
            </div>

            <div className="modal-body">
              <ProposalForm
                jobOptions={jobs.filter((j) => j.status === "open")}
                initialValue={editing || undefined}
                onSubmit={onSubmit}
                onCancel={() => {
                  setIsModalOpen(false);
                  setEditing(null);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
