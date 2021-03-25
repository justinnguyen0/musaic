import React from 'react';
import {
    LandingPageBlock,
    LandingPageBtn,
    LandingPageBtnLink
} from './LandingPageElements';

export default function LandingPage() {
    return (
        <LandingPageBlock>
            <h2 style={{color: 'white', paddingBottom: '10px'}}>Musaic</h2>
            <h1 style={{color: 'white'}}>Bringing listeners</h1>
            <h1 style={{color: 'white', paddingBottom: '10px'}}>together.</h1>
            <LandingPageBtn>
                <LandingPageBtnLink to='/home'>start sharing</LandingPageBtnLink>
            </LandingPageBtn>
        </LandingPageBlock>
        
    );
}