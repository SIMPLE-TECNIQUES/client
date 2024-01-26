import Home from '@pages/Home'
import ProfilePage from '@pages/ProfilePage'
import Auth from '@pages/Auth'
import {Routes,Route,Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux';

function App() {
  const user=useSelector((state)=>state.authReducer.authData);
  
  return (
    <div className='flex justify-center items-center bg-[#efefef] text-[#242d49]'> 
        <Routes>
            <Route path='/' element={user ? <Navigate to="home"/> : <Navigate to="auth" />}/>
            <Route path='/home' element={user ? <Home /> :<Navigate to="../auth" /> } />
            <Route path='/auth' element={user ? <Navigate to='../home' /> : <Auth />} />
            <Route path='/profile/:id' element={user ? <ProfilePage /> : <Navigate to='../auth' />}/>
        </Routes>
    </div>
  )
}

export default App
