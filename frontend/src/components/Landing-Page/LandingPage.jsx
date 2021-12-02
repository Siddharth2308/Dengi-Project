import React from 'react';
import InfoSection from '../InfoSection';

import { homeObjOne } from './Data';

function LandingPage() {
    return (
        <>
        <InfoSection {...homeObjOne}/>
        </>
    );
}

export default LandingPage;
