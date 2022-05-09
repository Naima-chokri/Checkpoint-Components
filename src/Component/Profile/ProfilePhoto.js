import React from 'react';
import './Style.css';

const ProfilePhoto = () => {
  return (
    <div className="card text-center shadow">
        <div className="overflow">
          <img  style={{ width:300 , height:350 }} src="/mypic.png" alt="mypic" className='card-img-top' />
        </div>
     
    </div>
  )
}

export default ProfilePhoto