const container = document.getElementById('jobs-container');

jobs.forEach(job => {
  const jobDiv = document.createElement('div');
  jobDiv.className = 'job';

  jobDiv.innerHTML = `
    <h2>${job.title}</h2>
    <p><strong>Company:</strong> ${job.company}</p>
    <p><strong>Location:</strong> ${job.location}</p>
    <p><strong>Type:</strong> ${job.type}</p>
    <p><strong>Closing Date:</strong> ${job.closingDate}</p>
    <a href="${job.link}" target="_blank">Apply Now</a>
  `;

  container.appendChild(jobDiv);
});
