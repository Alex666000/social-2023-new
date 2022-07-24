import React from 'react';
import preloader from '../../../assets/images/Spinner-2.gif';

// через props теперь универсальный Preloader можем настраивать как хотим:
export const Preloader = () => {
    return <div style={ {backgroundColor: 'white '} }><img src={preloader}/> </div>

};
