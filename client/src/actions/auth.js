import {LOGIN} from '../constants/actionTypes';
import * as  api from '../api/index.js';

export const sigin = (formData, naviagte)=>async(dispatch)=>{
    try {
        const {data} = await api.signIn(formData);
        dispatch({type:LOGIN,data});
        naviagte('/')
    } catch (error) {
        console.error(error)
    }
}

export const signup = (formData,naviagte)=>async(dispatch)=>{
    try {
        const {data} = await api.signUp(formData);
        naviagte({type:LOGIN,data});
    } catch (error) {
        console.log(error)
    }
}