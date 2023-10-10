// Passing Objects from parent to chold

const Objpass = (props) => {
    return (
        <div>
            <h1>Passing Object data</h1>
            <ul>
                <li>Name:{props.item['name']}</li>
                <li>Age:{props.item['age']}</li>
                <li>City:{props.item['city']}</li>
            </ul>
        </div>
    );
};

export default Objpass;