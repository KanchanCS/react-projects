// true and false

import { useState, React } from "react";

const Hooks = () => {
    const [data, setData] = useState(false);
    function handleChange() {
        setData(!data)
    }
    return (
        <div>
            <p>{data ? 'code' : 'python'}</p>
            <button onClick={handleChange} >Add</button>
        </div>
    );
};
export default Hooks;







