import React from 'react';
import './Toolbar.css';
import SerialsForm from "../../../container/SerialsForm/SerialsForm";

const Toolbar = () => {
  return (
    <header className="Toolbar">
      <div className="Toolbar-logo">
      </div>
        <div className='Form'>
            <SerialsForm/>
        </div>
    </header>
  );
};

export default Toolbar;