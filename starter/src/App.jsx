import { useState, useEffect } from "react";
import { Loading } from "./components/Loading";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
    const [job, setJob] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
        try {
            const responds = await fetch(url);
            if (responds) {
                setIsLoading(true);
                setIsError(false);
            }
            const newJobs = await responds.json();

            setJob(newJobs);
            console.log(newJobs);
        } catch (error) {
            setIsError(true);
        }
        setIsLoading(false);
    };
    useEffect(() => {
        fetchData();
    }, []);
    if (isLoading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }
    return <h2>Tabs Starter</h2>;
};
export default App;
