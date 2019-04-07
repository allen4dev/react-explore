import React from 'react';
import styled from '@emotion/styled';

import { signOut } from 'utils/firebase';

import Signup from './Signup';

const SignOut = styled.div`
  display: flex;
  align-items: center;
`;

function Header({ user }) {
  return (
    <div>
      {!user ? (
        <Signup />
      ) : (
        <SignOut>
          {/* <pre>{JSON.stringify(user, undefined, 2)}</pre> */}
          <p>Welcome, {user.displayName}</p>
          <button type="button" onClick={signOut}>
            Sign out
          </button>
        </SignOut>
      )}
    </div>
  );
}

export default Header;
