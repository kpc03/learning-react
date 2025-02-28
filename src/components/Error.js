import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return(
        <div className="container body error flex-cont">
            <h1>{error.status + ' ' + error.statusText}</h1>
            <br/>
            <br/>
            <p>{error.data}</p>
        </div>
    );
}
export default Error;