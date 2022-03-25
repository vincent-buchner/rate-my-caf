import '../App.css';
import {  } from 'react-bootstrap';

function HeadingTextWithDate({date}) {
    return(
        <>
            <div style={{height: "100px"}} className='d-flex justify-content-center align-items-center'>
                <h1 style={{fontFamily: "mont_bold"}} className='display-2'>Today's Lunch</h1>
            </div>
        </>
    );
   
}

export default HeadingTextWithDate;