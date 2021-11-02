import * as React from 'react';

interface IOwnProps {
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
}

const Input: React.FC<IOwnProps> = ({ onChange, value, disabled = false }) => (
  <input
    type="text"
    className="form-control"
    onChange={(e) => onChange(e.target.value)}
    value={value}
    disabled={disabled}
  />
);

export default Input;
