import React from 'react';
import {FiGithub} from "react-icons/fi";
import GithubCardItem from "../subComponents/githubCardItem";
import {profiles} from "../../utils/data";

const style = {
    wrapper: `h-screen w-[27rem] pd-[3rem] md:h-[34rem] md:w-[20rem] flex flex-col rounded-3xl overflow-hidden`,
    cardMain: `w-full flex-1 relative flex flex-col justify-center items-center bg-gray-500`,
    noMoreWrapper: `flex flex-col justify-center items-center absolute m-2`,
    tinderLogo: `text-5xl text-red-500 mb-4`,
    noMoreText: `text-xl text-white`,
    swipesContainer: `w-full h-full overflow-hidden`,
}

const Card = () => {
    return (
        <div className={style.wrapper}>
            {/*<CardHeader/>*/}
            <div className={style.cardMain}>
                <div className={style.noMoreWrapper}>
                    <FiGithub/>
                    <div className={'text-center'}>
                        No more Profiles in your location...
                    </div>
                </div>
                <div className={style.swipesContainer}>
                    {profiles.map((profile)=>(
                        <GithubCardItem/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;