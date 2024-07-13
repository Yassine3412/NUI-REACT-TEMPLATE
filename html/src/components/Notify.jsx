import { useState } from 'react';
import '../App.css' 
// import svg icon from font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'; 
// import svg true and false
import { faCheck } from '@fortawesome/free-solid-svg-icons';
// import svg close
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// icon times
import { faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
const Notify = (props) => {
    
    return (
        <div className="notify">
            <div className="notify-content">
                <a className="title-notify"> 
                    <div>
                    Appel Centrale  <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                    </div>
                    
                    <a> {props.times} <FontAwesomeIcon style={{fontSize: "20px"}} icon={faClock } /></a>
                </a>
                <a className="description-notify">
                    {props.description}
                </a>
            </div>
            <div className='offre'>
                <a onClick={()=>{ 
                    fetchNui('acceptAlert', {id: props.id});
                }} className='btn hover-vert'>
                    <FontAwesomeIcon style={{fontSize: "20px"}} icon={faCheck} />

                </a>
                <a onClick={()=>{ 
                    fetchNui('refuseAlert', {id: props.id});
                }}className='btn hover-rouge'><FontAwesomeIcon style={{fontSize: "20px"}} icon={faTimes} /></a>
            </div>
        </div>
    );
}

export {Notify};