import React, { useEffect } from 'react';

const Spinner: React.FC = () => {
  useEffect(() => {
    const styleId = 'react-thai-popover-spin-styles-xyz123abc';

    if (!document.querySelector(`#${styleId}`)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        @keyframes react-thai-popover-spin-xyz123abc {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div
      style={{
        border: '4px solid rgba(0, 0, 0, 0.1)',
        borderTop: '4px solid #3498db',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        animation: 'react-thai-popover-spin-xyz123abc 1s linear infinite',
        margin: '0 auto',
      }}
    />
  );
};

export default Spinner;
