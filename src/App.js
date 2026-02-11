import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./main.css";

const SECTIONS = [
  { section: "Home", iconName: "bi bi-house navicon" },
  { section: "Resume", iconName: "bi bi-file-earmark-text navicon" },
  { section: "Projects", iconName: "bi bi-images navicon" },
];

function App() {
  const [activeHash, setActiveHash] = useState("#Home");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = activeHash;

      SECTIONS.forEach((id) => {
        const element = document.getElementById(id.section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = `#${id.section}`;
          }
        }
      });

      if (currentSection !== window.location.hash) {
        // Update URL hash without jumping the page
        window.history.replaceState(null, "", currentSection);
        setActiveHash(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeHash]);

  const linkStyle = (id) => ({
    padding: "10px",
    textDecoration: "none",
    color: activeHash === `#${id}` ? "#ffffff" : "#ececec96",
    fontWeight: activeHash === `#${id}` ? "bold" : "normal",
    transition: "0.3s",
  });

  return (
    <React.Fragment>
      <header
        id="header"
        className="header dark-background d-flex flex-column justify-content-center"
      >
        <i className="header-toggle d-xl-none bi bi-list"></i>

        <div className="header-container d-flex flex-column align-items-start">
          <nav id="navmenu" className="navmenu">
            <ul>
              {SECTIONS.map((s) => (
                <li key={s.section}>
                  <a
                    href={`#${s.section}`}
                    className="active"
                    style={linkStyle(s.section)}
                  >
                    <i className={s.iconName}></i>
                    {s.section}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="social-links text-center">
            <a href="https://twitter.com/uxan554" className="twitter">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/christianuwakristu/"
              className="linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/u-xian" className="icoGithub">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </header>
      <main className="main">
        <section id="Home" className="hero section">
          <div className="hero-content">
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-lg-6"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <div className="hero-text">
                    <h2>Christian Uwakristu</h2>
                    <h3>Full Stack & SQL Developer</h3>
                    <p className="description">
                      Offering Data engineering and SQL development services and
                      creative Backend and Frontend Web solutions.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-6"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div>
                    <p>
                      I am a SQL Developer and Full Stack, I have a proficient
                      experience in Data Engineering , Data Analysis and Web
                      development.I enjoy developing web applications that later
                      will generate data and play with it during the data
                      analysis for extracting insights and making data-driven
                      decisions.
                    </p>
                    <p>
                      Currently, I'm a senior data analyst Engineer at Revenu
                      Québec, where I work in Business Analytic Unit. In this
                      role, I develop and maintain data pipelines, data mart,
                      create data models, build dashboards and reports to
                      support data-driven decision-making across the
                      organization.
                    </p>
                    <p>
                      Previously, I’ve worked across a wide range of
                      environments, startups and large tech companies, including
                      bank and telecommunication companies such as Millicom ,
                      Airtel and MTN . Alongside my professional work, I also
                      built different web and API-driven applications from
                      scratch. These experiences have shaped how I think about
                      building applications that are both well-crafted and
                      widely usable.
                    </p>
                    <p>
                      Outside of work, I am located at Québec in Canada usually
                      playing guitar, reading cartoon books and hanging out with
                      my wife and kids.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Resume" className="resume section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Resume</h2>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="" data-aos="fade-right" data-aos-delay="100">
                  <h3>Professional Summary</h3>
                  <p>
                    I have a proficient experience in Data Engineering and SQL
                    development using Microsoft BI tools and programming
                    languages such as C#, Python I am well organized and willing
                    a strong ability to adapt quickly to new knowledge and to
                    prioritize the workload and in working in a team.
                  </p>
                  <div className="mt-4">
                    <h4>
                      <i class="bi bi-translate"></i>Languages
                    </h4>
                    <div className="detail-item">
                      <span className="detail-value">English, French</span>
                    </div>
                  </div>
                  <div
                    className="mt-4 resume-section"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <h4>
                      <i className="bi bi-mortarboard me-2"></i>Education
                    </h4>

                    <div className="resume-item">
                      <h5>Bachelor in Computer Engeneering</h5>
                      <h5>2001 - 2005</h5>
                      <p className="company">
                        <i className="bi bi-building"></i> Kigali Institute of
                        Science and Technology
                      </p>
                    </div>
                  </div>
                  <div
                    className="resume-section"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h4>
                      <i className="bi bi-award me-2"></i>Certifications
                    </h4>

                    <div className="resume-item">
                      <h5>Master ReactJs (Codewithmosh.com)</h5>
                      <h5>2023</h5>
                    </div>

                    <div className="resume-item">
                      <h5>
                        MongoDB for Javascript Developers(MongoDB
                        University.com)
                      </h5>
                      <h5>2022</h5>
                    </div>
                    <div className="resume-item">
                      <h5>
                        Become a Full-stack .NET Developer (pluralsight.com)
                      </h5>
                      <h5>2023</h5>
                    </div>
                    <div className="resume-item">
                      <h5>
                        Certified Practitioner of Telecommunications Revenue
                        Assurance (grapa.com)
                      </h5>
                      <h5>2023</h5>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href="/Resume.pdf"
                      download="MyResume.pdf"
                      className="btn btn-primary"
                    >
                      <i className="bi bi-download"></i>
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 ps-4 ps-lg-5">
                <div className="resume-section" data-aos="fade-up">
                  <h4>
                    <i className="bi bi-briefcase me-2"></i>
                    Experience
                  </h4>

                  <div className="resume-item">
                    <h4>Analyst Developer</h4>
                    <h5>Sept 2023 - Present</h5>
                    <p className="company">
                      <i className="bi bi-building"></i> Revenu Quebec, Quebec -
                      Canada
                    </p>
                  </div>

                  <div className="resume-item">
                    <h4>Revenue Assurance Specialist</h4>
                    <h5>Feb to Jul 2023</h5>
                    <p className="company">
                      <i className="bi bi-building"></i> BK TecHouse, Kigali -
                      Rwanda
                    </p>
                  </div>
                  <div className="resume-item">
                    <h4>Revenue Assurance Manager</h4>
                    <h5>2021 – Mar 2023</h5>
                    <p className="company">
                      <i className="bi bi-building"></i> MTN Rwanda, Kigali -
                      Rwanda
                    </p>
                  </div>
                  <div className="resume-item">
                    <h4>Lead Appllication Developer</h4>
                    <h5>2018 - 2021</h5>
                    <p className="company">
                      <i className="bi bi-building"></i> Wipro(Airtel Telcom),
                      Kigali - Rwanda
                    </p>
                  </div>
                  <div className="resume-item">
                    <h4>Software Architect</h4>
                    <h5>2016 -2018</h5>
                    <p className="company">
                      <i className="bi bi-building"></i> Tigo Rwanda(Millicom
                      Company), Kigali - Rwanda
                    </p>
                  </div>
                  <div className="resume-item">
                    <h4>Analyst Software Developer</h4>
                    <h5>Feb to Jul 2023</h5>
                    <p className="company">
                      <i className="bi bi-building"></i>Tigo Rwanda(Millicom
                      Company), Kigali - Rwanda
                    </p>
                  </div>
                  <div className="resume-item">
                    <h4>Analyst SQL Developer</h4>
                    <h5>2007 - 2011</h5>
                    <p className="company">
                      <i className="bi bi-building"></i> BPR Bank, Kigali -
                      Rwanda
                    </p>
                  </div>
                  <div className="resume-item">
                    <h4>Analyst SQL Developer</h4>
                    <h5>2005-2007</h5>
                    <p className="company">
                      <i className="bi bi-building"></i> AD Finance, Kigali -
                      Rwanda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Projects" className="portfolio section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>A collection of projects built with passion and precision.</p>
          </div>
          <div
            className="portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 project-card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Agent to Agent Balance Transfer
                    </h5>
                    <p className="card-text">
                      The application enables the agents on two differents
                      Mobile Financial Services to share their balance between
                      the two platforms and provide quick services to the
                      customers.
                    </p>
                    <div className="mb-3">
                      <span className="badge rounded-pill bg-primary badge-lang">
                        C#
                      </span>
                      <span className="badge rounded-pill bg-info text-dark badge-lang">
                        SQL Server
                      </span>
                      <span className="badge rounded-pill bg-secondary badge-lang">
                        Entity Framework
                      </span>
                    </div>
                    <a
                      href="https://github.com/uxian/Agent-to-Agent-Balance-Transfer"
                      className="btn btn-outline-dark btn-sm"
                    >
                      View GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card h-100 project-card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Purchase Airtime with Mobile Financial Services
                    </h5>
                    <p className="card-text">
                      The application enables the dealers to purchase Airtime on
                      Electronic Recharge platform with balance on Mobile
                      Financial Service wallet.
                    </p>
                    <div className="mb-3">
                      <span className="badge rounded-pill bg-success badge-lang">
                        C#
                      </span>
                      <span className="badge rounded-pill bg-warning text-dark badge-lang">
                        SQL Server
                      </span>
                      <span className="badge rounded-pill bg-danger badge-lang">
                        Entity Framework
                      </span>
                    </div>
                    <a
                      href="https://github.com/uxian/Purchase-Airtime-with-Mobile-Financial-Services"
                      className="btn btn-outline-dark btn-sm"
                    >
                      View GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card h-100 project-card">
                  <div className="card-body">
                    <h5 className="card-title">
                      ScratchCards Management System
                    </h5>
                    <p className="card-text">
                      Web Application that manages Stock and purchase of Prepaid
                      Voucher Top-up Cards in all Shops with dealers and
                      activation on Voucher system.
                    </p>
                    <div className="mb-3">
                      <span className="badge rounded-pill bg-dark badge-lang">
                        Javascript
                      </span>
                      <span className="badge rounded-pill bg-info text-dark badge-lang">
                        ReactJs
                      </span>
                      <span className="badge rounded-pill bg-primary badge-lang">
                        Postgresql
                      </span>
                    </div>
                    <a
                      href="https://github.com/uxian/ScratchCards-Management-System"
                      className="btn btn-outline-dark btn-sm"
                    >
                      View GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card h-100 project-card">
                  <div className="card-body">
                    <h5 className="card-title">Rerating Engine</h5>
                    <p className="card-text">
                      The Engine helped us to find out any tariff misconfigured
                      on changing system and mitigate risks of revenue loss for
                      the Telecommunication company.
                    </p>
                    <div className="mb-3">
                      <span className="badge rounded-pill bg-dark badge-lang">
                        SQL Server
                      </span>
                      <span className="badge rounded-pill bg-info text-dark badge-lang">
                        T-SQL
                      </span>
                      <span className="badge rounded-pill bg-primary badge-lang">
                        SSIS, SSRS
                      </span>
                    </div>
                    <a
                      href="https://github.com/uxian/Rerating-Engine"
                      className="btn btn-outline-dark btn-sm"
                    >
                      View GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 project-card">
                  <div className="card-body">
                    <h5 className="card-title">eRetailShop</h5>
                    <p className="card-text">
                      Web Application that manages Stock and purchase of goods
                      as POS. Built in Javascript with NodeJS and Postgresql as
                      backend and ReactJS and Frontend.
                    </p>
                    <div className="mb-3">
                      <span className="badge rounded-pill bg-dark badge-lang">
                        Javascript
                      </span>
                      <span className="badge rounded-pill bg-info text-dark badge-lang">
                        ReactJs
                      </span>
                      <span className="badge rounded-pill bg-primary badge-lang">
                        Postgresql
                      </span>
                    </div>
                    <a
                      href="https://github.com/uxian/eRetailShop"
                      className="btn btn-outline-dark btn-sm"
                    >
                      View GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card h-100 project-card">
                  <div className="card-body">
                    <h5 className="card-title">CDR Generating</h5>
                    <p className="card-text">
                      A console application that generates CDRs (Call Detail
                      Records) for testing and simulating the real CDRs
                      generated by the telecom switches.
                    </p>
                    <div className="mb-3">
                      <span className="badge rounded-pill bg-dark badge-lang">
                        Python
                      </span>
                    </div>
                    <a
                      href="https://github.com/uxian/CDR-Generating"
                      className="btn btn-outline-dark btn-sm"
                    >
                      View GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer position-relative">
        <div className="container">
          <div className="copyright text-center ">
            <p>
              © <span>Copyright</span>
              <strong className="px-1 sitename">
                2026 - Christian Uwakristu
              </strong>
              <span>All Rights Reserved</span>
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
