import React from 'react';
import {FaSearch, FaUndoAlt} from "react-icons/fa";
import {
    AiOutlineClose,
    AiFillStar,
    AiOutlineStar,
    AiOutlineFork,
    AiFillGithub,
    AiOutlineEye,
    AiOutlineArrowRight,
    AiOutlineArrowLeft,
    AiOutlineRight, AiOutlineLeft
} from "react-icons/ai";
import {BsFillLightningChargeFill} from "react-icons/bs";
import TinderCard from 'react-tinder-card'
import avatar from '../../images/avatar.png'
import {TiMessages} from "react-icons/ti";
import {RiUserFollowLine} from "react-icons/ri";


const style = {
    tinderCardWrapper: `w-full h-full absolute`,
    wrapper: `text-[#b1a6a2] w-full h-full overflow-hidden bg-no-repeat bg-cover bg-center relative pt-4 md:pt-2 bg-[#161b22] rounded-3xl`,
    avatarStyle: 'border rounded-full w-28 mx-auto',
    name: 'text-2xl font-bold my-2 md:mt-1 md:mb-0 md:text-xl select-none',
    icon: 'text-black hover:scale-100',
    description: 'md:text-sm select-none',
    techStack: 'flex justify-between w-full py-4 md:py-1 select-none',
    tech: 'bg-[#b1a6a2] text-[#161b22] border rounded-full py-1 px-2 md:px-1 md:py-0',
    ownerInfo: 'py-4 md:py-2 flex select-none',
    repoInfo: 'py-4 md:py-2',
}

const GithubCardItem = () => {
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }
    return (
        <TinderCard
            className={style.tinderCardWrapper}
            preventSwipe={['up', 'down']}
            onSwipe={onSwipe}
        >
            <div className={style.wrapper}>
                <div className={'w-full h-full flex flex-col justify-between pt-[3rem] md:pt-0'}>
                    <div className={'flex flex-col justify-around px-5'}>
                        <h1 className={style.name}>
                            Repository name
                        </h1>
                        <div className={style.description}>
                            Lorem ipsum dolor sit amet, elit.
                            Nunc feugiat ex est. Praesent eu porta augue. Pellentesque
                            ac fringilla metus. Donec vulputate vehicula.
                        </div>
                        <hr className={'text-[#b1a6a2]'}/>
                        <i className={'text-xs select-none'}>Tech Used</i>
                        <ul className={style.techStack}>
                            <li className={style.tech}>Javascript</li>
                            <li className={style.tech}>HTML</li>
                            <li className={style.tech}>CSS</li>
                            <li className={style.tech}>PYTHON</li>
                        </ul>
                        <hr className={'text-[#b1a6a2]'}/>
                        <div className={style.repoInfo}>
                            <ul className={'flex font-light justify-around select-none'}>
                                <li className={'flex'}>12 <AiOutlineEye size={23} className={'mx-1'}/></li>
                                <li className={'flex'}>12 <AiOutlineFork size={23} className={'mx-1'}/></li>
                                <li className={'flex'}>34 <AiOutlineStar size={23} className={'mx-1'}/></li>
                            </ul>
                            <div className={'mt-2 bg-green-500 inline-block text-white border rounded-full select-none px-2 md:px-1 mr-1 float-right'}>Deployed</div>
                        </div>
                        <hr className={'text-[#b1a6a2]'}/>
                        <div className={style.ownerInfo}>
                            <div className={'flex flex-col justify-center'}>
                                <img src={avatar} className={style.avatarStyle}/>
                            </div>
                            <div className={'flex flex-col p-3 md:p-2'}>
                                <div className={'flex flex-col'}>
                                    <h className={'text-xl font-bold'}>Jai Bhalla</h>
                                    <i>Individual</i>
                                </div>
                                <div className={'flex md:text-sm'}>
                                    <div>12 followers</div>
                                    <div>10 following</div>
                                </div>

                            </div>
                        </div>
                        <hr className={'text-[#b1a6a2]'}/>
                    </div>
                    <div>
                        <div className={'flex justify-between'}>
                            <div className={'ml-10 my-5 bg-red-700 rounded-full inline-block hover:scale-110 duration-100 ease-in-out'}>
                                <AiOutlineLeft size={40} className={'m-1 text-white'}/>
                            </div>
                            <div className={'mr-10 my-5 bg-green-500 rounded-full inline-block hover:scale-110 duration-100 ease-in-out'}>
                                <AiOutlineRight size={40} className={'m-1 text-white'}/>
                            </div>
                        </div>
                    </div>
                    <div className={'flex justify-around bg-[#b1a6a2] w-full p-3'}>
                        <div className={'hover:scale-110 duration-100'}>
                            <AiFillGithub className={style.icon} size={35}/>
                        </div>
                        <div className={'hover:scale-110 duration-100'}>
                            <AiOutlineFork className={style.icon} size={35}/>
                        </div>
                        <div className={'hover:scale-110 duration-100'}>
                            <AiOutlineStar className={style.icon} size={35}/>
                        </div>
                        <div className={'hover:scale-110 duration-100'}>
                            <RiUserFollowLine className={style.icon} size={35}/>
                        </div>



                    </div>
                </div>
            </div>

        </TinderCard>

    );
};

export default GithubCardItem;