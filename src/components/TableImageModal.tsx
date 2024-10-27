import React from 'react';

interface ImageModalProps {
  show: boolean;
  imageUrl: string;
  recipeTitle: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ show, imageUrl, recipeTitle, onClose }) => {
  return (
    <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex={-1} role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header justify-content-between">
            <h5 className="modal-title">{recipeTitle}</h5>
            <button type="button" className="btn btn-danger btn-sm" aria-label="Close" onClick={onClose}>
            <i className="bi bi-x"></i>
            </button>
          </div>
          <div className="modal-body">
            <img src={imageUrl} alt="Recipe" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;