import React, { useRef, useEffect} from 'react'
import Led from './led'
let led1=new Led(1,'[0,0,0]',[76,74],10)
let led2=new Led(2,'[0,0,0]',[78.5,76.5],10)
let led3=new Led(3,'[0,0,0]',[81,79],10)
let led4=new Led(4,'[0,0,0]',[76,79],10)
let led5=new Led(5,'[0,0,0]',[71,79],10)
let led6=new Led(6,'[0,0,0]',[66,79],10)
let led7=new Led(7,'[0,0,0]',[61,79],10)
let led8=new Led(8,'[0,0,0]',[55.5,78.5],10)
let led9=new Led(9,'[0,0,0]',[50,78],10)
let led10=new Led(10,'[0,0,0]',[45,77.5],10)
let led11=new Led(11,'[0,0,0]',[40,77],10)
let led12=new Led(12,'[0,0,0]',[35,77],10)
let led13=new Led(13,'[0,0,0]',[29,77],10)
let led14=new Led(14,'[0,0,0]',[25,77],10)
let led15=new Led(15,'[0,0,0]',[21,77],10)
let led16=new Led(16,'[0,0,0]',[23,75],10)
let led17=new Led(17,'[0,0,0]',[26,73],10)
let led18=new Led(18,'[0,0,0]',[28,71],10)
let led19=new Led(19,'[0,0,0]',[30,69],10)
let led20=new Led(20,'[0,0,0]',[32,67],10)
let led21=new Led(21,'[0,0,0]',[34.5,69],10)
let led22=new Led(22,'[0,0,0]',[39,69],10)
let led23=new Led(23,'[0,0,0]',[45,69],10)
let led24=new Led(24,'[0,0,0]',[51,69],10)
let led25=new Led(25,'[0,0,0]',[56.5,69.5],10)
let led26=new Led(26,'[0,0,0]',[62,70],10)
let led27=new Led(27,'[0,0,0]',[67.5,70.5],10)
let led28=new Led(28,'[0,0,0]',[73,71],10)
let led29=new Led(29,'[0,0,0]',[71,68,5],10)
let led30=new Led(30,'[0,0,0]',[69,66],10)
let led31=new Led(31,'[0,0,0]',[67,63],10)
let led32=new Led(32,'[0,0,0]',[64,57.5],10)
let led33=new Led(33,'[0,0,0]',[65,60],10)
let led34=new Led(34,'[0,0,0]',[60,60],10)
let led35=new Led(35,'[0,0,0]',[57,60],10)
let led36=new Led(36,'[0,0,0]',[52,60],10)
let led37=new Led(37,'[0,0,0]',[48,60],10)
let led38=new Led(38,'[0,0,0]',[43,60],10)
let led39=new Led(39,'[0,0,0]',[37,62],10)
let led40=new Led(40,'[0,0,0]',[38,60],10)
let led41=new Led(41,'[0,0,0]',[40,57,5],10)
let led42=new Led(42,'[0,0,0]',[41,54],10)
let led43=new Led(43,'[0,0,0]',[43,51],10)
let led44=new Led(44,'[0,0,0]',[47,51],10)
let led45=new Led(45,'[0,0,0]',[51,50.5],10)
let led46=new Led(46,'[0,0,0]',[55,50.5],10)
let led47=new Led(47,'[0,0,0]',[59,50.5],10)
let led48=new Led(48,'[0,0,0]',[59.5,52],10)
let led49=new Led(49,'[0,0,0]',[58,48],10)
let led50=new Led(50,'[0,0,0]',[56,45],10)
let led51=new Led(51,'[0,0,0]',[55,42],10)
let led52=new Led(52,'[0,0,0]',[54,39],10)
let led53=new Led(53,'[0,0,0]',[53,36],10)
let led54=new Led(54,'[0,0,0]',[52,33],10)
let led55=new Led(55,'[0,0,0]',[51,30],10)
let led56=new Led(56,'[0,0,0]',[51,27],10)
let led57=new Led(57,'[0,0,0]',[55,27],10)
let led58=new Led(58,'[0,0,0]',[59,26.5],10)
let led59=new Led(59,'[0,0,0]',[63,26.5],10)
let led60=new Led(60,'[0,0,0]',[67,26.5],10)
let led61=new Led(61,'[0,0,0]',[69,25],10)
let led62=new Led(62,'[0,0,0]',[66,24],10)
let led63=new Led(63,'[0,0,0]',[63,23],10)
let led64=new Led(64,'[0,0,0]',[60,22.5],10)
let led65=new Led(65,'[0,0,0]',[57,21.5],10)
let led66=new Led(66,'[0,0,0]',[54,21],10)
let led67=new Led(67,'[0,0,0]',[52.5,18],10)
let led68=new Led(68,'[0,0,0]',[51,15],10)
let led69=new Led(69,'[0,0,0]',[49.5,12],10)
let led70=new Led(70,'[0,0,0]',[48,9],10)
let led71=new Led(71,'[0,0,0]',[46.5,12],10)
let led72=new Led(72,'[0,0,0]',[46,15],10)
let led73=new Led(73,'[0,0,0]',[45.5,18],10)
let led74=new Led(74,'[0,0,0]',[45.5,21],10)
let led75=new Led(75,'[0,0,0]',[44,22.5],10)
let led76=new Led(76,'[0,0,0]',[42,23],10)
let led77=new Led(77,'[0,0,0]',[40,24.5],10)
let led78=new Led(78,'[0,0,0]',[38,26],10)
let led79=new Led(79,'[0,0,0]',[36,27.5],10)
let led80=new Led(80,'[0,0,0]',[34,29],10)
let led81=new Led(81,'[0,0,0]',[36.5,29.5],10)
let led82=new Led(82,'[0,0,0]',[39,28.5],10)
let led83=new Led(83,'[0,0,0]',[42,27.5],10)
let led84=new Led(84,'[0,0,0]',[45,27],10)
let led85=new Led(85,'[0,0,0]',[48,27],10)
let led86=new Led(86,'[0,0,0]',[49,29],10)
let led87=new Led(87,'[0,0,0]',[49,31],10)
let led88=new Led(88,'[0,0,0]',[48.5,33],10)
let led89=new Led(89,'[0,0,0]',[48,35],10)
let led90=new Led(90,'[0,0,0]',[47.5,37],10)
let led91=new Led(91,'[0,0,0]',[47,39],10)
let led92=new Led(92,'[0,0,0]',[46.5,41],10)
let led93=new Led(93,'[0,0,0]',[46,43],10)
let led94=new Led(94,'[0,0,0]',[45.5,45],10)
let led95=new Led(95,'[0,0,0]',[45,47],10)
let led96=new Led(96,'[0,0,0]',[44.5,49],10)
let led97=new Led(97,'[0,0,0]',[49,31],10)
let led98=new Led(98,'[0,0,0]',[48.5,33],10)
let led99=new Led(99,'[0,0,0]',[48,35],10)
let led100=new Led(100,'[0,0,0]',[47.5,37],10)
const leds=[]

