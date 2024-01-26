import {MdOutlineEdit} from 'react-icons/md'
import ProfileModel from '@components/ProfileModel';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as UserApi from '@api/UserRequest.jsx';
import { logout } from '@actions/AuthAction';


const InfoCard = () => {
  const dispatch = useDispatch()
  const params = useParams();
  const [modelOpened, setModelOpened] = useState(false);
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId ===user._id) {
        setProfileUser(user);
      } else {
        console.log("fetching")
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user]);

  
  const handleLogout=()=>{
    dispatch(logout());
  }


    return ( 
        <div className='relative flex flex-col rounded-b-xl bg-[#151030] text-white overflow-hidden w-[95%] py-6 mb-3 info-border md:[80%] lg:w-[60%]'>
            <div className='flex justify-between items-center mr-10'>
                <span></span>
                {user._id===profileUserId ? (
                    <div>
                        <div className='p-2 bg-orange-100 bdr rounded-full text-orange-500 cursor-pointer' >
                         <MdOutlineEdit size={25} onClick={()=>setModelOpened(!modelOpened)}/>
                        </div>
                        <ProfileModel modelOpened={modelOpened} setModelOpened={setModelOpened} data={user}/>
                    </div>
                ) : ""}
            </div>
            <div className='text-center mx-10 my-5'>
              <span>{profileUser.about}</span>
            </div>
            <div className='flex justify-center items-center'>
              <table>
                  <tr>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'><b>Full Name</b></td>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'>{profileUser.firstName+" "+profileUser.lastName}</td>
                  </tr>
                  <tr>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'><b>Date Of Birth</b></td>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'>{new Date(profileUser.dob).toLocaleDateString()}</td>
                  </tr>
                	<tr>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'><b>Age</b></td>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'>{profileUser.age ? profileUser.age : ""}</td>
                  </tr>
                  <tr>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'><b>Status</b></td>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'>{profileUser.relationship}</td>
                  </tr>
                  <tr>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'><b>Lives In</b></td>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'>{profileUser.livesIn}</td>
                  </tr>
                  <tr>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'><b>Gender</b></td>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'>{profileUser.gender}</td>
                  </tr>
                  <tr>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'><b>Occupation</b></td>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'>{profileUser.worksAt}</td>
                  </tr>
                  <tr>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'><b>Phone</b></td>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'>{profileUser.phone}</td>
                  </tr>
                  <tr>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'><b>Email</b></td>
                    <td className='py-[15px] px-[30px] md:px-[50px] lg:px-[100px]'>{profileUser.email}</td>
                  </tr>
              </table>
            </div>
            <div className='self-center mt-6 mb-1 mr-10'>
                <button className='btn  rounded-md text-white px-9 py-3' onClick={handleLogout}>
                    Log Out
                </button>
            </div>
        </div>
     );
}
 
export default InfoCard;