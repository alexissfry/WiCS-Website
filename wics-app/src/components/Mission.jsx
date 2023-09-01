import React from "react";
import "../styles/Mission.css";

const Mission = () => {
  return (
    <div className="content-container">
      <h1 className="section-header">
        Mission
      </h1>
      <div className="text-container">
        Women in Computer Science (WiCS) was formed by female undergraduate
        students at Brown in the late 1980s as an affinity group of Women in
        Science and Engineering (WiSE). The goal of WiCS is to increase the
        participation of women in the field of Computer Science. <br></br>
        <br />
        Now, WiCS continues this effort through Brown's computer science
        department, and also seeks to improve diversity and inclusion for
        underrepresented minorities in the tech industry. WiCS works to this end
        through its{" "}
        <span class="purple"> social, mentoring and outreach programs</span>,
        along with its facilitation of discussions and its cooperation in
        department action plans. <br></br>
        <br />
        One highlight of WiCS is its organization of social events for members
        of the department to meet and get to know each other. Often these events
        include invited guests such as women and underrepresented minorities
        from industry and academia. <br></br>
        <br></br>
        As part of its outreach program, WiCS support the
        <span class="purple"> Artemis Project</span>, a free summer camp for
        rising ninth-grade girls from the Providence area who show interest in
        science and technology.
      </div>
    </div>
  );
};

export default Mission;
