import tw from 'twin.macro';
import { Avatar } from '@material-ui/core';
import InputOption from './InputOption';
import { FiThumbsUp } from 'react-icons/fi';
import { BsChat } from 'react-icons/bs';
import { BiShare } from 'react-icons/bi';
import { MdSend } from 'react-icons/md';

const Wrapper = tw.div`bg-white p-4 mb-3 rounded-xl`;

export default function Post({ name, description, message, photoUrl }) {
  return (
    <Wrapper>
      {/* post Header */}
      <div className="flex mb-3 space-x-3">
        <Avatar />
        {/* post Info */}
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      {/* post Body */}
      <div>
        <p className="text-sm text-gray-500">{message}</p>
      </div>
      {/* post buttons */}
      <div className="flex space-x-4 items-center">
        <InputOption Icon={FiThumbsUp} title="Like" color="gray" />
        <InputOption Icon={BsChat} title="Comment" color="gray" />
        <InputOption Icon={BiShare} title="Share" color="gray" />
        <InputOption Icon={MdSend} title="Send" color="gray" />
      </div>
    </Wrapper>
  );
}
