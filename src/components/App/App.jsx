import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CreatureList from '../CreatureList/CreatureList';
import Form from '../Form/Form'

import './App.css';

function App () {
  // const reduxStore = useSelector(store => store);
  const count = useSelector(store => store.count)

  const [creatureList, setCreatureList] = useState([]);
  // const [newCreatureName, setNewCreatureName] = useState('');
  // const [newCreatureOrigin, setNewCreatureOrigin] = useState('');

  // Function to get the creatures from the server/database
  const fetchCreatures = () => {
    axios({
      method: 'GET',
      url: '/creature'
    })
      .then( (response) => {
        console.log('Entire response:', response);
        // The actual array comes from the data attribute on the response
        console.log('Just the data:', response.data);

        // Set data into component state
        setCreatureList(response.data);
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }

  // Function to add a new creature to the database
  const handleSubmit = (newCreatureName, newCreatureOrigin) => {
    axios({
      method: 'POST',
      url: '/creature',
      data: {
        name: newCreatureName,
        origin: newCreatureOrigin
      }
    })
      .then( (response) => {
        console.log('Response:', response);
        fetchCreatures();
        //Clear Inputs & State
        // setNewCreatureName('');
        // setNewCreatureOrigin('')
      })
      .catch(function (error) {
        console.log('Error on add:', error);
      });
  }

  // Call function so it runs once on component load
  // Similar to jQuery's document ready
  useEffect( () => {
    fetchCreatures();
  }, [])
  
  return (
    <div className="App">
      {/* <div>{JSON.stringify(reduxStore)}</div> */}
      <div>Count is: {count}</div>
      <Form addCreatureFunction={handleSubmit}/>
      <CreatureList creatureListProp={creatureList} />
    </div>
  );

}

export default App
