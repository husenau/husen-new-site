import React from "react";


export default function Portfolio() {
  const navLinks = ["Home", "About", "Skills", "Experience", "Achievements", "Contact"];
  return (
    <div className="portfolio-root">
      {/* Navbar */}
      <nav className="portfolio-navbar">
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="portfolio-navlink">
            {link}
          </a>
        ))}
      </nav>

      {/* Hero */}
      <section id="home" className="portfolio-hero">
        <h1 className="portfolio-hero-title">Hussain Hameed</h1>
        <p className="portfolio-hero-subtitle">
          Experienced IT Systems Administrator | Microsoft 365 Certified | Expert in Systems Troubleshooting, Support, and Cybersecurity
        </p>
        <div className="portfolio-hero-links">
          <a href="mailto:hhameed@outlook.com" className="portfolio-btn">Email Me</a>
          <a href="https://linkedin.com/in/hhameed" target="_blank" rel="noreferrer" className="portfolio-btn">LinkedIn</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="portfolio-section">
        <h2 className="portfolio-section-title">About Me</h2>
        <p>
          I’m an experienced IT Operations and Support Officer with 16+ years supporting IT operations and Microsoft 365 environments. Proven expertise in SharePoint Online administration, endpoint management with Intune, and Level 2/3 user support. Adept at managing cybersecurity initiatives, training users, and delivering service excellence. Strong communicator with a focus on cloud-first technologies and modern workplace transformation.


        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="portfolio-section">
        <h2 className="portfolio-section-title">Skills</h2>
        <div className="portfolio-skills-grid">
          {["Microsoft 365 Admin","Azure AD","SharePoint","Active Directory","Windows Server","Networking","PowerShell","Intune","Teams","Exchange Online"].map((skill) => (
            <div key={skill} className="portfolio-skill">{skill}</div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="portfolio-section">
        <h2 className="portfolio-section-title">Experience</h2>
        <div className="portfolio-experience-list">
          <div>
            <h3 className="portfolio-experience-role">IT Consultant | Systems and Security Engineer</h3>
            <p>On-hire contract, seconded to Forensicare as a Systems and Security Engineer.
              Providing ICT operational support within a highly regulated Victorian Government environment, I acted as an escalation point for identity, access, and Microsoft 365 service requests and incidents, administering Active Directory and Microsoft Entra ID to manage user onboarding, access changes, and group memberships. I supported MFA and Conditional Access troubleshooting in line with security policies, assist with Exchange Online mailbox management, tenant hygiene, and service health monitoring, and review Microsoft 365 security and compliance configurations to reduce low-priority alert noise in Microsoft Defender. I also developed clear technical documentation and standard operating procedures to strengthen audit readiness, improve knowledge transfer, reduce unnecessary security alert volumes through policy refinement, and enhance overall support consistency.</p>
          </div>          
          <div>
            <h3 className="portfolio-experience-role">Information Technology Support Administrator</h3>
            <p>I provide casual ad hoc support for a small Family Day Care business by setting up and maintaining secure digital filing systems, managing Microsoft 365 accounts, and implementing data backup and device security measures to meet compliance requirements. I also provide ongoing IT support to staff and educators, including troubleshooting remote access, Wi-Fi, printing, and mobile devices, ensuring smooth daily operations with minimal disruptions.</p>
          </div>
          <div>
            <h3 className="portfolio-experience-role">Network and Security Operations Admin & Support</h3>
            <p>In this role, I delivered comprehensive Level 1 and Level 2 IT support, managing incidents, service requests, and change tickets using ITSM tools. I administered SharePoint Online for over 300 users, handling permissions, access controls, and site management. Additionally, I supported Azure Active Directory (Entra), and Intune to ensure secure identity and device management. I contributed to system hardening and the deployment of Windows 10/11 devices, ensuring compliance with Essential Eight controls. I coordinated the migration from Gmail to Microsoft 365, significantly enhancing collaboration and security. To improve IT team efficiency and promote self-service, I developed knowledge base articles and technical documentation. I also conducted vulnerability reviews and supported remediation initiatives aligned with enterprise security standards. My role included delivering both remote and onsite support, with occasional interstate travel to facilitate project rollouts and user training.</p>
          </div>
          <div>
            <h3 className="portfolio-experience-role">Network & Systems Administrator</h3>
            <p>I managed Active Directory for over 150 users, overseeing user accounts, group policies, and security groups to ensure secure access management. I delivered frontline support, consistently achieving a ticket resolution rate exceeding 95%. Additionally, I supported hardware provisioning, device lifecycle management, and asset management within ITSM processes. I led training sessions on Microsoft 365 applications, resulting in a 30% boost in adoption and a significant reduction in service calls. I also coordinated IT support for office relocations, ensuring system availability and continuity during transitions.</p>
          </div>
          <div>
            <h3 className="portfolio-experience-role">Desktop Support Administrator</h3>
            <p>I provided frontline IT support, resolving hardware, software, and network issues to ensure seamless operations. I implemented IT asset tracking systems, maintaining accurate records and ensuring compliance with organizational standards. Additionally, I established the organization’s first Helpdesk service, developing ITSM workflows and training materials to streamline support processes and improve overall efficiency.</p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="portfolio-section">
        <h2 className="portfolio-section-title">Achievements</h2>
        <div className="portfolio-achievements-grid">
          <div className="portfolio-achievement">Successfully delivered cloud migrations and device/software rollouts, improving security and user experience.</div>
          <div className="portfolio-achievement">Strengthened compliance by implementing the Essential Eight Maturity Level 1 framework.</div>
          <div className="portfolio-achievement">Improved SLA compliance and incident resolution times by implementing structured service desk processes.</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="portfolio-section">
        <h2 className="portfolio-section-title">Contact Me</h2>
          <a href="mailto:hhameed@outlook.com" className="portfolio-btn">Email Me</a>
          <a href="https://linkedin.com/in/hhameed" target="_blank" rel="noreferrer" className="portfolio-btn">LinkedIn</a>
      </section>

      
    </div>
  );
}
