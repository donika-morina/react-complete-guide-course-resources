import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [name, setName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function startEdit() {
        setIsEditing(editing => !editing);
    }

    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <>
            <span className="player">
                {(!isEditing) ?
                    <span className="player-name">{name}</span> : <input type="text" required value={name} onChange={handleChange}></input>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={startEdit}>{(isEditing) ? "Save" : "Edit"}</button>
        </>
    );
}