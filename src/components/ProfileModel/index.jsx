import { useState } from 'react';
import {Box,Button,Typography,Modal,TextField} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateUser } from '@actions/UserAction';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '4px solid #5100ff',
  boxShadow: 24,
  borderRadius : '10px',
  p: 4,
};


export default function ProfileModel({modelOpened,setModelOpened,data}) {
  const {password,...other}=data;
  const [formData,setFormData]=useState(other);
  const {user}=useSelector((state)=>state.authReducer.authData);
  const param=useParams();
  const dispatch=useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name==="dob"){
      const [year, month, day] = value.split('-');
      const birthDate = new Date(`${month}/${day}/${year}`);
      const currentDate = new Date();
      let age = currentDate.getFullYear() - birthDate.getFullYear();
      if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
          currentDate.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      setFormData({ ...formData, age, [name]: value });
    }
    else{
      setFormData({ ...formData, [name]: value }); 
    }
    
  };


  const handleSubmit=(e)=>{
    e.preventDefault();
    let UserData=formData;

    dispatch(updateUser(param.id,UserData));
    setModelOpened(false);
  }

  return (
    <div>
      <Modal
        open={modelOpened}
        onClose={setModelOpened}
        aria-labelledby="Your Info"
      >
        <Box sx={style}>
          <Typography  variant="h6">
            Your Info
          </Typography>
          <form className='flex flex-col gap-4 items-center'>
                <div className='flex gap-3'>
                    <TextField value={formData.firstName} variant='outlined' color='primary' label='First Name' name='firstName' onChange={handleChange}></TextField>
                    <TextField value={formData.lastName} variant='outlined' color='primary' label='Last Name' name='lastName' onChange={handleChange}></TextField>
                </div>
                <div className='w-full'>
                  <TextField value={formData.about} variant='outlined' color='primary' label='Write Something about You..' fullWidth name='about' onChange={handleChange}></TextField>
                </div>
                <div className='w-full'>
                    <TextField value={formData.livesIn} variant='outlined' color='primary' label='Lives In' fullWidth name='livesIn' onChange={handleChange}></TextField>
                </div>
                <div className='flex gap-3'>
                    <TextField value={formData.relationship} variant='outlined' color='primary' label='Relationship Status' name='relationship' onChange={handleChange}></TextField>
                    <TextField value={formData.age} variant='outlined' color='primary' label='Enter Your Age' name='age' onChange={handleChange}></TextField>
                </div>
                <div className='w-full'>
                    <TextField value={formData.worksAt} variant='outlined' color='primary' label='Occupation' fullWidth name='worksAt' onChange={handleChange}></TextField>
                </div>
                <div className='flex gap-3'>
                    <TextField value={formData.phone} variant='outlined' color='primary' label='Phone Number' name='phone' onChange={handleChange}></TextField>
                    <TextField value={formData.dob} variant='outlined' color='primary' label='dob mm/dd/yyyy' name='dob' onChange={handleChange}></TextField>
                </div>
                
                <Button onClick={handleSubmit} variant='standard' color='secondary'>Save</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
