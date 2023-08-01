import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc, where, query, getDocs, limit, onSnapshot } from 'firebase/firestore';
import Qr2 from '../assets/Images/Qr.jpeg';

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

const handleAna302Attendance = async()=>{
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

      const attendanceRef = collection(db, 'ana302');
      const q = query(attendanceRef, where('email', '==', email), limit(1));
      const querySnapshot = await getDocs(q);

if (querySnapshot.empty) {
    await addDoc(collection(db, 'ana302'), {
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

  }

  const handleEnt302Attendance = async()=>{
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

    const attendanceRef = collection(db, 'ent302');
      const q = query(attendanceRef, where('email', '==', email), limit(1));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(collection(db, 'ent302'), {
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

  }


  const handleGst207Attendance = async()=>{
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

      const attendanceRef = collection(db, 'Gst207');
      const q = query(attendanceRef, where('email', '==', email), limit(1));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(collection(db, 'Gst207'), {
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

  }

  const handlePol201Attendance = async()=>{
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

      const attendanceRef = collection(db, 'Pol201');
      const q = query(attendanceRef, where('email', '==', email), limit(1));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(collection(db, 'Pol210'), {
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

}

  const handlePhs234Attendance = async()=>{
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

      const attendanceRef = collection(db, 'Phs234');
      const q = query(attendanceRef, where('email', '==', email), limit(1));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(collection(db, 'Phs234'), {
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

  }

  const handleBch202Attendance = async()=>{
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

      const attendanceRef = collection(db, 'Bch202');
      const q = query(attendanceRef, where('email', '==', email), limit(1));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(collection(db, 'Bch202'), {
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

  }

  const handlePha302Attendance = async()=>{
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

      const attendanceRef = collection(db, 'Pha302');
      const q = query(attendanceRef, where('email', '==', email), limit(1));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(collection(db, 'Pha302'), {
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

  }

  const handlePth304Attendance = async()=>{
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

      const attendanceRef = collection(db, 'Pth304');
      const q = query(attendanceRef, where('email', '==', email), limit(1));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(collection(db, 'Pth304'), {
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

  }



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
            <p className='text-4xl lg:text-5xl font-bold pt-10 md:pt-0 text-center'>Scan Your Presence</p>
           <p className='lg:text-lg 2xl:text-xl py-6 text-center'>Click the button to be recognized as present</p>
      <img src={Qr2} alt="" className="rounded-sm w-6/12 sm:w-4/12 md:w-5/12 lg:w-6/12" />
           <div class="w-full text-center">
  <div class="flex justify-between border-b">
    <div class="text-left">Courses</div>
    <div>Attendance</div>
  </div>

  <div className="flex items-center justify-between border-b p-3">
    <div className="text-left">Ana 302</div>
    <div>
      <Link className="bg-blue-500 text-white px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl mt-2" onClick={handleAna302Attendance}>Click Here</Link>
    </div>
  </div>

  <div className="flex items-center justify-between border-b p-3">
    <div className="text-left">Ent 302</div>
    <div>
      <Link  className="bg-blue-500 text-white px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl mt-2" onClick={handleEnt302Attendance}>Click Here</Link>
    </div>
  </div>

  <div className="flex items-center justify-between border-b p-3">
    <div className="text-left">Gst 207</div>
    <div>
      <Link  className="bg-blue-500 text-white px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl mt-2" onClick={handleGst207Attendance}>Click Here</Link>
    </div>
  </div>

  <div className="flex items-center justify-between border-b p-3">
    <div className="text-left">Pol 201</div>
    <div>
      <Link  className="bg-blue-500 text-white px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl mt-2" onClick={handlePol201Attendance}>Click Here</Link>
    </div>
  </div>


  <div className="flex items-center justify-between border-b p-3">
    <div className="text-left">PHS 234</div>
    <div>
      <Link className="bg-blue-500 text-white px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl mt-2" onClick={handlePhs234Attendance}>Click Here</Link>
    </div>
  </div>

  <div className="flex items-center justify-between border-b p-3">
    <div className="text-left">BCH 202</div>
    <div>
  <Link className="bg-blue-500 text-white px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl mt-2" onClick={handleBch202Attendance}>Click Here</Link>
    </div>
  </div>

  <div className="flex items-center justify-between border-b p-3">
    <div className="text-left">PHA 302</div>
    <div>
  <Link  className="bg-blue-500 text-white px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl mt-2" onClick={handlePha302Attendance}>Click Here</Link>
    </div>
  </div>

  <div className="flex items-center justify-between border-b p-3">
    <div className="text-left">PTH 304</div>
    <div>
      <Link className="bg-blue-500 text-white px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl mt-2" onClick={handlePth304Attendance}>Click Here</Link>
    </div>
  </div>

</div>
          </div>
        </div>

      </div>
    );
 }
}
export default Account;
