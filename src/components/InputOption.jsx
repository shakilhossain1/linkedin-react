import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = tw.div`flex items-center mt-4 p-2 text-gray-500 rounded-xl transition duration-100 cursor-pointer space-x-2 bg-white hover:bg-[whitesmoke]`;

export default function InputOption({ title, Icon, color }) {
  const OptionIcon = styled(Icon || 'span')`
    color: ${props => props.color};
    ${tw`w-6 h-6`}
  `;

  return (
    <Wrapper>
      <OptionIcon color={color} />
      <h4>{title}</h4>
    </Wrapper>
  );
}
