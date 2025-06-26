// Load jobs from jobs.js
const container = document.getElementById('jobs-container');

jobs.forEach(job => {
  const jobCard = document.createElement('div');
  jobCard.className = 'job';

  jobCard.innerHTML = `
    <h2>${job.title}</h2>
    <p><strong>Company:</strong> ${job.company}</p>
    <p><strong>Location:</strong> ${job.location}</p>
    <p><strong>Type:</strong> ${job.type}</p>
    <p><strong>Closing Date:</strong> ${job.closingDate}</p>
    <p>${job.shortDescription}</p>
    <a href="job.html?id=${job.id}">View Job</a>
  `;

  container.appendChild(jobCard);
});
