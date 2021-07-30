import Header from './components/Header';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import tw from 'twin.macro';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const AppBody = tw.main`lg:flex w-full max-w-7xl mx-auto`;
const AppBase = tw.div`bg-gray-100 min-h-screen w-full flex flex-col items-center px-4`;

export default function App() {
  const user = useSelector(selectUser);

  return (
    <AppBase>
      <Header />
      {user ? (
        <AppBody>
          <Sidebar />
          <Feed />
        </AppBody>
      ) : (
        <Login />
      )}
    </AppBase>
  );
}
