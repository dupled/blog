import * as React from 'react';
import _map from 'lodash/map';

interface IOwnProps {
  value: string;
  options: string[];
  onChange: (val: string) => void;
  placeholder: string;
}

const Select: React.FC<IOwnProps> = ({
  value,
  onChange,
  options,
  placeholder,
}) => {
  return (
    <select
      className="custom-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{placeholder}</option>
      {_map(options, (sortByItem: string, idx: number) => (
        <option key={idx} value={sortByItem}>
          {sortByItem}
        </option>
      ))}
    </select>
  );
};

export default Select;
