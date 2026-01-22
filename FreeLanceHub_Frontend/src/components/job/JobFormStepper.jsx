import { useMemo, useState } from "react";
import SkillSelector from "./SkillSelector";
import BudgetSelector from "./BudgetSelector";
import DurationSelector from "./DurationSelector";
import JobVisibility from "./JobVisibility";

const STEPS = [
  { key: "basic", label: "Basics" },
  { key: "details", label: "Details" },
  { key: "review", label: "Review" },
];

export default function JobFormStepper({ initialValue, onSubmit, onCancel }) {
  const [step, setStep] = useState(0);

  const [form, setForm] = useState(() => ({
    title: "",
    description: "",
    skills: [],
    budgetType: "fixed",
    budgetMin: 0,
    budgetMax: 0,
    duration: "",
    visibility: "public",
    status: "open",
    ...initialValue,
  }));

  const canNext = useMemo(() => {
    if (step === 0) return form.title.trim().length >= 5 && form.description.trim().length >= 10;
    if (step === 1) return (form.skills || []).length > 0 && !!form.duration && (form.budgetMax ?? 0) >= (form.budgetMin ?? 0);
    return true;
  }, [form, step]);

  function patch(p) {
    setForm((prev) => ({ ...prev, ...p }));
  }

  function next() {
    if (!canNext) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function prev() {
    setStep((s) => Math.max(s - 1, 0));
  }

  return (
    <div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
        {STEPS.map((s, idx) => (
          <span
            key={s.key}
            className="badge-pill"
            style={{
              borderColor: idx === step ? "#a7f3d0" : "#e5e7eb",
              background: idx === step ? "#ecfdf5" : "#f9fafb",
              color: idx === step ? "#065f46" : "#374151",
              fontWeight: 700,
            }}
          >
            {idx + 1}. {s.label}
          </span>
        ))}
      </div>

      {step === 0 && (
        <div className="list">
          <div>
            <label className="small" style={{ display: "block", marginBottom: 6 }}>Job title</label>
            <input
              className="input"
              placeholder="e.g., Build Landing Page UI"
              value={form.title}
              onChange={(e) => patch({ title: e.target.value })}
            />
            <div className="small" style={{ marginTop: 6 }}>Min 5 characters</div>
          </div>

          <div>
            <label className="small" style={{ display: "block", marginBottom: 6 }}>Job description</label>
            <textarea
              className="textarea"
              placeholder="Explain requirements, scope, deliverables..."
              value={form.description}
              onChange={(e) => patch({ description: e.target.value })}
            />
            <div className="small" style={{ marginTop: 6 }}>Min 10 characters</div>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="list">
          <SkillSelector value={form.skills} onChange={(skills) => patch({ skills })} />

          <BudgetSelector
            budgetType={form.budgetType}
            budgetMin={form.budgetMin}
            budgetMax={form.budgetMax}
            onChange={(p) => patch(p)}
          />

          <DurationSelector value={form.duration} onChange={(duration) => patch({ duration })} />

          <JobVisibility value={form.visibility} onChange={(visibility) => patch({ visibility })} />

          <div>
            <label className="small" style={{ display: "block", marginBottom: 6 }}>Job status</label>
            <select className="select" value={form.status} onChange={(e) => patch({ status: e.target.value })}>
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
            <p className="small" style={{ marginTop: 8 }}>
              {/* TODO (API): Update job status in DB when client accepts a proposal (Open -> In Progress -> Closed) */}
              When you connect APIs: set <span className="kbd">in_progress</span> after accepting a proposal and
              <span className="kbd">closed</span> when work is completed.
            </p>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="card padded">
          <h4 style={{ color: "#14532d" }}>Review</h4>
          <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
            <div><span className="small">Title:</span> <span className="kbd">{form.title}</span></div>
            <div><span className="small">Status:</span> <span className="kbd">{form.status}</span></div>
            <div><span className="small">Visibility:</span> <span className="kbd">{form.visibility}</span></div>
            <div><span className="small">Duration:</span> <span className="kbd">{form.duration}</span></div>
            <div><span className="small">Budget:</span>{" "}
              <span className="kbd">{form.budgetType}</span>{" "}
              <span className="kbd">{form.budgetType === "hourly" ? `₹${form.budgetMin}/hr - ₹${form.budgetMax}/hr` : `₹${form.budgetMin} - ₹${form.budgetMax}`}</span>
            </div>
            <div>
              <span className="small">Skills:</span>
              <div className="pills" style={{ marginTop: 8 }}>
                {(form.skills || []).map((s) => <span key={s} className="pill">{s}</span>)}
              </div>
            </div>
            <div>
              <span className="small">Description:</span>
              <p style={{ marginTop: 6, color: "#374151", lineHeight: 1.45 }}>{form.description}</p>
            </div>

            <p className="small" style={{ marginTop: 8 }}>
              {/* TODO (API): POST /api/jobs (create) or PUT /api/jobs/{id} (update) */}
              Connect this form submit to your Spring Boot API. For now it saves to LocalStorage (mockApi).
            </p>
          </div>
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 16 }}>
        <button className="btn-muted" type="button" onClick={onCancel}>
          Cancel
        </button>

        <div style={{ display: "flex", gap: 10 }}>
          {step > 0 && (
            <button className="btn-muted" type="button" onClick={prev}>
              Back
            </button>
          )}
          {step < STEPS.length - 1 ? (
            <button className="btn-primary" type="button" onClick={next} disabled={!canNext} style={{ opacity: canNext ? 1 : 0.6 }}>
              Next
            </button>
          ) : (
            <button className="btn-primary" type="button" onClick={() => onSubmit?.(form)}>
              {initialValue?.id ? "Save Changes" : "Create Job"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
