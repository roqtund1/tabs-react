
import Duties from "./Duties";

export default function JobInfo({jobs, currentJob:ind}) {
    const {company, dates, title, duties} = jobs[ind];

  return (
    <article className="single-job">
      <header className="job-header">
        <h3>{title}</h3>
        <span className="badge">{company}</span>
        <p className="date">{dates}</p>
      </header>
    <Duties duties={duties}/>
    </article>
  );
}
