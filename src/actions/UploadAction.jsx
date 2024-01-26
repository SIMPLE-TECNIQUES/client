import * as UploadApi from '@api/UploadImage.jsx';

export const uploadImage=(data)=>async(dispatch)=>{
    try {
        await UploadApi.uploadImage(data)
    } catch (error) {
        console.log(err.message);
    }
}

export const uploadPost=(data)=>async(dispatch)=>{
    dispatch({type : "UPLOAD_START"})
    try{
        const newPost = await UploadApi.uploadPost(data);
        dispatch({type : "UPLOAD_SUCCESS",data : newPost.data})
    }catch(error){
        console.log(error.message);
        dispatch({type : "UPLOAD_FAIL"});
    }
}