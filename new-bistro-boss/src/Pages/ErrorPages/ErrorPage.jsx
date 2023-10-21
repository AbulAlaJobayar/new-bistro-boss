import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const {error, status}=useRouteError()
    return (
        <div>
            <div>
                <h1>Error <span>{status||404}</span></h1>
                <p>{error?.message}</p>
                <Link to='/'>Back To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;