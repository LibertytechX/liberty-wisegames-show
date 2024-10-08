import * as React from 'react';

interface SidebarWalletProps {
  isLinkSelected?: boolean;
}

export const SidebarWallet: React.FunctionComponent<SidebarWalletProps> = ({ isLinkSelected }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path
        fill="#fff"
        d="M22 10.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6H21c.56.02 1 .47 1 1.02z"
        opacity={isLinkSelected ? '1' : '0.6'}
      ></path>
      <path
        fill={isLinkSelected ? '#4C1961' : '#fff'}
        d="M17.48 10.55c-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87H21v1.45c0 3-2 5-5 5H7c-3 0-5-2-5-5v-7c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h9c.26 0 .51.01.75.05C19.33 3.85 21 5.76 21 8.5v1.45h-2.08c-.56 0-1.07.22-1.44.6z"
        opacity={isLinkSelected ? '1' : '0.3'}
      ></path>
      <path
        fill="#fff"
        d="M13 9.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"
        opacity={isLinkSelected ? '1' : '0.6'}
      ></path>
    </svg>
  );
};
