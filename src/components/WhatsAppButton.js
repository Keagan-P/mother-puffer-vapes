import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // Replace with your friend's WhatsApp number (include country code, no +, no spaces)
  const whatsappNumber = '27823114868';
  

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366', // WhatsApp Green
        color: 'white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        cursor: 'pointer',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
        zIndex: 1000, // Ensure it stays on top
      }}
      onClick={handleWhatsAppClick}
    >
      <FaWhatsapp />
    </div>
  );
};

export default WhatsAppButton;