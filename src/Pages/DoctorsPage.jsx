import React, { useEffect } from 'react';
import DoctorsList from '../Components/DoctorComponents/DoctorsList';
import DoctorBanner from '../assets/images/doctorsbanner.jpg';
import DoctorMobileBanner from '../assets/images/phonesizedoctorsbanner.jpg';

function DoctorsPage() {
  useEffect(() => {
    window.scroll(0, {
      behavior: 'smooth'
    });

    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        const notification = new Notification("Hello!", {
          body: "This is a notification from our website.",
          icon: "/path/to/icon.png",
        });

        notification.onclick = function () {
          window.open("https://youtube.com");
        };
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            const notification = new Notification("Welcome!", {
              body: "Thank you for enabling notifications!",
              icon: "/path/to/icon.png",
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
      <section className='mt-0'>
        <div className="flex justify-center">
          <picture>
            <source media="(min-width: 640px)" srcSet={DoctorBanner} />
            <img src={DoctorMobileBanner} alt="Doctor banner" className="w-full object-cover" />
          </picture>
        </div>
      </section>
      <DoctorsList />
    </>
  );
}

export default DoctorsPage;
