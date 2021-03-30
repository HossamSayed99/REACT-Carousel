import React, {useState} from 'react';
import {SliderData} from './SliderData';


const ImageSlider = ({slides}) =>
    {

        const [current, setCurrent] = useState(0);
        const length = slides.length;


        const nextSlide = () => {
            setCurrent((current+1) % length);
        }
        const prevSlide = () =>{
            setCurrent((current-1 + length) %length);
        }

        /*
            Scrolling Handling
        */
            document.addEventListener('touchstart', handleTouchStart, false);        
            document.addEventListener('touchmove', handleTouchMove, false);
            
            var xDown = null;                                                        
            var yDown = null;
            
            function getTouches(evt) {
              return evt.touches ||             // browser API
                     evt.originalEvent.touches; // jQuery
            }                                                     
            
            function handleTouchStart(evt) {
                const firstTouch = getTouches(evt)[0];                                      
                xDown = firstTouch.clientX;                                      
                yDown = firstTouch.clientY;                                      
            };                                                
            
            function handleTouchMove(evt) {
            if ( ! xDown || ! yDown ) {
                return;
            }
            
                var xUp = evt.touches[0].clientX;                                    
                var yUp = evt.touches[0].clientY;
            
                var xDiff = xDown - xUp;
                var yDiff = yDown - yUp;
            
                if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                    if ( xDiff > 0 ) {
                        nextSlide();
                    } else {
                        prevSlide();
                    }                       
                }
                /* reset values */
                xDown = null;
                yDown = null;                                             
        };


        if(!Array.isArray(slides) || slides.length <= 0)
            return;

        return (
            <section className='slider'>
                <div className='nav_bar'>
                {SliderData.map((slide, index) => {
                        if(index === current){
                            return (
                                <button type="button" className = 'btn btn-light active' onClick = {() => setCurrent(index)}
                                            key = {index}
                                >{index + 1}</button>
                            );
                        }
                        else{
                            return (
                                <button type="button" className = 'btn btn-light' onClick = {() => setCurrent(index)}
                                            key = {index}
                                >{index + 1}</button>
                            );
                        }
                })}
                </div>
                <button className=' glyphicon glyphicon-menu-left left-arrow' onClick={prevSlide} />
                <button  className=' glyphicon glyphicon-menu-right right-arrow' onClick={nextSlide} />
                {SliderData.map((slide, index) => {
                        return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            <div 
                                style={{backgroundImage: "url("+slide.image+")"}} alt='Random Image' className='image'>
                            </div>
                        </div>
                        );
                    })}
                
            </section>
        );
    }

export default ImageSlider;