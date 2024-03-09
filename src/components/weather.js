import React from 'react'
import { useState, useEffect } from 'react';
import img1 from './icons/1d.png';
import img2 from './icons/02d.png';
import img3 from './icons/03d.png';
import img4 from './icons/04d.png';
import img5 from './icons/09d.png';
import img6 from './icons/10d.png';
import img7 from './icons/11d.png';
import img8 from './icons/13d.png';
import img9 from './icons/50d.png';
import img10 from './icons/01n.png';
import img11 from './icons/10n.png';
import img12 from './icons/02n.png';

export default function Weather(){
            

        const [weatherData,setWeatherData] = useState(null);
        const [cityname,setCityName] = useState(null);
        const [myTem,setMyTem] = useState(null);
        const [country,setCountry] = useState(null);
        const [description,setDescription] = useState(null);
        const [logo,setLogo] = useState(null);
        const [sunrisehour,setSunRisehour] = useState(null);
        const [sunrisemin,setSunRisemin] = useState(null);
        const [sunrisesec,setSunRisesec] = useState(null);
        const [sunsethour,setSunSethour] = useState(null);
        const [sunsetmin,setSunSetmin] = useState(null);
        const [sunsetsec,setSunSetsec] = useState(null);

        let API_KEY = '503914ae829d42400e0976dce856e762';
        let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=metric`;

       
        let handleInput = (e)=>{
            setCityName(e.target.value)
        }
        

        var data = () =>
        
        {
            if(document.querySelector('#input').value === '')
            {
                alert('Enter your city/town !please')
            }
            else{

              fetch(API_URL)
                .then(response => {
                      return response.json();
                }).then(data=>
                    {
                    setWeatherData(data)
                    const countryCode = data.sys.country;
                    const temprature = Math.floor(data.main.temp);
                    const description = data.weather[0].description;
                    setMyTem(temprature)
                    fetch(`https://restcountries.com/v2/alpha/${countryCode}`)
                    .then(response => response.json())
                    .then(countryData => {
                        setCountry(countryData.name);
                        
                       
                       
                    })
                    .catch(error => {
                        console.error('Error fetching country name: ', error);
                    });

                   setDescription(description);


                    console.log(weatherData)
                   
                    const utsm = data.sys.sunrise*1000;
                    const date = new Date(utsm);
                       setSunRisehour(date.getUTCHours()) 
                       setSunRisemin(date.getUTCMinutes()) 
                        setSunRisesec(date.getUTCSeconds()) 

                        const utsms = data.sys.sunset*1000;
                        const date2 = new Date(utsms);
                           setSunSethour(date2.getUTCHours()) 
                           setSunSetmin(date2.getUTCMinutes()) 
                            setSunSetsec(date2.getUTCSeconds()) 
                   
                        const iconCode = data.weather[0].icon;
                    
                    let icons = 
                        {
                            '01d' :img1,
                            '02d' :img2,
                            '03d' :img3,
                            '04d' :img4,
                            '09d' :img5,
                            '10d' :img6,
                            '11d' :img7,
                            '13d' :img8,
                            '50d' :img9,

                            '01n' :img10,
                            '02n' :img12,
                            '03n' :img3,
                            '04n' :img4,
                            '09n' :img5,
                            '10n' :img11,
                            '11n' :img7,
                            '13n' :img8,
                            '50n' :img9,
                        }

                        var mainIcon 
                        if(icons.hasOwnProperty(iconCode))
                        {
                             mainIcon = icons[iconCode];
                        }
                        
                            setLogo(mainIcon)

                    
                })
                .catch(error => {
                    console.error('There was a problem with your fetch operation:', error);
                });
                
                setTimeout(function displayd(){
                    document.querySelector('.weatherinfo').style.display ='flex'
                }, 1500)
                
        }
  }



    return(
       
    <div  className=' h-[90vh] flex items-center flex-col gap-[1vw] mt-[5vw] p-[0px]  max-sm:h-[90vh] max-sm:w-[100vw] max-lg:h-[70vh]'>
        
        <div className='main  w-[55vw] h-auto rounded-[10px] flex flex-col items-center justify-center   max-sm:w-[45vh] max-sm:h-auto max-lg:w-[60vh] max-xl:w-[70vw]'>
            <div className='flex flex-col items-center gap-[2vw] k h-auto mt-[3vw] mb-[3vw] w-auto  max-sm:h-auto max-sm:mt-[5vh] max-sm:mb-[5vh] max-sm:gap-[5vh] max-lg:mt-[6vh] max-lg:mb-[6vh] max-xl:mt-[6vw] max-xl:mb-[6vw]'>
            <div className='flex flex-row w-auto  h-auto  gap-[10px] max-lg:w-auto'>
            <input type="text" className=' w-[20vw] h-[6vh] p-4 outline-none  rounded-[5px] max-sm:w-[27vh] max-sm:h-[5vh] max-lg:w-[30vh] max-lg:h-[4vh] max-xl:w-[30vw] max-xl:h-[3.5vw]' onChange={handleInput} spellCheck={'false'} id='input' placeholder='Enter city/town'  />
            <button className=' w-[5vw] h-[6vh] text-white bg-black rounded-[5px] max-sm:w-[10vh] max-sm:h-[5vh] max-lg:w-[7vh] max-lg:h-[4vh]  max-xl:w-[6vw] max-xl:h-[3.5vw]' onClick={data} >search</button>
            </div>
            <div className='weatherinfo flex flex-row-reverse justify-between  items-center w-[50vw] gap-[1vw] hidden max-sm:w-[38vh] max-sm:h-auto  max-sm:flex-col max-sm:gap-[0vh]  max-lg:w-[55vh] max-lg:flex-col'>
            <div className=' imgbox object-fit w-auto h-auto  rounded-[20px]' >
                 <img className=' w-auto h-[14vw] object-fit  max-sm:w-[28vh] max-sm:h-[28vh] mix-blend-multiply max-lg:h-[30vh] max-lg:w-[30vh] max-xl:w-[30vh] max-xl:h-[30vh]' src={logo} alt=""  />
            </div>
            <div className='flex flex-col gap-[0vw] h-auto w-auto'>
                
            <div className='  w-auto font-bold h-auto flex items-center justify-center text-[4vw]  max-sm:text-[9vh] max-lg:text-[7vh] max-xl:text-[6vw]  '>
                     {myTem}°C
            </div>
            
            <div className=' flex flex-col  gap-[1vw] items-centre justify-center w-auto h-auto  max-sm:gap-[2vh] max-sm:gap-[1vh]'>
            <div className='flex flex-row gap-[1vw] items-center justify-center max-sm:flex-col max-lg:flex-col'>
            <div id='country' className='  w-auto h-auto flex items-center justify-center text-[1.3vw] p-[0vw]  max-xl:text-[1.5vw]    max-sm:text-[2.2vh] max-sm:w-auto max-lg:text-[1.7vh] '>
                   <b className='  max-sm:text-[2.2vh] text-[1.4vw] max-lg:text-[1.7vh]  max-xl:text-[1.5vw] ml-[0vh]'>Country:</b>  {country}
            </div>
            
            <div className='  w-auto h-auto flex items-center justify-center text-[1.3vw]   max-xl:text-[1.5vw] max-sm:text-[2.2vh] max-lg:text-[1.7vh]'>
                 <b className='  max-sm:text-[2.2vh] text-[1.4vw] max-lg:text-[1.7vh]  max-xl:text-[1.5vw]'>Description:</b>  {description}
            </div>
            </div>
            <div className='flex flex-row items-center gap-[1vw] justify-center max-sm:flex-col max-lg:flex-col'>
            <div className='  w-auto h-auto flex items-center justify-center text-[1.3vw]  max-xl:text-[1.5vw]  max-sm:text-[2.2vh] max-lg:text-[1.7vh]'>
                 <b className='  max-sm:text-[2.2vh] text-[1.4vw] max-lg:text-[1.7vh]  max-xl:text-[1.5vw]' >Sunrise:</b>  {sunrisehour}:{sunrisemin}:{sunrisesec}
            </div>
            <div className='  w-auto h-auto flex items-center justify-center text-[1.3vw]   max-xl:text-[1.5vw]  max-sm:text-[2.2vh] max-lg:text-[1.7vh]'>
            <b className='  max-sm:text-[2.2vh] text-[1.4vw] max-lg:text-[1.7vh]  max-xl:text-[1.5vw]'>Sunset:</b> {sunsethour}:{sunsetmin}:{sunsetsec}
            </div>
            
            </div>
            
            </div>
            </div>
            </div>
            </div>
        </div>
    </div>
   

    )}
