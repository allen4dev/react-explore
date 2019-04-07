import React from 'react';

import { signinWithGoogle } from 'utils/firebase';

function Header({ user }) {
  return (
    <div>
      {!user ? (
        <button type="button" onClick={signinWithGoogle}>
          Signin with Google
        </button>
      ) : (
        <div>
          {/* <pre>{JSON.stringify(user, undefined, 2)}</pre> */}
          <pre>Welcome, {user.displayName}</pre>
        </div>
      )}
    </div>
  );
}

export default Header;
