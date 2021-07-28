import Header from './components/Header';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import tw from 'twin.macro';

const AppBody = tw.main`flex w-full max-w-7xl mx-auto`;

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen w-full flex flex-col items-center">
      <Header />
      <AppBody>
        <Sidebar />
        <Feed />
      </AppBody>
    </div>
  );
}
