import tw from 'twin.macro';
import HeaderOption from './HeaderOption';
import { SearchIcon } from '@heroicons/react/outline';
import { HomeIcon, UserGroupIcon } from '@heroicons/react/solid';

const MainHeader = tw.header`sticky bg-gray-100 top-0 py-2 z-40 flex justify-evenly w-full`;
const HeaderLeft = tw.div`flex items-center`;
const LogoImage = tw.img`object-contain h-[40px] mr-3`;
const Search = tw.div`p-3 flex items-center h-9 rounded-md text-gray-500 bg-gray-200`;
const SearchInput = tw.input`focus:outline-none bg-transparent pl-2`;

export default function Header() {
  return (
    <MainHeader>
      <HeaderLeft>
        <LogoImage
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt="in"
        />
        <Search>
          <SearchIcon className="w-6" />
          <SearchInput type="text" />
        </Search>
      </HeaderLeft>
      <div className="flex items-center justify-evenly">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={UserGroupIcon} title="My Network" />
        <HeaderOption
          avatar="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
          title="User"
        />
      </div>
    </MainHeader>
  );
}
