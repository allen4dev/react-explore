import React from 'react';

import { signinWithGoogle } from 'utils/firebase';

function Header() {
  return (
    <div>
      <button type="button" onClick={signinWithGoogle}>
        Signin with Google
      </button>
    </div>
  );
}

export default Header;
