import React from 'react';
import { Row } from 'reactstrap';
import { Footer } from './Footer';
import {  Unsubscribe } from './Unsubscribe';
import { OrangeHeader } from './OrageHeader';
import { LineSeparator } from './LineSeparator';
import { MoreInformation } from './MoreInformation';
import NavBar from './Header';

export const StartCampaign = () => {

    return(
    <div className='w-100 h-screen  '>
    <NavBar/>
        <div className='flex items-center bg-blue justify-center h-screen'>
    <Unsubscribe/>
    </div>
    </div>
    )
}