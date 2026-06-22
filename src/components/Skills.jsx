import './Skills.css'
import ScrollReveal from './ScrollReveal'


const skills = {
  "Frontend": ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
  "Backend": ["Node.js", "Express", "Python", "REST APIs", "SQL"],
  "AI / ML": ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Jupyter"],
  "Tools & DevOps": ["Git", "GitHub", "VS Code", "Postman", "Linux"]
}


function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <ScrollReveal>
          <p className="section-label">// tech_stack</p>
          <h2>What I work with</h2>
          <p className="section-sub">
            Tools I use to build full-stack apps and intelligent systems.
          </p>
        </ScrollReveal>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], index) => (
            <ScrollReveal delay={index * 0.1} key={category}>
              <div className="skill-card">
                <div className="skill-card-title">{category}</div>
                <div className="skill-pills">
                  {items.map(skill => (
                    <span className="skill-pill" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills