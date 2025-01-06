import React, { useState } from 'react';
function Formusestate() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const changeSubmitHandle = (event) => {
        event.preventDefault();
        alert(`Successfully logged in by ${username}`)
    }
    return (
        <form onSubmit={changeSubmitHandle}>
            <div>
                <label>Enter the username:</label>
                <input value={username} onChange={(event) => setusername(event.target.value)}></input>
            </div>
            <div>
                <label>Enter the password:</label>
                <input value={password} onChange={(event) => setpassword(event.target.value)}></input>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
}
export default Formusestate;