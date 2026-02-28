const PROJECTS = [
  {
    title: "Spam Email Detection System",
    tech: ["Python", "Scikit-learn", "NLP", "TF-IDF"],
    points: [
      "Preprocessed emails (cleaning, tokenization, stopwords)",
      "Converted text → numeric using TF-IDF",
      "Trained & evaluated a classifier for spam vs ham",
    ],
  },
  {
    title: "Experiment 4 React App",
    tech: ["React", "React Router", "CSS"],
    points: [
      "Multi-page UI with consistent layout",
      "Reusable components + clean design",
      "Deployed on Vercel",
    ],
  },
];

export default function Projects() {
  return (
    <section className="stack">
      <div className="hero">
        <div>
          <h2>Projects</h2>
          <p className="muted">Your Experiment-4 projects + details in a clean card layout.</p>
        </div>
      </div>

      <div className="grid">
        {PROJECTS.map((p) => (
          <div className="card" key={p.title}>
            <div className="row">
              <div className="card-title">{p.title}</div>
            </div>

            <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="pill"
                  style={{ marginLeft: 0 }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="divider" />

            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
              {p.points.map((x) => (
                <li key={x} style={{ marginBottom: 6 }}>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}