import { useState, useEffect } from "react";

const url = "https://www.course-api.com/react-tabs-project";

// import Loading from "./Loading";

const App = () => {
    const [job, setJob] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
        try {
            const responds = await fetch(url);
            setIsLoading(true);
            setIsError(false);

            const newJobs = await responds.json();
            setJob(newJobs);
            console.log(newJobs);
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return <h2>Tabs Starter</h2>;
};
export default App;
