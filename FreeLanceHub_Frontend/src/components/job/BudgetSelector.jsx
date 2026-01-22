export default function BudgetSelector({ budgetType, budgetMin, budgetMax, onChange }) {
  const type = budgetType || "fixed";

  function patch(p) {
    onChange?.({
      budgetType: type,
      budgetMin: budgetMin ?? 0,
      budgetMax: budgetMax ?? 0,
      ...p,
    });
  }

  return (
    <div className="card padded">
      <h4 style={{ color: "#14532d", marginBottom: 10 }}>Budget</h4>

      <div className="row">
        <div>
          <label className="small" style={{ display: "block", marginBottom: 6 }}>Type</label>
          <select
            className="select"
            value={type}
            onChange={(e) => patch({ budgetType: e.target.value })}
          >
            <option value="fixed">Fixed</option>
            <option value="hourly">Hourly</option>
          </select>
        </div>

        <div>
          <label className="small" style={{ display: "block", marginBottom: 6 }}>
            Range ({type === "hourly" ? "₹/hr" : "₹"})
          </label>
          <div style={{ display: "flex", gap: 10 }}>
            <input
              className="input"
              type="number"
              min="0"
              placeholder="Min"
              value={budgetMin ?? ""}
              onChange={(e) => patch({ budgetMin: Number(e.target.value) })}
            />
            <input
              className="input"
              type="number"
              min="0"
              placeholder="Max"
              value={budgetMax ?? ""}
              onChange={(e) => patch({ budgetMax: Number(e.target.value) })}
            />
          </div>
        </div>
      </div>

      <p className="small" style={{ marginTop: 10 }}>
        {/* TODO (API): In Spring Boot, store budgetType, budgetMin, budgetMax in DB and return in Job DTO */}
        Later connect this to your Spring Boot job API fields.
      </p>
    </div>
  );
}
