import React from 'react';
import Card from "./subComponents/Card";

const style = {
    wrapper: `flex flex-col bg-[#0d1117] md:pt-20 md:pb-5 h-screen`,
    cardsContainer: `flex justify-center`,
}

const Explore = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.cardsContainer}>
                <Card/>
            </div>
        </div>
    );
};

export default Explore;