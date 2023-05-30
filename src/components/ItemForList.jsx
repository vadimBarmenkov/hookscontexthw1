export const ItemForList = ({name, id, chooseId}) => {
    return(
        <div>
            <button style={{borderStyle: "solid 2px"}} onClick={() => chooseId(id - 1)}>{name}</button>
        </div>
    )

}