import React, { useState } from 'react'
import Canvas from './Canvas'
import kuusi from './kuusi3.jpg'
import { ColorPicker } from 'material-ui-color';



function App() {
  const [rgbColor, setrgbColor]=useState([255,255,255]);
  const [Color, setColor]=useState('white');
   const handleChangecolor=(e)=>{
    setrgbColor(e.rgb)
    setColor(e.value)
 }
 
  return(
  <>
  <Canvas  rgbColor={rgbColor}  height={500} width={358} className="canv"  style={{backgroundImage: `url(${kuusi})`}}/>
 <div className="colorpicker">
   <ColorPicker 
    hideTextfield 
    value={Color}
    onChange={e =>handleChangecolor(e)}    />
 </div>
  </>
  )
}

export default App
