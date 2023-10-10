// function pass from parent to child

const Functionpass = (props) => {
    return (
        <div>
            <h1>function pass from parent to child</h1>
            <button onClick={props.ChildBtnClick}>Submit</button>
        </div>
    );
};

export default Functionpass;