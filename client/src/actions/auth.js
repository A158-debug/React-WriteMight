import {LOGIN} from '../constants/actionTypes';
import * as  api from '../api/index.js';

export const signin = (formData, navigate)=>async(dispatch)=>{
    try {
        const {data} = await api.signIn(formData);
        dispatch({type:LOGIN,data});
        navigate('/')
    } catch (error) {
        console.error(error)
    }
}

export const signup = (formData,navigate)=>async(dispatch)=>{
    try {
        const {data} = await api.signUp(formData);
        dispatch({type:LOGIN,data});
        navigate('/');
    } catch (error) {
        console.log(error)
    }
}