import React, { useEffect, useState } from 'react'

const RandomColor = () => {

    const [type, setType] = useState('hex')
    const [color, setColor] = useState('#000000')

    function randomNumber(length){
        return Math.floor(Math.random()*length)
    }
    function createRandomHexColor(){
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for(let i=0; i<6; i++){
            hexColor += hex[randomNumber(hex.length)]
        }
        setColor(hexColor)
    }

    function createRandomRgbColor(){
        const r = randomNumber(256);
        const g = randomNumber(256);
        const b = randomNumber(256);
        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    useEffect(()=>{
        if(type === 'rgb') createRandomRgbColor();
        else createRandomHexColor();
    }, [type])

  return (
    <div style={{
        width: '100vw',
        height: '100vh',
        background: color}}>
        <button onClick={() => setType('hex')}>Create HEX color</button>
        <button onClick={() => setType('rgb')}>Create RGB color</button>
        <button onClick={type === 'hex'? createRandomHexColor : createRandomRgbColor}>Generate Random Color</button>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: '60px',
            marginTop: '50px',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <h3>{type === 'hex'? 'HEX Color: ': 'RGB Color: '}</h3>
            <h1>{color}</h1>
        </div>
    </div>
  )
}

export default RandomColor