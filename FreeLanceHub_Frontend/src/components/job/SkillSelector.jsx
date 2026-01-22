import { useMemo, useState } from "react";

const SUGGESTED = ["React", "Tailwind", "Java", "Spring Boot", "MySQL", "Node.js", "UI/UX", "Figma", "API", "Testing"];

export default function SkillSelector({ value = [], onChange }) {
  const [input, setInput] = useState("");

  const suggestions = useMemo(() => {
    const q = input.trim().toLowerCase();
    if (!q) return SUGGESTED.filter((s) => !value.includes(s)).slice(0, 6);
    return SUGGESTED.filter((s) => s.toLowerCase().includes(q) && !value.includes(s)).slice(0, 6);
  }, [input, value]);

  function addSkill(skill) {
    const next = Array.from(new Set([...(value || []), skill]));
    onChange?.(next);
    setInput("");
  }

  function removeSkill(skill) {
    onChange?.((value || []).filter((s) => s !== skill));
  }

  return (
    <div>
      <label className="small" style={{ display: "block", marginBottom: 6 }}>Skills required</label>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <input
          className="input"
          placeholder="Type skill and press Enter (e.g., React)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              const v = input.trim();
              if (v) addSkill(v);
            }
          }}
        />
        <button className="btn-primary" type="button" onClick={() => input.trim() && addSkill(input.trim())}>
          Add
        </button>
      </div>

      <div className="pills" style={{ marginTop: 10 }}>
        {(value || []).map((s) => (
          <span key={s} className="pill">
            {s} <button type="button" onClick={() => removeSkill(s)}>×</button>
          </span>
        ))}
      </div>

      {suggestions.length > 0 && (
        <div style={{ marginTop: 10 }}>
          <div className="small" style={{ marginBottom: 6 }}>Suggested</div>
          <div className="pills">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                className="badge-pill"
                onClick={() => addSkill(s)}
                style={{ cursor: "pointer" }}
              >
                + {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
