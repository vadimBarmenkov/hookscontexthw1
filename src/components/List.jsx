import {useEffect, useState} from "react";
import {ItemForList} from "./ItemForList";

export const List = ({handleChange}) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json', {method: 'GET'})
            .then(response => response.json())
            .then(data => {
                setList(data);
            });
    }, [])

    function chooseId(id){
            handleChange(list[id]);
    }

    return(
        <div>
            {list.map((item) =>
                <div>
                    <ItemForList name={item.name} id={item.id} chooseId={chooseId} key={item.id}/>
                </div>
            )}
        </div>
    )

}

