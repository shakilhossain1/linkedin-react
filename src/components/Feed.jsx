import tw from 'twin.macro';
import { PencilIcon, PhotographIcon } from '@heroicons/react/solid';
import InputOption from './InputOption';
import { MdSubscriptions, MdEventNote } from 'react-icons/md';
import { HiViewGridAdd } from 'react-icons/hi';
import Post from './Post';

const FeedContainer = tw.div`flex-grow-[0.6] mx-5`;
const InputContainer = tw.div`bg-white p-3 pb-5 rounded-xl mb-5 w-full`;
const FeedInput = tw.div`border w-full focus-within:border-gray-400 border-gray-300 rounded-3xl flex p-3 text-gray-500 pl-4`;
const ActualInput = tw.input`flex-1 ml-3 font-semibold focus:outline-none`;
const InputForm = tw.form`flex w-full`;
const InputOptions = tw.div`flex items-center justify-evenly`;

export default function Feed() {
  return (
    <FeedContainer>
      <InputContainer>
        <FeedInput>
          <span>
            <PencilIcon className="w-6 " />
          </span>
          <InputForm>
            <ActualInput placeholder="Type something.." type="text" />
          </InputForm>
        </FeedInput>
        <InputOptions>
          <InputOption color="lightblue" title="Photo" Icon={PhotographIcon} />
          <InputOption color="#E7A33E" title="Video" Icon={MdSubscriptions} />
          <InputOption color="#E7A33E" title="Event" Icon={MdEventNote} />
          <InputOption
            color="#E7A33E"
            title="Write Article"
            Icon={HiViewGridAdd}
          />
        </InputOptions>
      </InputContainer>
      {/* Posts */}
      <Post
        description="this is test description"
        name="Example name"
        message="this is message"
      />
    </FeedContainer>
  );
}
