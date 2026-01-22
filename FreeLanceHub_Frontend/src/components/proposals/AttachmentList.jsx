export default function AttachmentList({ attachments = [] }) {
  if (!attachments.length) return <span className="small">No attachments</span>;

  return (
    <div className="pills">
      {attachments.map((a, idx) => (
        <a
          key={idx}
          className="badge-pill"
          href={a.url || "#"}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          title={a.type === "file" ? "File attachment" : "Link"}
        >
          {a.type === "file" ? "📎" : "🔗"} {a.label || "Attachment"}
        </a>
      ))}
    </div>
  );
}
