import React from 'react';
import './AcceptedMajors.css';

const AcceptedMajors = () => {
  return (
    <div className="accepted-majors-container">
      <h1 className="accepted-majors-header">Accepted Majors</h1>
      <p className="accepted-majors-paragraph">
      Eligible Majors include "anything containing a core program with calculus, calculus-based physics, and technical-based science." <br/>
      <br/>
      This includes: anything under the College of Engineering, College of Chemistry, or anything relating to Biology, Physics, CS, or Data Science.<br/>
      <br/>
      The following majors also qualify:
      </p>
      <ul className="accepted-majors-list">
        <li>Astrophysics</li>
        <li>Atmospheric Science</li>
        <li>Biochemistry and Molecular Biology</li>
        <li>BioEngineering</li>
        <li>Cell and Developmental Biology</li>
        <li>Chemical Biology</li>
        <li>Chemical Engineering</li>
        <li>Chemistry</li>
        <li>Civil Engineering</li>
        <li>Computer Science</li>
        <li>Data Science</li>
        <li>Developmental Genetics</li>
        <li>Electrical Engineering and Computer Science</li>
        <li>Energy Engineering</li>
        <li>Engineering Mathematics & Statistics</li>
        <li>Engineering Physics</li>
        <li>Engineering Undeclared</li>
        <li>Environmental Earth Science</li>
        <li>Environmental Engineering</li>
        <li>Environmental Engineering Science</li>
        <li>Environmental Sciences</li>
        <li>Genetics and Plant Biology</li>
        <li>Genetics, Genomics, and Development</li>
        <li>Geology</li>
        <li>Geophysics</li>
        <li>Immunology and Pathogenesis</li>
        <li>Industrial Engineering and Operations Research</li>
        <li>Integrative Biology</li>
        <li>Marine Science</li>
        <li>Materials Science and Engineering</li>
        <li>Mechanical Engineering</li>
        <li>Microbial Biology</li>
        <li>Molecular and Cell Biology</li>
        <li>Molecular Environmental Biology</li>
        <li>Molecular Toxicology</li>
        <li>Neurobiology</li>
        <li>Nuclear Engineering</li>
        <li>Nutritional Science</li>
        <li>Planetary Science</li>
      </ul>
      <p className="accepted-majors-note">
      If you have questions about a major not listed above, please contact Clarie and Paulina at recruitment.calpsr@gmail.com
      </p>
    </div>
  );
};

export default AcceptedMajors;
