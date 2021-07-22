import tw from 'twin.macro';
import styled from 'styled-components';

const Wrapper = tw.div`flex flex-col items-center mr-6 text-gray-500 cursor-pointer hover:text-gray-900`;

export default function HeaderOption({ Icon, title }) {
  const OptionIcon = styled(Icon.type)`
    ${tw`w-6 h-6`}
  `;
  return (
    <Wrapper>
      {Icon && <OptionIcon />}
      <h3>{title}</h3>
    </Wrapper>
  );
}
