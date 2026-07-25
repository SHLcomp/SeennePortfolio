import React, { useState } from "react";
import "./Designs.scss";
import Project from "../project/Project.jsx";
import data from "../../data/projects.js";

const Designs = () => {
  const [industry, setIndustry] = useState("All");
  const [type, setType] = useState("All");
  const [style, setStyle] = useState("All");

  const [openFilter, setOpenFilter] = useState([]);

  const capitalize = (str) =>
    str.replace(/\b\w/g, (char) => char.toUpperCase());

  const toggleFilter = (filter) => {
    setOpenFilter((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter],
    );
  };

  const resetFilters = () => {
    setIndustry("All");
    setType("All");
    setStyle("All");
  };


  // FILTER MENUS

  const industryMenu = [
    "All",
    ...new Set(
      data.flatMap((project) =>
        project.industry.map((item) => item.toLowerCase()),
      ),
    ),
  ];

  const typeMenu = [
    "All",
    ...new Set(data.map((project) => project.type.toLowerCase())),
  ];

  const styleMenu = [
    "All",
    ...new Set(
      data.flatMap((project) =>
        project.style.map((item) => item.toLowerCase()),
      ),
    ),
  ];

  // FILTER LOGIC

  const filteredProjects = data.filter((project) => {
    const industryMatch =
      industry === "All" ||
      project.industry.some((item) => item.toLowerCase() === industry);

    const typeMatch = type === "All" || project.type.toLowerCase() === type;

    const styleMatch =
      style === "All" ||
      project.style.some((item) => item.toLowerCase() === style);

    return industryMatch && typeMatch && styleMatch;
  });

  // REUSABLE FILTER DROPDOWN

  const renderFilter = (id, title, menu, value, setter) => (
    <div className="filter">
      <button className="filter-title" onClick={() => toggleFilter(id)}>
        <span>{title}</span>

        <span className={`arrow ${openFilter.includes(id) ? "open" : ""}`}>▼</span>
      </button>

      <div className={`filter-content ${openFilter.includes(id) ? "open" : ""}`}>
        <ul>
          {menu.map((item) => (
            <li
              key={item}
              className={value === item ? "active" : ""}
              onClick={() => setter(item)}
            >
              {capitalize(item)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section className="designs" id="designs">
      <div className="text">
        <span className="note">Projects & Case Studies</span>

        <h1>Designs That Turn Ideas Into Experiences</h1>

        <p>Showcasing real client work and UI/UX solutions.</p>
      </div>

      <div className="filtering">
        <div className="filter-top">
          <h2>Browse Projects</h2>

          <button className="reset-btn" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>

        {renderFilter(
          "industry",
          "Industry",
          industryMenu,
          industry,
          setIndustry,
        )}

        {renderFilter("type", "Website Type", typeMenu, type, setType)}

        {renderFilter("style", "Design Style", styleMenu, style, setStyle)}
      </div>

      <div className="results">
        Showing <strong>{filteredProjects.length}</strong>{" "}
        {filteredProjects.length === 1 ? "project" : "projects"}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="projects">
          {filteredProjects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="no-projects">
          <h2>No matching projects found.</h2>

          <p>
            Try changing your filters or reset them to explore all available
            projects.
          </p>

          <p>
            Need something specific? I can design and develop a custom website
            tailored to your business.
          </p>

          <button className="reset-btn" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};

export default Designs;
