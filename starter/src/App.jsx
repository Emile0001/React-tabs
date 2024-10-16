import { useState, useEffect } from "react";
import { Loading } from "./components/Loading";
import { Error } from "./components/Error";

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
    if (isError) {
        return (
            <main>
                <Error />
            </main>
        );
    }
    return <h2>Tabs Starter</h2>;
};
export default App;
