import { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import defaultCover from '@images/defaultCover.jpg'

const ProfileCard = () => {
    
    const {user}=useSelector((state=>state.authReducer.authData));
    const [isProfilePage,setIsProfilePage]=useState(false);
    const posts=useSelector((state)=>state.postReducer.posts);
    useEffect(()=>{
        if(window.location.pathname.includes('/profile'))setIsProfilePage(true);
    },[])
    return (  
        <div className={`relative flex flex-col text-white  bg-[#151030] overflow-hidden ${isProfilePage ? " w-[95%] md:w-[95%] lg:w-[60%] rounded-tr-xl  rounded-tl-xl pp-sha" :  "sm:w-[60%] md:w-[50%] lg:w-[40%] rounded-xl p-sha"}`}>
            <div className='relative flex flex-col justify-center items-center pcard'>
                <img src={defaultCover} alt="Cover" className='object-cover w-full h-52'/>
                <div className='absolute w-24 h-24 rounded-full  bottom-[-3rem] pshad'>
                  <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green','orange'])} name={user.firstName} round={true}/>
                </div>
            </div>
            <div className='flex flex-col items-center mt-14 mb-2 gap-2'>
                <div className='font-bold text-xl'>{user.firstName} {user.lastName}</div>
                <div className='text-[14px]'>{user.worksAt ? user.worksAt : "update Designation.."}</div>
            </div>
            <div className='flex flex-col items-center gap-3 mt-5'>
                <div className='bg-[#cfcdcd] w-[90%] h-[0.5px] mb-2'></div>
                {!isProfilePage ? 
                    <div className='font-bold text-sm tracking-widest text-center text-white mb-4  cursor-pointer'><Link to={`/profile/${user._id}`}>View Profile</Link></div> : ''
                }
            </div>
        </div>
    );
}
 
export default ProfileCard;