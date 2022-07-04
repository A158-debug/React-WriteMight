import React,{useEffect} from 'react'

const GoogleButton = () => {
    function handleCallbackSuccess(response){
        console.log(response);
     }
     useEffect(() => {
       /* global google */
       google.accounts.id.initialize({
         client_id:"64044986296-gtvs6okkkd0vfjb0ouj9s45f5pjfmdat.apps.googleusercontent.com",
         callback:handleCallbackSuccess, 
       });
       google.accounts.id.renderButton(
         document.getElementById("GoogleSignIn",{theme:"outlined",size:"large"})
       );
       // google.accounts.id.prompt();
       // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])
  return (
      <div>
          <div id="GoogleSignIn"></div>
      </div>

  )
}
export default GoogleButton