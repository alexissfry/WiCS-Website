import React from "react";
import "../styles/Resources.css";

export default function Resources() {
  return (
    <div className="resources">
      <h1 className="resourceBox">Resources</h1>
      <div className="container">
        <ul className="box-sections">
          <li>
            <div className="box mentorship">
              <div className="resourceBox-title">Mentorship</div>
              <div className="text">
                Get paired with a peer to learn about industry, research,
                internships, interviews, and much more!
              </div>
              <button className="button">Coming Soon</button>
            </div>
          </li>
          <li>
            <div className="box community">
              <div className="resourceBox-title">Community</div>
              <div className="text">
                Stay connected with the WiCS community at Brown online and
                always!
              </div>
              <button className="button">Join Our Slack</button>
            </div>
          </li>
          <li>
            <div className="box mailing">
              <div className="resourceBox-title">Mailing List</div>
              <div className="text">
                Stay updated on our events, internships, hackathons, and so much
                more!
              </div>
              <button className="button">Sign Up</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
