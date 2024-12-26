import React from "react";

// // Reusable Container Component
// function Container({ children, className }) {
//   return <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
// }

// // Reusable Section Header Component
// function SectionHeader({ title, subtitle }) {
//   return (
//     <div className="text-center mb-8">
//       <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{title}</h2>
//       {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
//     </div>
//   );
// }

// Main Map Component
export default function Map() {
  return (
    <div className="bg-gray-100 lg:w-[900px] lg:h-[835px] ">
      {/* <Container> */}
    
        <div className="lg:w-full h-64 lg:h-[450px] overflow-hidden ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143760.37906979138!2d90.33728812288355!3d23.780975728197344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1734942927850!5m2!1sen!2sbd"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      {/* </Container> */}
    </div>
  );
}
