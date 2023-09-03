import { useState } from 'react'
import './App.css'
import Form from './Form';
import Card from './Card';

function App() {
  const [musicas, setMusica] = useState([]);
  const agregarMusica = (musica) => {
    setMusica([...musicas,musica]);
  }
  return (
    <>
    <div className='app'>
      <h1> Mi Musica Favorita</h1>
      <Form onAgregarMusica ={agregarMusica}></Form>
      <Card musicas = {musicas}></Card>
     
    </div>
    </> 
  )

}
export default App
