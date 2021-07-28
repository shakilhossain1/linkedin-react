import Header from './components/Header';
import Sidebar from './components/Sidebar';
import tw from 'twin.macro';

const AppBody = tw.main`flex`;

export default function App() {
  return (
    <div>
      <Header />
      <AppBody>
        <Sidebar />
      </AppBody>
    </div>
  );
}
