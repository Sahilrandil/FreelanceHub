import { useEffect, useMemo, useState } from "react";
import Navbar from "../../components/others/Navbar";
import Footer from "../../components/others/Footer";
import "../dashboard.css";

import ProposalCard from "../../components/proposals/ProposalCard";
import ProposalForm from "../../components/proposals/ProposalForm";
import {
  initMockDb,
  getFreelancerProposals,
  getPublicJobs,
  updateProposal,
  withdrawProposal,
} from "../../services/mockApi";

export default function MyProposalsPage() {
  const [proposals, setProposals] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [editing, setEditing] = useState(null);

  async function load() {
    const [p, j] = await Promise.all([getFreelancerProposals(), getPublicJobs()]);
    setProposals(p);
    setJobs(j);
  }

  useEffect(() => {
    initMockDb();
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    if (statusFilter === "all") return proposals;
    return proposals.filter((p) => p.status === statusFilter);
  }, [proposals, statusFilter]);

  async function onWithdraw(p) {
    const res = await withdrawProposal(p.id);
    if (res?.ok === false) alert(res.message);
    await load();
  }

  async function onSaveEdit(payload) {
    const res = await updateProposal(editing.id, {
      coverLetter: payload.coverLetter,
      bidAmount: payload.bidAmount,
      timeline: payload.timeline,
      attachments: payload.attachments,
    });
    if (res?.ok === false) alert(res.message);
    setEditing(null);
    await load();
  }

  return (
    <>
      <Navbar />

      <div className="page">
        <div className="page-header">
          <div className="page-title">
            <h1>My Proposals</h1>
            <p>Track proposals you submitted across multiple jobs.</p>
          </div>

          <div className="toolbar">
            <select className="select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="sent">Sent</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
              <option value="withdrawn">Withdrawn</option>
            </select>
          </div>
        </div>

        <div className="list">
          {filtered.map((p) => (
            <ProposalCard
              key={p.id}
              proposal={p}
              mode="freelancer"
              onEdit={() => setEditing(p)}
              onWithdraw={onWithdraw}
            />
          ))}

          {filtered.length === 0 && (
            <div className="card padded">
              <p className="small">No proposals found for this filter.</p>
            </div>
          )}
        </div>
      </div>

      {editing && (
        <div className="modal-backdrop" onMouseDown={() => setEditing(null)}>
          <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Edit Proposal</h2>
              <button className="btn-muted" onClick={() => setEditing(null)}>Close</button>
            </div>
            <div className="modal-body">
              <ProposalForm
                jobOptions={jobs}
                initialValue={editing}
                onCancel={() => setEditing(null)}
                onSubmit={onSaveEdit}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
