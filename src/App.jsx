import { useEffect, useState } from "react";

import JobInfo from "./JobInfo";
const url = "https://course-api.com/react-tabs-project";
import data from "./data";
import BtnContainer from "./BtnContainer";

function App() {
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  function handleCurrentJob(i) {
    setCurrentJob(i);
  }

  useEffect(() => {
    async function fecthJobs() {
      try {
        const resp = await fetch(url);

        if (!resp.ok) {
          setIsLoading(false);
          setIsError(true);
          return;
        }

        const jobsData = await resp.json();
        setJobs(jobsData);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    fecthJobs();
  }, []);

  if (isLoading) {
    return (
      <main>
        <div className="loading"></div>
      </main>
    );
  }
  if (isError) {
    return (
      <main>
        <div>
          <p>Sorry, something went wrong. Please try again later</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="jobs">
        <BtnContainer jobs={jobs} handleCurrentJob={handleCurrentJob} currentJob={currentJob}/>
        <JobInfo currentJob={currentJob} jobs={jobs} />
      </section>
    </main>
  );
}

export default App;
