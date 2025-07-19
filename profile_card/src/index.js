import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillList = [
  {
    name: "Python",
    proficiency: "advanced",
    color: "#2ECC71",
  },
  {
    name: "JS+HTML+CSS",
    proficiency: "advanced",
    color: "#3498DB",
  },
  {
    name: "React",
    proficiency: "intermediate",
    color: "#9B59B6",
  },
  {
    name: "SQL",
    proficiency: "advanced",
    color: "#F1C40F",
  },
  {
    name: "Git",
    proficiency: "advanced",
    color: "#E67E22",
  },
  {
    name: "Rust",
    proficiency: "intermediate",
    color: "#20c79a",
  },
  {
    name: "AWS",
    proficiency: "beginner",
    color: "#f047ef",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="faceshot.jpg" alt="face" />;
}

function Intro() {
  return (
    <div>
      <h1>Rohan Chhatre</h1>
      <h4>
        Full stack goat and semi pro athlete. Popular loner kid that always
        beats SPY.
      </h4>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {/* <Skill name="Python💪" color="#2ECC71" />
      <Skill name="JS+HTML+CSS💪" color="#3498DB" />
      <Skill name="React💪" color="#9B59B6" />
      <Skill name="SQL💪" color="#F1C40F" />
      <Skill name="Git💪" color="#E67E22" /> */}
      {skillList.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div
      className="skill"
      //   style={{ background: uiColors[Math.floor(Math.random() * 10)] }}
      style={{ background: skillObj.color }}
    >
      {skillObj.name}
      {skillObj.proficiency === "advanced"
        ? "💪"
        : skillObj.proficiency === "intermediate"
        ? "👍"
        : "👶"}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
