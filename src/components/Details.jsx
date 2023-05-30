import {useEffect, useState} from "react";

export const Details = ({info}) => {
    const [card, setCard] = useState();
    const [id, setId] = useState(-1);

    if (info && (Number(info.id) !== id)){
        setId(Number(info.id));
    }

    useEffect(() => {
        fetch(" https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/" + id + ".json" , {method: "GET"}).then(response => response.json())
            .then(data => {
                setCard(<div>
                    <img src={data.avatar}/>
                    <h3>{data.name}</h3>
                    <p>{data.details.city}</p>
                    <p>{data.details.company}</p>
                    <p>{data.details.position}</p>
                </div>);
                console.log(data);
            });
    }, [id]);

    return(
        <div>
            {card}
        </div>
    )

}