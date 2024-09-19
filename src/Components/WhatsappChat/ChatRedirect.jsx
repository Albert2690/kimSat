import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function ChatRedirect() {

    const phoneNumber = "+917559012690"; 
    
    const handleClick = () => {
      const message = `Hello, I would like to Know more about the kimsat hospital. Could you please provide more detials?`;
      
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');
    }
  return (

    
   
     
    
        <button 
          onClick={handleClick} 
          className="fixed bottom-8 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <FontAwesomeIcon  icon={faWhatsapp} size="2x" />
        </button>
    
    
  
    
  )
}

export default ChatRedirect