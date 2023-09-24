


const Banner = () => {
    

    return (
        <div className="hero min-h-screen bg-red-200">
            <div className="hero-content flex lg:flex-row">
                
                <div>
                    <h1 className="text-5xl font-bold">One Step Closer To Your <span className="text-red-500">Dream Job</span></h1>
                    <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div>
                <img src="/src/assets/images/user.png" className="max-w-sm" />
                </div>
            </div>
        </div>
    );
};

export default Banner;