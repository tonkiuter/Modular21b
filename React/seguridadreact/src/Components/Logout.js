import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '121128626643-l5809pj151tkvtg67i4fg6ga82rsu3ji.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout 
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;