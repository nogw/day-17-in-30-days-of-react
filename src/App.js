import React, { useState } from 'react'
import GlobalStyle from './styles'
import PalleteItem from './components/PalleteItem'
import SearchBar from './components/SearchBar'
import Values from 'values.js'
import { Colors } from './style';

function App() {
  const [color, setColor] = useState('')
  const [pallete, setPallete] = useState(new Values('#2a9d8f').all(26))

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await color[0] !== "#" ? setPallete(new Values("#"+color).all(26)) : setPallete(new Values(color).all(26));     
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <SearchBar onChange={e => setColor(e.target.value)} type="text" placeholder="enter a color" />
      </form>
      <Colors>
        {
          pallete.map((palleteJ, index) => {
            return <PalleteItem key={index} colorHex={palleteJ.rgb}/>
          })
        }
      </Colors>
      <GlobalStyle />
    </>
  );
}

export default App;
