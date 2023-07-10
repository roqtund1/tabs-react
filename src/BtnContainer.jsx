export default function BtnContainer({jobs, handleCurrentJob, currentJob}) {
  return (
    <div className="btn-container">
      {jobs.map((job, i) => {
        return (
          <button
            onClick={() => handleCurrentJob(i)}
            key={i}
            className={`job-btn ${currentJob === i ? 'active-btn' : ''}`}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
}
