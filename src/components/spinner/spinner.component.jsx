import React from 'react';
import {ReactComponent as SpinnerSvg} from '../../assets/icons/spinner.svg';
import './spinner.styles.css';


const Spinner = () => {

    return (
        <div>
            <SpinnerSvg  className='spinner'/>
        </div>
    )

}

export default Spinner;