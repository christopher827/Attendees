import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

function Account() {
  const [students, setStudents] = useState([]);
  const [lecturerLatitude, setLecturerLatitude] = useState(null);
  const [lecturerLongitude, setLecturerLongitude] = useState(null);

  const getLecturerLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLecturerLatitude(position.coords.latitude);
          setLecturerLongitude(position.coords.longitude);
        },
        (error) => {
          console.error('Error getting lecturers location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    if (lat1 && lon1 && lat2 && lon2) {
      const R = 6371; // Radius of the Earth in kilometers

    } else {
      return null;
    }
  };

  const fetchStudents = () => {
    const studentsRef = collection(db, 'students');
    const q = query(studentsRef);
    return onSnapshot(q, (snapshot) => {
      const studentData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(studentData);
    });
  };

  useEffect(() => {
    getLecturerLocation();
    const unsubscribe = fetchStudents();

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className='max-w-[1140px] mx-auto h-screen'>
      <div className='rounded-div my-10'>
        <h2 className='text-2xl font-bold text-center'>Your Students</h2>
        <table className='w-full border-collapse text-center'>
          <thead>
            <tr className='border-b'>
              <th></th>
              <th>#</th>
              <th className='text-left'>Email</th>
              <th>Status</th>
              <th className='hidden md:table-cell'>Longitude</th>
              <th className='hidden sm:table-cell'>Latitude</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => {
              const distance = calculateDistance(
                lecturerLatitude,
                lecturerLongitude,
                student.latitude,
                student.longitude
              );
              const status = distance && distance >= 10 ? 'Absent' : 'Present';
              return (
                <tr key={student.id}>
                  <td></td>
                  <td>{index + 1}</td>
                  <td className='text-left'>{student.email}</td>
                  <td>{status}</td>
                  <td className='hidden md:table-cell'>{student.longitude}</td>
                  <td className='hidden sm:table-cell'>{student.latitude}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Account;