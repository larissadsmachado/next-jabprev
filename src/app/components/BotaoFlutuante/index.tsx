'use client';
// components/FloatingButtons.tsx
import React from 'react';
import { FaWhatsapp, FaRegClipboard } from 'react-icons/fa'; // Pacote de ícones

const FloatingButtons: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Substitua pelo link do seu WhatsApp
    window.open('https://wa.me/5581991782389', '_blank');
  };

  const handleFormClick = () => {
    // Substitua pela URL do formulário
    window.location.href = '../Formulario/#formulario';
  };

  return (
    <div style={styles.container}>
      {/* Botão do WhatsApp */}
      <div
        onClick={handleWhatsAppClick}
        style={{ ...styles.button, backgroundColor: '#25D366' }}
        className="hover:bg-green-500"
      >
        <FaWhatsapp size={30} color="#fff" />
      </div>

      {/* Botão para o Formulário */}
      <div
        onClick={handleFormClick}
        style={styles.button}
        className="hover:bg-blue-500"
      >
        <FaRegClipboard size={30} color="#fff" />
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed' as 'fixed',
    bottom: '40px',
    right: '40px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '15px', // Espaçamento entre os botões
    zIndex: 9999, // Garante que fique à frente
  },
  button: {
    width: '50px',
    height: '50px',
    backgroundColor: '#007bff',
    borderRadius: '50%',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  },
};

export default FloatingButtons;
