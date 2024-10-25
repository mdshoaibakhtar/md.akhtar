const DeveloperProfile: React.FC = () => {
  return (
    <div>
      <code style={{ color: "red" }}>
        {`from dataclasses import dataclass`}
      </code>
      <br />

      <code style={{ color: "pink" }}>
        {`@dataclass`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`class DeveloperProfile:`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`    name: str`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`    experience_years: int`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`    skills: list`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`    focus_areas: dict`}
      </code>
      <br />

      <code style={{ color: "pink" }}>
        {`    def display_info(self):`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`        print(f"Name: {self.name}")`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`        print(f"Experience: {self.experience_years}+ years")`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`        print("Skills:", ", ".join(self.skills))`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`        print("Focus Areas:")`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`        for area, description in self.focus_areas.items():`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`            print(f" - {area}: {description}")`}
      </code>
      <br />

      <code style={{ color: "pink" }}>
        {`if __name__ == "__main__":`}
      </code>
      <br />

      <code style={{ color: "pink" }}>
        {`    profile = DeveloperProfile(`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`        name="Shoaib Akhtar",`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`        experience_years=2,`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`        skills=["ReactJS", "NextJS", "Tailwind CSS", "Django REST Framework", "Node.js", "FastAPI"],`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`        focus_areas={`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`            "Performance": "High-performance web applications.",`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`            "Security": "Robust security measures.",`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`            "APIs": "Powerful, scalable APIs.",`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`            "Mobile Development": "Mobile-friendly UIs."`}
      </code>
      <br />

      <code style={{ color: "white" }}>
        {`        }`}
      </code>
      <br />

      <code style={{ color: "pink" }}>
        {`    )`}
      </code>
      <br />

      <code style={{ color: "pink" }}>
        {`    profile.display_info()`}
      </code>
    </div>
  );
};

export default DeveloperProfile;
