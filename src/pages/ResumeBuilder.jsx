import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    summary: "",
    education: [{ degree: "", institution: "", year: "" }],
    skills: [""],
    experience: [{ role: "", company: "", duration: "", details: "" }],
  });

  // handle input change for nested fields
  const handleChange = (e, index, section, field) => {
    const newData = { ...formData };
    if (Array.isArray(newData[section])) {
      newData[section][index][field] = e.target.value;
    } else {
      newData[e.target.name] = e.target.value;
    }
    setFormData(newData);
  };

  // add new field block
  const addField = (section, template) => {
    setFormData({
      ...formData,
      [section]: [...formData[section], template],
    });
  };

  // helper: extract username from url
  const extractUsername = (url) => {
    if (!url) return "";
    return url.replace(/.*\//, ""); // last part after slash
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 pt-20">
      {/* Left: Form */}
      <div className="bg-white shadow-lg rounded-xl p-6 space-y-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-indigo-800 mb-4">Resume Form</h2>

        {/* Personal Info */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => handleChange(e)}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => handleChange(e)}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => handleChange(e)}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn Profile URL"
          value={formData.linkedin}
          onChange={(e) => handleChange(e)}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="text"
          name="github"
          placeholder="GitHub Profile URL"
          value={formData.github}
          onChange={(e) => handleChange(e)}
          className="w-full px-4 py-2 border rounded-lg"
        />

        <textarea
          name="summary"
          placeholder="Professional Summary"
          value={formData.summary}
          onChange={(e) => handleChange(e)}
          className="w-full px-4 py-2 border rounded-lg"
        ></textarea>

        {/* Education */}
        <div>
          <h3 className="font-semibold text-indigo-700">Education</h3>
          {formData.education.map((edu, i) => (
            <div key={i} className="space-y-2 mb-3">
              <input
                type="text"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleChange(e, i, "education", "degree")}
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Institution"
                value={edu.institution}
                onChange={(e) => handleChange(e, i, "education", "institution")}
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Year"
                value={edu.year}
                onChange={(e) => handleChange(e, i, "education", "year")}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              addField("education", { degree: "", institution: "", year: "" })
            }
            className="text-sm text-purple-600 hover:underline"
          >
            + Add Education
          </button>
        </div>

        {/* Skills */}
        <div>
          <h3 className="font-semibold text-indigo-700">Skills</h3>
          {formData.skills.map((skill, i) => (
            <input
              key={i}
              type="text"
              placeholder="Skill"
              value={skill}
              onChange={(e) => {
                const newSkills = [...formData.skills];
                newSkills[i] = e.target.value;
                setFormData({ ...formData, skills: newSkills });
              }}
              className="w-full px-4 py-2 border rounded-lg mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => addField("skills", "")}
            className="text-sm text-purple-600 hover:underline"
          >
            + Add Skill
          </button>
        </div>

        {/* Experience */}
        <div>
          <h3 className="font-semibold text-indigo-700">Experience</h3>
          {formData.experience.map((exp, i) => (
            <div key={i} className="space-y-2 mb-3">
              <input
                type="text"
                placeholder="Role"
                value={exp.role}
                onChange={(e) => handleChange(e, i, "experience", "role")}
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => handleChange(e, i, "experience", "company")}
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Duration"
                value={exp.duration}
                onChange={(e) => handleChange(e, i, "experience", "duration")}
                className="w-full px-4 py-2 border rounded-lg"
              />
              <textarea
                placeholder="Details / Achievements"
                value={exp.details}
                onChange={(e) => handleChange(e, i, "experience", "details")}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              addField("experience", {
                role: "",
                company: "",
                duration: "",
                details: "",
              })
            }
            className="text-sm text-purple-600 hover:underline"
          >
            + Add Experience
          </button>
        </div>
      </div>

      {/* Right: Live Preview */}
      <div className="bg-white shadow-lg rounded-xl p-6 overflow-y-auto pt-6">
        {/* Name */}
        <h2 className="text-2xl font-bold text-indigo-900 border-b pb-2">
          {formData.name || "Your Name"}
        </h2>

        {/* Contact */}
        <p className="text-gray-600 mt-1">
          {formData.email || "your@email.com"} | {formData.phone || "Phone"} |{" "}
          {formData.address || "Your Address"}
        </p>

        {/* Links */}
        <div className="flex items-center gap-4 mt-2 text-lg">
          {formData.linkedin && (
            <a
              href={formData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-indigo-600 hover:text-indigo-800"
            >
              <FaLinkedin className="mr-1" />
              {extractUsername(formData.linkedin)}
            </a>
          )}
          {formData.github && (
            <a
              href={formData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-800 hover:text-black"
            >
              <FaGithub className="mr-1" />
              {extractUsername(formData.github)}
            </a>
          )}
        </div>

        {/* Summary */}
        <h3 className="mt-4 font-semibold text-lg">Summary</h3>
        <p className="text-gray-700">{formData.summary}</p>

        {/* Education */}
        <h3 className="mt-4 font-semibold text-lg">Education</h3>
        {formData.education.map((edu, i) => (
          <p key={i} className="text-gray-700">
            {edu.degree}, {edu.institution} ({edu.year})
          </p>
        ))}

        {/* Skills */}
        <h3 className="mt-4 font-semibold text-lg">Skills</h3>
        <ul className="list-disc pl-5 text-gray-700">
          {formData.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>

        {/* Experience */}
        <h3 className="mt-4 font-semibold text-lg">Experience</h3>
        {formData.experience.map((exp, i) => (
          <div key={i} className="mb-3">
            <p className="font-semibold">
              {exp.role} – {exp.company} ({exp.duration})
            </p>
            <p className="text-gray-700">{exp.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeBuilder;
