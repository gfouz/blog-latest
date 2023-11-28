import PhoneIcon from 'components/icons/PhoneIcon';
import Location from 'components/icons/Location';

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
    </ul>
  );
};
export default PersonalInfo;
