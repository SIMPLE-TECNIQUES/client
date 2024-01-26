import ProfileCard from '@components/ProfileCard';
import { StarsCanvas } from '@components/canvas';

const Home = () => {
    return ( 
        <div className="flex justify-center items-center w-[100%] min-h-[100vh] relative z-0 bg-[#050816]">
            <ProfileCard />
            <StarsCanvas />
        </div>
     );
}
 
export default Home;