import {useState} from 'react';
import { useSelector } from 'react-redux';

function Form({addCreatureFunction}){
    const elementList = useSelector(state => state.elementList);

    const [newCreatureName, setNewCreatureName] = useState('');
    const [newCreatureOrigin, setNewCreatureOrigin] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit!");
        addCreatureFunction(newCreatureName, newCreatureOrigin);
        setNewCreatureName('');
        setNewCreatureOrigin('');
    };

    return (
        <>
        <h1>Element list = {JSON.stringify(elementList)}</h1>
            <h2>Add Creaturezzzzzzzzz</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                onChange={ (event) => setNewCreatureName(event.target.value) } 
                value={newCreatureName}
                />
                <label>Origin:</label>
                <input 
                onChange={ (event) => setNewCreatureOrigin(event.target.value) } 
                value={newCreatureOrigin}/>
                <button type="submit">Add New Creature</button>
            </form>
        </>
    )
}

export default Form;