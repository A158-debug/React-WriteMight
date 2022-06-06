import {LOGIN} from '../constants/actionTypes';
import * as  api from '../api/index.js';

export const sigin = (formData, router)=>async(dispatch)=>{
    try {
        const {data} = await api.signIn(formData);
        dispatch({type:LOGIN,data});
        router.push('/')
    } catch (error) {
        console.error(error)
    }
}

export const signup = (formData,router)=>async(dispatch)=>{
    try {
        const {data} = await api.signUp(formData);
        dispatch({type:LOGIN,data});
    } catch (error) {
        console.log(error)
    }
}