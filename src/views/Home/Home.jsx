import React from 'react';
import "./Home.css"
import { useNavigate } from 'react-router-dom';


export const  Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='home'>
        <div className='title'>Tatto Valencia</div>
        <div className='homebody'>
          <div className='text'>
            WHO ARE<br></br>
            
            Tattooing is history, it is experience, it is a tradition of three generations, it is a pioneer in Valencia, it has been at the forefront for 40 years, improving and innovating both in aesthetic trends and styles, as well as in hygiene and technology.
            We were the first, always remembering yesterday but focusing on tomorrow, with constant evolution in the present.
          </div>
          
        </div>
      </div>
    </>
  );
};