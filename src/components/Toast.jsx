import React, { useEffect } from "react";
import { ToastContainer, Toast as BootstrapToast } from "react-bootstrap";

const Toast = ({ show, onClose, title, message, variant = "success" }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto-hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <ToastContainer position="bottom-end" className="p-3">
      <BootstrapToast
        show={show}
        onClose={onClose}
        bg={variant}
        className="text-white"
      >
        <BootstrapToast.Header closeButton>
          <strong className="me-auto">{title}</strong>
        </BootstrapToast.Header>
        <BootstrapToast.Body>{message}</BootstrapToast.Body>
      </BootstrapToast>
    </ToastContainer>
  );
};

export default Toast;
