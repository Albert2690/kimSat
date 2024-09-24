import React, { useEffect } from 'react'
import DoctorsList from '../Components/DoctorComponents/DoctorsList'
import DoctorPageImage from  '../../src/assets/images/doctor-nurses-special-equipment.jpg'
// "C:\Users\user\OneDrive\Desktop\kimSat\frontend\src\assets\images\Rectangle 1.jpg"
import Login from '../Components/Login'

function DoctorsPage() {
  useEffect(() => {
    // Check if notifications are supported in the browser
    if ("Notification" in window) {
      // If permission is already granted, send the notification
      if (Notification.permission === "granted") {
        console.log('granteedd')
        const notification = new Notification("Hello!", {
          body: "This is a notification from our website.",
          icon: "/path/to/icon.png", // Replace with the actual icon path
        });

        // You can add click event listeners for user interactions
        notification.onclick = function () {
          window.open("https://youtube.com"); // Example: open your website on click
        };
      } else if (Notification.permission !== "denied") {
        // If permission is not denied, ask the user for permission
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            // Permission was granted
            const notification = new Notification("Welcome!", {
              body: "Thank you for enabling notifications!",
              icon: "/path/to/icon.png", // Replace with the actual icon path
            });

            notification.onclick = function () {
              window.open("https://youtube.com");
            };
          }
        });
      }
    }
  }, []);
  return (
    <>
      <section className='mt-0 sm:mt-[-40px]'>
      <div className="flex justify-center">
        <img src={DoctorPageImage} alt="" className='sm:w-screen sm:h-screen ' />
      </div>
    </section>
    <DoctorsList/>
    
    </>
  )
}

export default DoctorsPage