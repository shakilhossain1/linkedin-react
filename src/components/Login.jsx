import { useState } from 'react';
import tw from 'twin.macro';

const Wrapper = tw.div`grid place-items-center mx-auto py-24`;
const LogoImg = tw.img`object-contain h-20 my-6`;
const Form = tw.form`flex flex-col space-y-2`;
const Input = tw.input`py-2 px-4 border border-gray-500 focus:outline-none w-full rounded`;

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = event => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <LogoImg className="" src="/logo.svg" alt="Linkedin" />
      <Form onSubmit={handleLogin}>
        <Input
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder="Enter your full Name (required if registered)"
        />
        <Input type="text" onChange={e => setPhotoUrl(e.target.value)} placeholder="photo url (optional)" />
        <Input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email Address" />
        <Input type="password" onChange={e => setPassword(e.target.value)} placeholder="Passowrd" />
        <button type="submit">Sign</button>
      </Form>
      <p>
        Not a member? <span className="">Register Now</span>{' '}
      </p>
    </Wrapper>
  );
}
