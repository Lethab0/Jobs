const params = new URLSearchParams(window.location.search);
const jobId = params.get("id");

const job = jobs.find(j => j.id === jobId);
const container = document.getElementById("job-content");

if (!job) {
  container.innerHTML = "<p>Job not found. Check the link.</p>";
} else {
  container.innerHTML = `
    <h1>${job.title}</h1>
    <p><strong>Posted:</strong> ${job.datePosted}</p>
    <p><strong>Company:</strong> ${job.company}</p>
    <p><strong>Location:</strong> ${job.location}</p>
    <p><strong>Type:</strong> ${job.type} | Duration: ${job.duration}</p>
    <p><strong>Closing Date:</strong> ${job.closingDate}</p>
    <hr />
    ${job.fullDescription}
  `;
}
