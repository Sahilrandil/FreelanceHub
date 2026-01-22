const STATUS = {
  open: { label: "Open", bg: "#ecfdf5", border: "#a7f3d0", color: "#065f46" },
  in_progress: { label: "In Progress", bg: "#eff6ff", border: "#bfdbfe", color: "#1d4ed8" },
  closed: { label: "Closed", bg: "#f3f4f6", border: "#e5e7eb", color: "#374151" },
};

export default function StatusBadge({ status = "open" }) {
  const s = STATUS[status] || STATUS.open;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 10px",
        borderRadius: 999,
        fontSize: 12,
        background: s.bg,
        border: `1px solid ${s.border}`,
        color: s.color,
        fontWeight: 600,
      }}
      title={`Job status: ${s.label}`}
    >
      {s.label}
    </span>
  );
}
