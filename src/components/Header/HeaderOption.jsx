import tw from 'twin.macro';
import { Avatar } from '@material-ui/core';

const Wrapper = tw.div`flex flex-col items-center mr-6 text-gray-500 cursor-pointer hover:text-gray-900`;
const OptionAvatar = tw(Avatar)`!h-7 !w-7 object-cover`;

export default function HeaderOption({ Icon, title, avatar }) {
  const OptionIcon = tw(Icon || 'span')`w-6 h-6`;

  return (
    <Wrapper>
      {Icon && <OptionIcon />}
      {avatar && <OptionAvatar src={avatar} />}
      <h3>{title}</h3>
    </Wrapper>
  );
}
