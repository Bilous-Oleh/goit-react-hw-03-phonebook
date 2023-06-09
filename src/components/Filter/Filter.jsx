import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';
export {};

export function Filter({ filter, onChange }) {
  return (
    <Label className="filter">
      Find contacts by name
      <Input type="text" value={filter} onChange={onChange} />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
