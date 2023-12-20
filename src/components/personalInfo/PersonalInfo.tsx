import PhoneIcon from 'components/icons/PhoneIcon';
import Location from 'components/icons/Location';
import Github from 'components/icons/Github';

interface PersonalInfoProps {
  size: string;
  color: string;
}

const PersonalInfo = ({ size, color }: PersonalInfoProps) => {
  return (
    <ul>
      <li>
        <PhoneIcon size={size} color={color} />
      </li>
      <li>
        <Location size={size} color={color} />
      </li>
      <li>
        <Github size={size} color={color} />
      </li>
    </ul>
  );
};
export default PersonalInfo;
