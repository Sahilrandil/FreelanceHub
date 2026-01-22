export default function JobVisibility({ value = "public", onChange }) {
  return (
    <div>
      <label className="small" style={{ display: "block", marginBottom: 6 }}>Job visibility</label>
      <select className="select" value={value} onChange={(e) => onChange?.(e.target.value)}>
        <option value="public">Public (visible to all freelancers)</option>
        <option value="inviteOnly">Invite Only (visible to invited)</option>
        <option value="private">Private (hidden)</option>
      </select>
      <p className="small" style={{ marginTop: 8 }}>
        {/* TODO (API): Save visibility in DB. Use enum in backend for safety */}
        Visibility controls who can see this job when you connect APIs.
      </p>
    </div>
  );
}
