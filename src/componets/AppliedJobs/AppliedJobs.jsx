
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplivation } from "../../Utility/localStores";


const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayjobs, setDisplayJobs] = useState([]);


    const handleJbsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.
            filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);

        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.
            filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplivation();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }

            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied)

            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [jobs])

    return (
        <div>
            <h2 className="text-2xl">Jobs I applied: {appliedJobs.length}</h2>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJbsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJbsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJbsFilter('onsite')}><a>onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayjobs.map(job => <li key={job.id}>
                        <span>{job.job_title} {job.company_name}:
                        {job.remote_or_onsite}
                        </span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;