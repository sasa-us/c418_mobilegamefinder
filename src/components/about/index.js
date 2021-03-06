import React from 'react';
import './about.scss';
import GeneralText from '../multiuse/generaltext';
import DevItem from './dev';
import Steffany from './images/steffany.png';
import Delray from './images/delray.png';
import Stephanie from './images/stephanie.png';
import Sharry from './images/sharry.png';
import Martin from './images/martin.png';
import Dan from './images/dan.png';


export default props => {
    const genText = 'Our dev tem, who while not ferrets, are still equally cool.'
    return (
        <div className='aboutPageContainer'>
            <h4 className='aboutLabel'>Meet our dev tem, who while not ferrets, are equally cool.</h4>
            <DevItem src={Steffany} name='Steffany Gross' title='Boss Lady' site='http://www.steffanygross.com' github='https://github.com/Allurien' linkedin='https://www.linkedin.com/in/steffany-gross-452205a/' email='mailto:steffany.gross@gmail.com' />
            <DevItem src={Delray} name='Delray Faskey' title='Much programmer wow' site='' github='https://github.com/Raenbow' linkedin='' email='' />
            <DevItem src={Stephanie} name='Stephanie Lacina' title='Tofutti' site='' github='https://github.com/StephanieLDR' linkedin='' email='' />
            <DevItem src={Sharry} name='Sharry Lu' title='Nice Programmer Lady' site='http://www.sharrylu.com/' github='https://github.com/sasa-us' linkedin='https://www.linkedin.com/in/sharry-lu-1b5385128/' email='mailto:sharryluh@gmail.com' />
            <DevItem src={Martin} name='Martin Rizo' title='Hacker Extraordinaire' site='' github='https://github.com/Martin92571' linkedin='' email='' />
            <DevItem src={Dan} name='Daniel Stone' title='Hacker Extraordinaire' site='http://danielkstone.com/' github='https://github.com/codedaniels' linkedin='https://www.linkedin.com/in/danielks/' email='mailto:danielksstone@gmail.com' />
        </div>
    )
}