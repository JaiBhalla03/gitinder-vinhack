import React from 'react';
import phoneView from '../../images/phoneView.png'

const LandingPage = () => {
    return (
        <div className={'h-screen lg:px-24 flex'}>
            <div className={'mt-5'}>
                <h1 className={'text-4xl md:text-5xl font-bold p-5 md:p-10'}>Welcome JaiBhalla03,</h1>
                <p className={'text-3xl px-5 md:px-10'}>
                    Explore public repositories on GitHub
                    the same way a user might scroll through other profiles in
                    Tinder.
                </p>
            </div>
            <img src={phoneView} className={'scale-75 hidden md:flex'}/>
        </div>
    );
};

export default LandingPage;