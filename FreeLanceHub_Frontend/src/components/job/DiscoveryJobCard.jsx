import StatusBadge from "./StatusBadge";

export default function DiscoveryJobCard({ job, onApply, disabled }) {
  return (
    <div className="card padded" style={{ display: "flex", justifyContent: "space-between", gap: 14 }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <h3 style={{ fontSize: 18, color: "#111827" }}>{job.title}</h3>
          <StatusBadge status={job.status} />
          <span className="badge-pill">
            Visibility: <span className="kbd">{job.visibility}</span>
          </span>
        </div>

        <p style={{ marginTop: 8, color: "#6b7280", lineHeight: 1.45, overflowWrap: "anywhere" }}>
          {job.description}
        </p>

        <div className="pills" style={{ marginTop: 12 }}>
          {job.skills?.map((s) => (
            <span key={s} className="pill">{s}</span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
          <span className="badge-pill">
            Budget: <span className="kbd">{job.budgetType}</span>{" "}
            <span className="kbd">
              {job.budgetType === "hourly"
                ? `₹${job.budgetMin}/hr - ₹${job.budgetMax}/hr`
                : `₹${job.budgetMin} - ₹${job.budgetMax}`}
            </span>
          </span>
          <span className="badge-pill">
            Duration: <span className="kbd">{job.duration}</span>
          </span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end" }}>
        <button className="btn-primary" onClick={() => onApply?.(job)} style={{ minWidth: 92 }} disabled={disabled}>
          Apply
        </button>
      </div>
    </div>
  );
}
