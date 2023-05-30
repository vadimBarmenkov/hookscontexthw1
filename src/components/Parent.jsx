import {useState} from "react";
import {List} from "./List";
import {Details} from "./Details";

export const Parent = () => {
    const [value, setValue] = useState();

    const handleChange = (value) => {
        setValue(value);
    }

    return (
        <div>
            <List handleChange={handleChange}/>
            <Details info={value}/>
        </div>
    )
}