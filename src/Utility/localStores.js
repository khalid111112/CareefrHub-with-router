const getStoredJobApplivation = () => {
    const storedJobApplivation = localStorage.getItem('job-applications');
    if(storedJobApplivation){
        return JSON.parse(storedJobApplivation);
    }
    return [];
}

const saveJobApplication = id => {
    const storedJobApplication = getStoredJobApplivation();
    const exists = storedJobApplication.find(jobId =>jobId  === id);
    if(!exists){
        storedJobApplication.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplication))
    }
}

export { saveJobApplication, getStoredJobApplivation }