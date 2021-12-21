export default function Profile() {

    return(
    <p>
        this is the environement variable: 
        {process.env.REACT_APP_USER_SERVICE_URI}
        {process.env.SHELL}
        %REACT_APP_USER_SERVICE_URI%
    </p>)
}