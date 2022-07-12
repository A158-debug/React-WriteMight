import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AUTH } from '../../constants/actionTypes';

const GoogleButton = (props) => {
    const clientId = '64044986296-gtvs6okkkd0vfjb0ouj9s45f5pjfmdat.apps.googleusercontent.com';

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const onSuccess = (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: AUTH, data: { result, token } });
            navigate('/');
        } catch (error) {
            console.log("error ",error);
        }
    }
    const onFailure = (err) => {
        console.log('Google sigIn failure try again later ', err);
    }

    return (

        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttontext="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default GoogleButton