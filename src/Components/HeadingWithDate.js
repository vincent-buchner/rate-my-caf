import '../App.css';
import {  } from 'react-bootstrap';
import React, { useState } from 'react';

function HeadingTextWithDate() {
    let currentDate = Date().toLocaleString();
    
    function mealTime() {
        // Breakfast Starts at 6
        const breakfastStarts = 6 * 60;

        // Lunch Starts at 11:30
        const lunchStarts = 11 * 60 + 30;

        // Dinner Starts 3:30(15:30)
        const dinnerStarts = 15 * 60 + 30;
        const funnyMessageStarts = 24 * 60;

        const currentTimeAsDate = new Date();
        const currentTime = currentTimeAsDate.getHours() * 60 + currentTimeAsDate.getMinutes();

        if(breakfastStarts <= currentTime && currentTime <= lunchStarts) {
            return "Today's Breakfast Rating"
        } else if (lunchStarts <= currentTime && currentTime <= dinnerStarts) {
            return "Today's Lunch Rating"
        } else if (dinnerStarts <= currentTime && currentTime <= funnyMessageStarts) {
            return "Today's Dinner Rating"
        } else if (0 < currentTime && currentTime <= breakfastStarts) {
            return "Bro, go to bed..."
        } else {
            return "Rate My Caf!"
        }

    }

    return(
        <>
            <div style={{height: "200px"}} className='d-flex flex-column justify-content-center align-items-center text-center'>
                <h1 style={{fontFamily: "mont_bold"}} className='display-2'>{mealTime()}</h1>
                <p>{currentDate}</p>
            </div>
        </>
    );
   
}

export default HeadingTextWithDate;