import { LeftChatBar, MainChatPage, RightChatBar } from '@/features/ask_ai_by_glo/component';
import { useRouter } from 'next/router';
import React from 'react';

interface ChatProps {
  children: React.ReactNode;
}
const Chat: React.FunctionComponent<ChatProps> = ({ children }) => {
  const mainRef = React.useRef<HTMLDivElement>(null);
  const headerRef = React.useRef<HTMLDivElement>(null);

  const executeScroll = () => {
    if (headerRef.current && mainRef.current) {
      headerRef.current.scrollIntoView();
      mainRef.current.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const router = useRouter();
  React.useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });

      if (mainRef.current)
        mainRef.current.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
    });

    executeScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {' '}
      <div className="overflow-auto bg-main-gray-bg-darkish text-white md:flex md:w-full">
        <LeftChatBar />

        <div
          ref={mainRef}
          className="w-full bg-[#111] md:h-screen md:min-h-full md:overflow-auto md:px-0"
        >
          <div ref={headerRef}>{/* <DashboardHeader /> */}</div>

          <main className="mb-10 h-[100vh] flex-grow ">
            <MainChatPage />
            {children}

            {/* <MediaQuery maxWidth={768}>
              <MobileMenuBar />
            </MediaQuery> */}
          </main>
        </div>

        <RightChatBar />
      </div>
    </div>
  );
};

export default Chat;
