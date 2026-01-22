export default function DurationSelector({ value, onChange }) {
  return (
    <div>
      <label className="small" style={{ display: "block", marginBottom: 6 }}>Project duration</label>
      <input
        className="input"
        placeholder="e.g., 2-3 weeks"
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <p className="small" style={{ marginTop: 8 }}>
        {/* TODO (API): Save duration as a field in Job entity (string or enum) */}
        Tip: you can store duration as string ("2-3 weeks") or as numeric days in DB.
      </p>
    </div>
  );
}
