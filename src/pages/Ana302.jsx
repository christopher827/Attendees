import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot ,doc,updateDoc} from 'firebase/firestore';
import { db } from '../firebase';

function Ana302() {
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
console.error('Error getting lecturer location:', error);
}
);
} else {
console.error('Geolocation is not supported by this browser.');
}
};

const calculateDistance = (lat1, lon1, lat2, lon2) => {
if (lat1 && lon1 && lat2 && lon2) {
const R = 6371; // Radius of the Earth in kilometers
const dLat = toRadians(lat2 - lat1);
const dLon = toRadians(lon2 - lon1);
const a=Math.sin(dLat / 2) * Math.sin(dLat / 2)+Math.cos(toRadians(lat1))*Math.cos(toRadians(lat2))*Math.sin(dLon / 2)*Math.sin(dLon / 2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
const distance = R * c;
return distance;
} else {
      return null;
}
};

const toRadians = (angle) => {
return (angle * Math.PI) / 180;
  };
  

const fetchStudents = () => {
const studentsRef = collection(db, 'ana302');
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

  function handleDeletion() {
    if (window.confirm('Are you sure you want to delete the attendance?')) {
      students.forEach((student) => {

        const attendanceRef = doc(db, 'attendance', student.id);
        const fieldsToDelete = { email: '', longitude: '', latitude: '' };
        
        updateDoc(attendanceRef, fieldsToDelete)
          .then(() => {
            console.log('Attendance fields deleted successfully');
          })
          .catch((error) => {
            console.error('Error deleting attendance fields:', error);
          });
      });
  
      // Clear the students array to update the screen
      setStudents([]);
    }
  }

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

      <div className='text-center'>
      <button  className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl ' onClick={handleDeletion}>Delete Attendance</button>
</div>

    </div>
  );
}
export default Ana302;
