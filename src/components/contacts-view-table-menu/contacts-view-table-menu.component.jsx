import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const ContactsViewTableMenu = ({ value, onSearch }) => {
  return (
    <div className="alert alert-light" role="alert">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="search-icon">
            <FontAwesomeIcon icon={faSearch} style={{ color: 'grey' }} />
          </span>
        </div>
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-icon"
          value={value}
          onChange={e => onSearch(e.currentTarget.value)}
        />
      </div>
    </div>
  );
};

export default ContactsViewTableMenu;
