import React, { useEffect, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';


//TODO: Check on z index to separate the toast notification from the scroll back to top button. (OPTIONAL)
/**
 * ToastNotification component properties
 * @interface ToastNotificationProps
 * @property {boolean} show - Show or hide the toast notification
 * @property {string} message - The message to display in the toast notification
 * @property {'success' | 'danger' | 'warning' | 'info'} variant - The variant of the toast notification
 * @property {() => void} onClose - The function to call when the toast notification is closed
 */
interface ToastNotificationProps {
  show: boolean;
  message: string;
  variant: 'success' | 'danger' | 'warning' | 'info';
  onClose: () => void;
}

/**
 * ToastNotification component
 * @param {ToastNotificationProps} props - The component properties
 * @returns {JSX.Element} The rendered ToastNotification component
 */
const ToastNotification: React.FC<ToastNotificationProps> = ({ show, message, variant, onClose }) => {
  const [showToast, setShowToast] = useState(show);

  useEffect(() => {
    setShowToast(show);
  }, [show]);

  const textColorClass = variant === 'warning' ? 'text-dark' : 'text-white';

  return (
    <ToastContainer className="p-3">
      <Toast show={showToast} onClose={onClose} delay={3000} autohide className={`bg-${variant} ${textColorClass}`}>
        <Toast.Header>
          <strong className="me-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastNotification;

// position-fixed bottom-0 end-0 