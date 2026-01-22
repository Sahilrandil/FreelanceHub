const STATUS = {
  sent: { label: "Sent", bg: "#eff6ff", border: "#bfdbfe", color: "#1d4ed8" },
  shortlisted: { label: "Shortlisted", bg: "#fffbeb", border: "#fde68a", color: "#92400e" },
  accepted: { label: "Accepted", bg: "#ecfdf5", border: "#a7f3d0", color: "#065f46" },
  rejected: { label: "Rejected", bg: "#fff1f2", border: "#fecaca", color: "#9f1239" },
  withdrawn: { label: "Withdrawn", bg: "#f3f4f6", border: "#e5e7eb", color: "#374151" },
};

export default function ProposalStatusPill({ status = "sent" }) {
  const s = STATUS[status] || STATUS.sent;
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
        fontWeight: 700,
      }}
      title={`Proposal status: ${s.label}`}
    >
      {s.label}
    </span>
  );
}
