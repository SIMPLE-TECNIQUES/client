import axios from 'axios';

const API=axios.create({baseURL : "https://funny-bear-drawers.cyclic.app"})

API.interceptors.request.use((req) => {
    const profile = localStorage.getItem('profile');
    if (profile) {
      const { token } = JSON.parse(profile);
      if (token) {
        req.headers.Authorization = `Bearer ${token}`;
      }
    }
    return req;
});

export const getUser = (userId) => API.get(`/user/${userId}`);
export const updateUser=(id,formData)=>API.put(`/user/${id}`,formData);
export const getAllUser=()=>API.get('/user');