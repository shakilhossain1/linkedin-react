import { Avatar } from '@material-ui/core';
import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper =styled.div`
  flex: 0.2;
  ${tw`sticky top-20 bg-gray-200`}
`;

export default function Sidebar() {
  return (
    <Wrapper>
      {/* top */}
      <div>
        <img src="" alt="background" />
        <Avatar src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg" />
        <h2>User name</h2>
        <h2>example@example.com</h2>
      </div>
      {/* sidebar stats */}
      <div>
        <div>
          <p>Who viewd you</p>
          <p>2.5</p>
        </div>
        <div>
          <p>Who viewd you</p>
          <p>2.5</p>
        </div>
      </div>

      {/* sidebar bottom */}
      <div>
        <p>Recent</p>

      </div>
    </Wrapper>
  );
}
