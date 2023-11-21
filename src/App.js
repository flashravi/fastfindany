import { useState } from 'react'
function App() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5001/register', {
            method: "post",
            body: JSON.stringify({ name, age }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setName("");
            setAge("");
        }
    }
    return (
        <>
            <h1>This is React WebApp </h1>
            <form action="">
                <input type="text" placeholder="name"
                value={name} onChange={(e) => setName(e.target.value)} />
                <input type="age" placeholder="age"
                value={age} onChange={(e) => setAge(e.target.value)} />
                <button type="submit"
                onClick={handleOnSubmit}>submit</button>
            </form>
 
        </>
    );
}
 
export default App;