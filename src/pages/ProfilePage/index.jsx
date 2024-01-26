import InfoCard from '@components/InfoCard'
import ProfileCard from '@components/ProfileCard';
import { StarsCanvas } from '@components/canvas';

const ProfilePage = () => {
    return ( 
        <div className="relative z-0 bg-[#050816] flex flex-col justify-center items-center w-full min-h-[100vh] py-14">
            <ProfileCard />
            <InfoCard />
            <StarsCanvas />
        </div>
     );
}
 
export default ProfilePage;