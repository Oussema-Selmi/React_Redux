import React from 'react'

const Filter = ({HandleDone,HandleUnDone}) => {
    return (
        <div>
            <label>isDone :</label>
            <input type="checkbox" onClick={HandleDone} />
            <label>unDone :</label>
            <input type="checkbox" onClick={HandleUnDone} />

        </div>
    )
}

export default Filter
