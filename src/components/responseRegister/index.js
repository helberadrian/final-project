import React from 'react';
import './styles.css';

const ResponseRegister = ({id}) => {
    return (
        <div className='message'>
            <p>Se registro exitosamente un nuevo usuario con ID: {id}</p>
        </div>
    );
}

export default ResponseRegister;