leds.push(led1,led2,led3, led4, led5, led6,led7,led8,led9,led10,led11,led12,led13,led14,
led15,led16,led17,led18,led19,led20,led21,led22,led23,led24,led25,led26,led27,led28,led29,led30,
led31,led32,led33,led34,led35,led36,led37,led38,led39,led40,led41,led42,led43,led44,led45,led46,
led47,led48,led49,led50,led51,led52,led53,led54,led55,led56,led57,led58,led59,led60,led61,led62,
led63,led64,led65,led66,led67,led68,led69,led70,led71,led72,led73,led74,led75,led76,led77,led78,
led79,led80,led81,led82,led83,led84,led85,led86,led87,led88,led89,led90,led91,led92,led93,led94,
led95,led96,led97,led98,led99,led100)
  function isIntersect(point,x,y, led) {
    return Math.sqrt((point.x-(x)) ** 2 + (point.y - (y)) ** 2) < led.radius;
    
}
const handleChangeLed = async (RgbColor,led,ctx,x,y) => {

   
  const requestOptions = {
    method: 'POST',
    //headers: { 'Content-Type': 'application/json' },
  //  body: JSON.stringify({r:color.rgb[0],g:color.rgb[1],b:color.rgb[2],led:led})
  body: JSON.stringify({ "r":RgbColor[0],"g":RgbColor[1],"b":RgbColor[2],"led":led})
};
const ledfb= await fetch('/led', requestOptions);

      const ledfbjson= await ledfb.json();
      //console.log('led value from backend',ledfbjson)
   
      //ctx.fillStyle ='yellow'
      ctx.fillStyle = "rgb("+ledfbjson.r[0]+','+ledfbjson.g[0]+','+ledfbjson.b[0]+')'
      ctx.beginPath()
      ctx.arc(x,y, 5, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill()
      ctx.closePath()
      
  };
const Canvas =props => { 
 
    const canvasRef = useRef(null) 
    const { draw, options,rgbColor,fbColor,  ...rest } = props

    

    
    
  
   
   
    
    
    
    
    useEffect(() => {
      const getLeds = async () => {
    
          const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
       
         
        };
        const fastleds= await fetch('/init',requestOptions);
        const ledcolors= await fastleds.json();
  console.log(ledcolors)
       
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const ctxwidth=canvas.width;
        const ctxheight=canvas.height
       
      
        for (let i=0 ;i<leds.length;i++)
        {
          
          ctx.fillStyle = "rgb("+ledcolors.r[i]+','+ledcolors.g[i]+','+ledcolors.b[i]+')'
        
          ctx.beginPath()
           ctx.arc((leds[i].points[0]*(ctxwidth/100)), (leds[i].points[1]*(ctxheight/100)), 5, 0, 2 * Math.PI);
           //ctx.strokeStyle = "yellow";
           ctx.stroke();
           ctx.fill()
           ctx.closePath()
          
        } 
     
          };
          getLeds();
        const interval = setInterval( async () => {
          
    
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
           
             
            };
            const newleds= await fetch('/status',requestOptions);
            const newledsjson= await newleds.json();
            //console.log(newledsjson)
            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d')
            const ctxwidth=canvas.width;
            const ctxheight=canvas.height
            for (let i=0 ;i<leds.length;i++)
            {
              
              ctx.fillStyle = "rgb("+newledsjson.r[i]+','+newledsjson.g[i]+','+newledsjson.b[i]+')'
            
              ctx.beginPath()
               ctx.arc((leds[i].points[0]*(ctxwidth/100)), (leds[i].points[1]*(ctxheight/100)), 5, 0, 2 * Math.PI);
               //ctx.strokeStyle = "yellow";
               ctx.stroke();
               ctx.fill()
               ctx.closePath()
              
            }
           
          
           
         
              
          }, 2000);
          return () => clearInterval(interval);
    
    },[])
    useEffect( () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')


      
        const ontouchmove= (e)=>{
          e.preventDefault()
            const pos={
            
            x:e.touches[0].clientX,
            y:e.touches[0].clientY
            }
           
            leds.forEach(led => {
            
              let x=(led.calcPointx(e.target.width))
            let y=(led.calcPointy(e.target.height))
              if (isIntersect(pos, x,y,led)) {
          
                if(rgbColor!==led.color)
                {
                  led.color=rgbColor
                  handleChangeLed(rgbColor,led.num,ctx,x,y)
                
                  
                  //console.log('change color',led.num)
                
                
               
            
            
            }
               
              }
            });
          }
          const onmousemove= (e)=>{
            e.preventDefault()
              const pos={
              
              x:e.clientX,
              y:e.clientY
              }
     
              leds.forEach(led => {
              
                let x=(led.calcPointx(e.target.width))
              let y=(led.calcPointy(e.target.height))
                if (isIntersect(pos, x,y,led)) {
            
                  if(rgbColor!==led.color)
                  {
                 
               //   console.log('fbcolormouse',fbColor);
                   
                    led.color=rgbColor
                    handleChangeLed(rgbColor,led.num,ctx,x,y)
                  
                 
              
              
              }
                 
                }
              });
            }
 
 
  canvas.ontouchmove=e=>ontouchmove(e)
  canvas.onmousemove=e=>onmousemove(e)
  

    
 
},[rgbColor])

  //const canvasRef = useCanvas(draw)

  return  <canvas ref={canvasRef} {...rest}/>
  
  
    
}

export default Canvas