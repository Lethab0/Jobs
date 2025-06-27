const bursaries = [
    {
      id: "schoeman-coetzee",
      title: "Schoeman Coetzee Bursary – Accounting",
      closingDate: "2025-06-30",
      shortDescription: "Accounting bursary closing on 30 June 2025.",
      fullDescription: `
        <p><strong>How to apply:</strong></p>
        <ul>
          <li>ID document (certified copy)</li>
          <li>Grade 11 final results (certified copy)</li>
          <li>Matric final results (certified copy)</li>
          <li>Parents or guardians ID documents (certified copy)</li>
        </ul>
        <p>Send application to: <a href="mailto:info@schoemancoetzee.co.za">info@schoemancoetzee.co.za</a> with subject "Schoeman Coetzee Bursary 2024".</p>
      `
    }
    // Add more bursaries here
    ,  // LAW
    {
      id: "lpff-bursary-2026",
      title: "Legal Practitioners Fidelity Fund (LPFF) Bursary",
      field: "Law",
      closingDate: "2025-08-15",
      shortDescription: "LPFF offers bursaries for LLB students. Submit by post or hand-delivery.",
      fullDescription: `
        <h3>How to Apply</h3>
        <p>Download and complete the relevant LPFF application form:</p>
        <ul>
          <li><a href="#">Undergraduate: LPFF Bursary Application Form 2026/2027 (.pdf)</a></li>
          <li><a href="#">Postgraduate: LPFF Bursary Application Form 2026/2027 (.pdf)</a></li>
        </ul>
        <h4>Supporting Documents</h4>
        <p><strong>Undergraduate:</strong></p>
        <ul>
          <li>ID document (certified)</li>
          <li>Academic transcript incl. semester 1 results</li>
          <li>University acceptance letter</li>
          <li>Dean’s testimonial</li>
        </ul>
        <p><strong>Postgraduate:</strong></p>
        <ul>
          <li>ID document (certified)</li>
          <li>Degree certificate and transcript</li>
          <li>Salary slip</li>
          <li>Dean’s testimonial</li>
          <li>Bursary/financial aid info</li>
        </ul>
        <p><strong>Post to:</strong> Bursary Coordinator, Legal Practitioners Fidelity Fund, PO Box 3062, Cape Town, 8000</p>
        <p><strong>Or hand-deliver to:</strong> 5th Floor, Waalburg Building, 28 Wale Street, Cape Town</p>
      `
    },
    {
      id: "hsf-bursary-2024",
      title: "HSF Law Bursary 2024",
      field: "Law",
      closingDate: "2025-08-31",
      shortDescription: "Apply online for the HSF Law Bursary. ID, CV, statement & transcripts required.",
      fullDescription: `
        <h3>How to Apply</h3>
        <p>Submit your application online at: <a href="#">HSF Bursary Application 2024</a></p>
        <h4>Supporting Documents</h4>
        <ul>
          <li>ID document (certified)</li>
          <li>Full academic record/transcripts</li>
          <li>CV/resume with background and achievements</li>
          <li>500-word personal statement</li>
          <li>Details of interests, hobbies, social involvement</li>
          <li>Reference letters, certificates (advantageous)</li>
        </ul>
      `
    },
  
    // COMPUTER SCIENCE & IT
    {
      id: "openserve-bursary-2024",
      title: "Openserve Bursary 2024",
      field: "Computer Science / IT",
      closingDate: "2025-08-15",
      shortDescription: "Apply online for the Openserve Bursary. Register and upload certified docs.",
      fullDescription: `
        <h3>How to Apply</h3>
        <p>Submit online at: <a href="#">Openserve Bursary Application 2022</a> (Ref: TEL220711-1)</p>
        <h4>Supporting Documents</h4>
        <ul>
          <li>Certified ID copy</li>
          <li>Certified Matric certificate</li>
          <li>Full academic transcripts (on letterhead)</li>
        </ul>
      `
    },
    {
      id: "signa-bursary-2024",
      title: "Signa Bursary 2024",
      field: "Computer Science / IT",
      closingDate: "2025-08-31",
      shortDescription: "Signa Bursary requires online application and motivational letter.",
      fullDescription: `
        <h3>How to Apply</h3>
        <p>Apply online at: <a href="#">Signa Bursary Application 2022</a></p>
        <h4>Supporting Documents (if successful)</h4>
        <ul>
          <li>Certified ID or both sides of ID card</li>
          <li>Passport & residency proof (if not SA citizen)</li>
          <li>Matric certificate & 2020 academic results</li>
          <li>Household income proof or affidavit</li>
          <li>Proof of disability (if applicable)</li>
        </ul>
      `
    },
  
    // ENGINEERING
    {
      id: "aeci-bursary-2024",
      title: "AECI Bursary 2024",
      field: "Engineering",
      closingDate: "2025-06-30",
      shortDescription: "Apply online for AECI Bursary. ID, academic record, registration proof required.",
      fullDescription: `
        <h3>How to Apply</h3>
        <p>Submit your application at: <a href="#">AECI Bursary Application 2024</a></p>
        <h4>Required Documents:</h4>
        <ul>
          <li>Certified copy of ID</li>
          <li>Certified full academic record</li>
          <li>Proof of registration</li>
        </ul>
      `
    },
    {
      id: "safripol-bursary-2024",
      title: "SAFRIPOL Bursary 2024",
      field: "Engineering",
      closingDate: "2025-06-30",
      shortDescription: "Download and email SAFRIPOL form with academic & financial docs.",
      fullDescription: `
        <h3>How to Apply</h3>
        <p>Download the application form or collect at participating schools.</p>
        <p>Email to: <a href="mailto:bursarydurban@safripol.com">bursarydurban@safripol.com</a> (Subject: SAFRIPOL Community Bursary 2024)</p>
        <h4>Required Documents:</h4>
        <ul>
          <li>Certified ID and Matric/Grade 11 reports</li>
          <li>Acceptance letter or proof of enrollment</li>
          <li>Proof of income, testimonial, and proof of residence</li>
        </ul>
      `
    },
    {
      id: "wk-construction-bursary-2024",
      title: "WK Construction Bursary 2024",
      field: "Engineering",
      closingDate: "2025-06-30",
      shortDescription: "Download the form and email documents to WK Construction.",
      fullDescription: `
        <h3>How to Apply</h3>
        <p>Download and complete the <a href="#">WK Construction Bursary Form</a></p>
        <p>Email to: <a href="mailto:dewaal.marais@wkc.co.za">dewaal.marais@wkc.co.za</a> (Subject: WK Construction Bursary Application – Your Full Name)</p>
        <h4>Required Documents:</h4>
        <ul>
          <li>Certified ID and Matric certificate</li>
          <li>Latest academic record</li>
          <li>Proof of registration</li>
          <li>CV (max 2 pages)</li>
        </ul>
      `
    },
    {
      id: "keaton-mining-bursary-2024",
      title: "Keaton Mining Bursary 2024",
      field: "Engineering",
      closingDate: "2025-06-30",
      shortDescription: "Post completed forms and documents to Keaton Energy in Bryanston.",
      fullDescription: `
        <h3>How to Apply</h3>
        <p>Download the relevant form:
          <ul>
            <li><a href="#">Technikon Form</a></li>
            <li><a href="#">University Form</a></li>
          </ul>
        </p>
        <p>Post to:<br>
          Group SLP Manager,<br>
          Keaton Energy Holdings (Pty) Ltd<br>
          Postnet Suite 464, Private Bag X51,<br>
          Bryanston, 2021</p>
        <h4>Required Documents:</h4>
        <ul>
          <li>Certified ID</li>
          <li>Matric/Grade 11 results</li>
          <li>Proof of enrollment</li>
        </ul>
      `
    }
  ];
  