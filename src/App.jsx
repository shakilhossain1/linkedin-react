import Header from './components/Header';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import tw from 'twin.macro';

const AppBody = tw.main`lg:flex w-full max-w-7xl mx-auto`;
const AppBase = tw.div`bg-gray-100 min-h-screen w-full flex flex-col items-center px-4`;

export default function App() {
  return (
    <AppBase>
      <Header />
      <AppBody>
        <Sidebar />
        <Feed />
      </AppBody>
    </AppBase>
  );
}
