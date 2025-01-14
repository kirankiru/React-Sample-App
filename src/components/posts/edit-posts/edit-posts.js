import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes here
import './editpost.scss';
import {
  EDIT_TITLE,
  SAVE_CHANGES,
  CLOSE,
} from '../../../utils/constants';

const EditPosts = ({
  show,
  onClose,
  data,
  onSave,
}) => {
  const [editedTitle, setEditedTitle] = useState(data.title || '');
  const [editedBody, setEditedBody] = useState(data.body || '');

  const handleSave = () => {
    onSave({
      title: editedTitle,
      body: editedBody,
      id: data.id,
    });
    onClose();
  };

  return (
    <div
      className={`modal fade ${show ? 'show' : ''}`}
      style={{ display: show ? 'block' : 'none' }}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="editModalLabel"
      aria-hidden={!show}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editModalLabel">
              Edit Post
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              {/* eslint-disable jsx-a11y/label-has-associated-control  */}
              <label htmlFor="title">{EDIT_TITLE}</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea
                className="form-control"
                id="body"
                value={editedBody}
                onChange={(e) => setEditedBody(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              {CLOSE}
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              {SAVE_CHANGES}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
EditPosts.propTypes = {
  show: PropTypes.bool.isRequired, // Ensure 'show' is a boolean and required
  onClose: PropTypes.func.isRequired, // Ensure 'onClose' is a function and required
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired, // Ensure 'data' has 'title' and 'body' as strings and is required
  onSave: PropTypes.func.isRequired, // Ensure 'onSave' is a function and required
};

export default EditPosts;
