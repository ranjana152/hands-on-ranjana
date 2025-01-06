import React, { useState } from 'react';
function UseStateRetrieve() {
    const [name, setname] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        mobileno: ''
    })
    const [isdisplayed, setdisplay] = useState(false)
    const handleChangeSubmit = (event) => {
        setdisplay(true);
        event.preventDefault();
    }
    return (
        <form onSubmit={handleChangeSubmit}>
            <div>
                <label>Enter the FirstName:</label>
                <input type='text' value={name.firstName} onChange={(event) => setname({ ...name, firstName: event.target.value })}></input>
            </div>
            <div>
                <label>Enter the LastName:</label>
                <input type='text' value={name.lastName} onChange={(event) => setname({ ...name, lastName: event.target.value })}></input>
            </div>
            <div>
                <label>Enter the Mail-Id:</label>
                <input type='text' value={name.email} onChange={(event) => setname({ ...name, email: event.target.value })}></input>
            </div>
            <div>
                <label>Enter the Address:</label>
                <textarea value={name.address} onChange={(event) => setname({ ...name, address: event.target.value })}></textarea>
            </div>
            <div>
                <label>Enter the mobileno:</label>
                <input type='number' value={name.mobileno} onChange={(event) => setname({ ...name, mobileno: event.target.value })}></input>
            </div>
            <div>
                <button type="submit">Display</button>
            </div>
            {isdisplayed && (
                <div>
                    <h2>Submitted details:</h2>
                    <pre>{JSON.stringify(name)}</pre>
                </div>
            )
            }
        </form>

    );
}

export default UseStateRetrieve;