import { useEffect, useState } from 'react';
import tw from 'twin.macro';
import { PencilIcon, PhotographIcon } from '@heroicons/react/solid';
import InputOption from './InputOption';
import { MdSubscriptions, MdEventNote } from 'react-icons/md';
import { HiViewGridAdd } from 'react-icons/hi';
import Post from './Post';
import { db } from '../firebase';
import firebase from 'firebase';

const FeedContainer = tw.div`flex-grow-[0.6] mx-5`;
const InputContainer = tw.div`bg-white p-3 pb-5 rounded-xl mb-5 w-full`;
const FeedInput = tw.div`border w-full focus-within:border-gray-400 border-gray-300 rounded-3xl flex p-3 text-gray-500 pl-4`;
const ActualInput = tw.input`flex-1 ml-3 font-semibold focus:outline-none`;
const InputForm = tw.form`flex w-full`;
const InputOptions = tw.div`flex items-center justify-evenly`;

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setPosts(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = e => {
    e.preventDefault();

    db.collection('posts').add({
      name: 'Shakil Hossain',
      description: 'this is test description',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <FeedContainer>
      <InputContainer>
        <FeedInput>
          <span>
            <PencilIcon className="w-6 " />
          </span>
          <InputForm onSubmit={sendPost}>
            <ActualInput
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type something.."
              type="text"
            />
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          description={description}
          name={name}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </FeedContainer>
  );
}
