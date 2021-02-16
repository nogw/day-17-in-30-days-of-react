import React, { useState, useEffect } from 'react';
import { Container, Color, Name } from './styles';
import { motion } from "framer-motion";

function PalleteItem( props ) {
  const [alert, setAlert] = useState(false)
  const componentToHex = (c) => {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  const bcg = props.colorHex.join(',')
  const hex = rgbToHex(...props.colorHex)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <Container
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hex)
      }}
    >
      <Color bgc={bcg} />
      <Name>
        {alert ? 'copied' : hex}
      </Name>
    </Container>
  );
}

export default PalleteItem;