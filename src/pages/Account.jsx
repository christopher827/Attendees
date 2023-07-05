import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc, where, query, getDocs, limit, onSnapshot } from 'firebase/firestore';
import QrImg from '../assets/Images/Qr.jpeg';

function Account() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const [attendanceTaken, setAttendanceTaken] = useState(false);

  useEffect(() => {
    checkAttendanceStatus();
  }, []);

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleAttendance = async () => {
    if (attendanceTaken) {
      alert('Your attendance for today has been marked, till tomorrow');
      return;
    }
    try {
      const { email } = user;
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      const { latitude, longitude } = position.coords;

      const attendanceRef = collection(db, 'students');
      const q = query(attendanceRef, where('email', '==', email), limit(1));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(collection(db, 'students'), {
          email,
          latitude,
          longitude,
        });

        alert('Your attendance has been taken.');
        setAttendanceTaken(true);
      } else {
        alert('Your attendance for today has already been marked.');
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const checkAttendanceStatus = async () => {
    try {
      const { email } = user;

      const attendanceRef = collection(db, 'students');
      const q = query(attendanceRef, where('email', '==', email), limit(1));

      onSnapshot(q, (querySnapshot) => {
        if (!querySnapshot.empty) {
          setAttendanceTaken(true);
        }
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  if (user) {
    return (
      <div className='max-w-[1140px] mx-auto h-screen'>
        <div className='flex justify-between items-center my-12 py-8 rounded-div'>
          <div>
            <h1 className='text-2xl font-bold'>Account</h1>
            <div>
              <p>Welcome, {user?.email}</p>
            </div>
          </div>
          <div>
            <button className='border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl' onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </div>
        <div className='flex flex-col md:flex-row pt-10 justify-center items-center'>
          <div className='w-10/12 sm:w-8/12 md:w-5/12 lg:w-6/12 flex flex-col justify-center items-center px-4'>
            <p className='text-4xl lg:text-5xl font-bold pt-10 md:pt-0'>Scan Your Presence</p>
            <p className='lg:text-lg 2xl:text-xl py-6 text-center'>Click the button to be recognized as present</p>
            <img src={QrImg} alt='' className='rounded-sm w-6/12 sm:w-4/12 md:w-5/12 lg:w-6/12' />

            <Link className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl mt-2' onClick={handleAttendance}>
              Click Here
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Account;
