import { createContext, useContext, useState, useEffect } from 'react';
import { auth} from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
const [user, setUser] = useState({});

const signUp = (email, password) => {
createUserWithEmailAndPassword(auth, email, password);

  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

return (
    <UserContext.Provider value={{ signUp, signIn, logout, user }}>
      {children}
  </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
