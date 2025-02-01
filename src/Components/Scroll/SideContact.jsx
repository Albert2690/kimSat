import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function BottomContactBar() {
  const phoneDetails = [
    { id: 1, text: "Customer Support", number: "735 679 2035" },
    { id: 2, text: "Emergency Services", number: "735 679 2035" },
    { id: 3, text: "General Inquiries", number: "735 679 2035" },
  ];

  const [highlightIndex, setHighlightIndex] = useState(0);

  // Animation for cycling through highlighted numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prevIndex) => (prevIndex + 1) % phoneDetails.length);
    }, 2000); // Highlight one contact every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 w-full bg-secondaryColor text-white py-2 shadow-lg z-50">
      <div className="flex justify-around items-center">
        {phoneDetails.map((detail, index) => (
          <motion.div
            key={detail.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            className={`text-center  px-4 border-l ${
              index === highlightIndex ? "text-white font-bold" : "text-gray-200"
            }`}
          >
            <p className="text-xs font-semibold sm:text-sm">{detail.text}</p>
            <p className="text-xs sm:text-lg">{detail.number}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default BottomContactBar;


// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { 
//   Phone, 
//   Shield, 
//   HelpCircle, 
//   MapPin 
// } from "lucide-react";

// function BottomContactBar() {
//   const phoneDetails = [
//     { 
//       id: 1, 
//       text: "Customer Support", 
//       number: "735 679 2035", 
//       icon: Phone,
//       gradient: "from-purple-600 to-purple-800"
//     },
//     { 
//       id: 2, 
//       text: "Emergency Services", 
//       number: "735 679 2035", 
//       icon: Shield,
//       gradient: "from-red-600 to-red-800"
//     },
//     { 
//       id: 3, 
//       text: "General Inquiries", 
//       number: "735 679 2035", 
//       icon: HelpCircle,
//       gradient: "from-blue-600 to-blue-800"
//     }
//   ];

//   const [highlightIndex, setHighlightIndex] = useState(0);

//   // Animation for cycling through highlighted numbers
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setHighlightIndex((prevIndex) => (prevIndex + 1) % phoneDetails.length);
//     }, 3000); // Highlight one contact every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed bottom-0 w-full z-50">
//       <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-4 shadow-2xl">
//         <div className="max-w-6xl mx-auto flex justify-around items-center space-x-4 px-4">
//           {phoneDetails.map((detail, index) => {
//             const IconComponent = detail.icon;
//             return (
//               <motion.div
//                 key={detail.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ 
//                   opacity: index === highlightIndex ? 1 : 0.7, 
//                   y: index === highlightIndex ? 0 : 10,
//                   scale: index === highlightIndex ? 1.05 : 1
//                 }}
//                 transition={{ duration: 0.3 }}
//                 whileHover={{ scale: 1.1 }}
//                 className={`
//                   flex items-center gap-3 p-3 rounded-xl 
//                   transition-all duration-300 
//                   ${index === highlightIndex 
//                     ? `bg-gradient-to-br ${detail.gradient} shadow-lg` 
//                     : 'bg-transparent'}
//                   hover:bg-gradient-to-br ${detail.gradient} 
//                   hover:shadow-lg
//                 `}
//               >
//                 <div className="hidden md:block">
//                   <IconComponent 
//                     className={`w-8 h-8 ${
//                       index === highlightIndex 
//                         ? 'text-white' 
//                         : 'text-purple-300'
//                     }`} 
//                   />
//                 </div>
//                 <div className="text-center">
//                   <p className="text-xs sm:text-sm font-medium opacity-80">
//                     {detail.text}
//                   </p>
//                   <p className="text-sm sm:text-lg font-bold">
//                     {detail.number}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BottomContactBar;