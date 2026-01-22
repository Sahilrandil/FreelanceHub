import { useEffect, useState } from "react";
import AttachmentList from "./AttachmentList";

export default function ProposalForm({ jobOptions = [], initialValue, onSubmit, onCancel }) {
  const [form, setForm] = useState(() => ({
    jobId: "",
    jobTitle: "",
    freelancerName: "You (Freelancer)",
    coverLetter: "",
    bidAmount: 0,
    timeline: "",
    attachments: [],
    ...initialValue,
  }));

  useEffect(() => {
    // keep jobTitle in sync
    const job = jobOptions.find((j) => j.id === form.jobId);
    if (job && job.title !== form.jobTitle) {
      setForm((p) => ({ ...p, jobTitle: job.title }));
    }
  }, [form.jobId, form.jobTitle, jobOptions]);

  function patch(p) {
    setForm((prev) => ({ ...prev, ...p }));
  }

  function addLink() {
    const url = prompt("Paste your portfolio / profile link:");
    if (!url) return;
    const label = prompt("Label for this link (e.g., Portfolio):") || "Link";
    patch({ attachments: [...(form.attachments || []), { type: "link", label, url }] });
  }

  return (
    <div className="list">
      <div className="row">
        <div>
          <label className="small" style={{ display: "block", marginBottom: 6 }}>Select Job to bid</label>
          <select className="select" value={form.jobId} onChange={(e) => patch({ jobId: e.target.value })}>
            <option value="">-- Choose a Job --</option>
            {jobOptions.map((j) => (
              <option key={j.id} value={j.id}>{j.title}</option>
            ))}
          </select>
          <p className="small" style={{ marginTop: 8 }}>
            {/* TODO (API): Load jobs using GET /api/jobs (public jobs for freelancer) */}
            Later: fetch open jobs from backend and show here.
          </p>
        </div>

        <div>
          <label className="small" style={{ display: "block", marginBottom: 6 }}>Your name</label>
          <input className="input" value={form.freelancerName} onChange={(e) => patch({ freelancerName: e.target.value })} />
        </div>
      </div>

      <div>
        <label className="small" style={{ display: "block", marginBottom: 6 }}>Proposal cover letter</label>
        <textarea
          className="textarea"
          placeholder="Introduce yourself, similar work, approach..."
          value={form.coverLetter}
          onChange={(e) => patch({ coverLetter: e.target.value })}
        />
      </div>

      <div className="row">
        <div>
          <label className="small" style={{ display: "block", marginBottom: 6 }}>Bid amount</label>
          <input
            className="input"
            type="number"
            min="0"
            value={form.bidAmount ?? 0}
            onChange={(e) => patch({ bidAmount: Number(e.target.value) })}
          />
        </div>
        <div>
          <label className="small" style={{ display: "block", marginBottom: 6 }}>Timeline</label>
          <input
            className="input"
            placeholder="e.g., 10 days"
            value={form.timeline || ""}
            onChange={(e) => patch({ timeline: e.target.value })}
          />
        </div>
      </div>

      <div className="card padded">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
          <h4 style={{ color: "#14532d" }}>Attachments</h4>
          <button className="btn-muted" type="button" onClick={addLink}>Add link</button>
        </div>
        <div style={{ marginTop: 12 }}>
          <AttachmentList attachments={form.attachments || []} />
        </div>
        <p className="small" style={{ marginTop: 10 }}>
          {/* TODO (API): For files, use multipart upload: POST /api/proposals/{id}/attachments */}
          For now we are storing only links. Later you can implement file upload from Spring Boot.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
        <button className="btn-muted" type="button" onClick={onCancel}>Cancel</button>
        <button
          className="btn-primary"
          type="button"
          onClick={() => onSubmit?.(form)}
          disabled={!form.jobId || (form.coverLetter || "").trim().length < 10}
          style={{ opacity: !form.jobId || (form.coverLetter || "").trim().length < 10 ? 0.6 : 1 }}
        >
          {initialValue?.id ? "Save" : "Submit Proposal"}
        </button>
      </div>
    </div>
  );
}
