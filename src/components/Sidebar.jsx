import { Avatar } from '@material-ui/core';
import tw from 'twin.macro';

const Wrapper = tw.div`lg:sticky top-20 flex-grow-[0.2] rounded-lg text-center`;
const SidebarTop = tw.div`flex flex-col items-center border border-gray-300 border-b-0 rounded-tl-lg rounded-tr-lg bg-white pb-3 overflow-hidden`;
const SidebartopBackground = tw.LogoImg`-mb-4 w-full h-20 object-cover`;
const StatParagraph = tw.p`text-gray-500 text-sm font-semibold`;
const StatNumber = tw(StatParagraph)`font-bold text-blue-500`;
const Stat = tw.div`mt-3 flex justify-between`;
const SidebarBottom = tw.div`text-left p-3 border border-gray-300 rounded-xl mt-3 bg-white`;

const RecentItem = tw.a`flex text-sm text-gray-600 font-extrabold mb-1 p-1 hover:bg-[whitesmoke] hover:rounded-xl hover:text-black`;

export default function Sidebar() {
  const recentItem = topic => (
    <RecentItem href="#">
      <span className="mr-2 ml-1">#</span>
      <p>{topic}</p>
    </RecentItem>
  );

  return (
    <Wrapper>
      <SidebarTop>
        <SidebartopBackground src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
        <Avatar
          className="mb-3"
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
        />
        <h2 className="text-lg font-bold">User name</h2>
        <h4 className="text-gray-500 text-sm">example@example.com</h4>
      </SidebarTop>
      {/* sidebar stats */}
      <div className="p-3 mb-3 border border-gray-300 bg-white rounded-bl-lg rounded-br-lg">
        <Stat>
          <StatParagraph>Who viewd you</StatParagraph>
          <StatNumber>2.5</StatNumber>
        </Stat>
        <Stat>
          <StatParagraph>Who viewd you</StatParagraph>
          <StatNumber>2.5</StatNumber>
        </Stat>
      </div>

      <SidebarBottom>
        <p className="text-sm pb-3 font-bold">Recent</p>
        {recentItem('reactjs')}
        {recentItem('programing')}
        {recentItem('php')}
        {recentItem('laravel')}
      </SidebarBottom>
    </Wrapper>
  );
}
