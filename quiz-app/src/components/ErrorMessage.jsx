
function RequiredField(props) {
    return (<>
        <div className="req-error mt-4">
            <p>{props.message}</p>
        </div>
    </>);
}

export default RequiredField