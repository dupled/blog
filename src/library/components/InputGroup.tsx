import * as React from 'react';

interface IOwnProps {
  label: string;
}

const InputGroup: React.FC<IOwnProps> = ({ label, children }) => (
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <label className="input-group-text">{label}</label>
    </div>
    {children}
  </div>
);

export default InputGroup;
