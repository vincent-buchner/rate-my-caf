import '../App.css';
import {  } from 'react-bootstrap';

function HeadingTextWithDate({date}) {
    let now = Date().toLocaleString();

    return(
        <>
            <div style={{height: "200px"}} className='d-flex flex-column justify-content-center align-items-center text-center'>
                <h1 style={{fontFamily: "mont_bold"}} className='display-2'>Today's Lunch Rating</h1>
                <p>{now}</p>
            </div>
        </>
    );
   
}

export default HeadingTextWithDate;