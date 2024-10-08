import * as React from 'react';
import Link from 'next/link';

import { LinkButton } from '@/components/elements';

interface WebsiteHeaderProps {
  sample?: string;
}

export const WebsiteHeaderUser: React.FunctionComponent<WebsiteHeaderProps> = () => {
  return (
    <header className="flex items-center justify-between gap-10 px-4 md:px-8 lg:px-20 ">
      <Link href="/">
        <a className="inline overflow-visible">
          <svg
            width="189"
            height="22"
            viewBox="0 0 189 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.272 17L12.192 10.112L13.32 5.072H13.632L14.688 10.112L16.368 17H23.064L26.736 0.92H21.792L20.28 9.104L19.8 12.728H19.488L18.912 9.104L16.944 0.92H10.152L7.992 9.104L7.344 12.728H7.032L6.6 9.104L5.256 0.92H0.216L3.576 17H10.272ZM32.9051 17V10.76C32.9051 9.2 33.4091 8.696 35.4971 8.696C37.5611 8.696 38.2091 9.224 38.2091 10.904V17H42.7211V9.392C42.7211 6.704 41.1851 4.664 37.9691 4.664C34.8731 4.664 33.5291 6.536 33.1451 8.576H32.9051V0.92H28.3931V17H32.9051ZM49.3048 3.8V0.92H44.7928V3.8H49.3048ZM49.3048 17V4.904H44.7928V17H49.3048ZM57.9699 17.24C61.9779 17.24 64.2339 15.608 64.2339 13.352C64.2339 11.312 63.1059 10.136 59.5779 9.752L57.1779 9.488C55.7619 9.344 55.5699 9.176 55.5699 8.84C55.5699 8.384 55.7619 8.192 57.2259 8.192C59.0499 8.192 59.2899 8.48 59.2899 9.104V9.248H63.8019V9.152C63.8019 6.176 61.5699 4.664 57.3699 4.664C52.8339 4.664 51.1299 6.512 51.1299 8.648C51.1299 10.688 52.4739 11.864 54.9699 12.128L58.4739 12.512C59.6019 12.632 59.7939 12.728 59.7939 13.112C59.7939 13.52 59.5539 13.688 57.9939 13.688C56.3619 13.688 55.9299 13.616 55.9299 12.944V12.704H51.4179V12.8C51.4179 15.584 53.6979 17.24 57.9699 17.24ZM70.5495 21.08V13.88H70.7895C71.1495 15.896 72.4935 17.24 75.3495 17.24C78.9015 17.24 80.8935 14.888 80.8935 10.952C80.8935 7.04 78.8535 4.664 75.1575 4.664C72.3255 4.664 70.8855 5.768 70.5015 8.168H70.2615V4.904H66.0375V21.08H70.5495ZM70.5495 11.096V10.928C70.5495 9.176 71.5095 8.792 73.5255 8.792C75.6135 8.792 76.3335 9.344 76.3335 10.952C76.3335 12.56 75.6135 13.136 73.5255 13.136C71.5095 13.136 70.5495 12.8 70.5495 11.096ZM89.5562 17.24C93.6362 17.24 96.2042 15.344 96.2042 12.656V12.368H91.6922V12.632C91.6922 13.352 91.2122 13.664 89.3882 13.664C87.4682 13.664 86.8202 13.256 86.7482 11.792H96.2282C96.2762 11.36 96.3002 11.048 96.3002 10.64C96.3002 6.752 93.6362 4.664 89.4602 4.664C85.4282 4.664 82.5722 7.016 82.5722 10.952C82.5722 15.488 85.4522 17.24 89.5562 17.24ZM89.3642 8.12C91.0442 8.12 91.7642 8.48 91.9322 9.512H86.8202C87.0122 8.48 87.7082 8.12 89.3642 8.12ZM102.739 17V9.776C102.739 8.816 103.099 8.456 104.323 8.456C105.499 8.456 105.883 8.816 105.883 9.824V11.24H110.395V8.84C110.395 6.416 109.34 4.664 106.676 4.664C104.275 4.664 103.027 6.08 102.691 8.072H102.452V4.904H98.2275V17H102.739ZM125.696 17L127.616 10.112L128.744 5.072H129.056L130.112 10.112L131.792 17H138.488L142.16 0.92H137.216L135.704 9.104L135.224 12.728H134.912L134.336 9.104L132.368 0.92H125.576L123.416 9.104L122.768 12.728H122.456L122.024 9.104L120.68 0.92H115.64L119 17H125.696ZM146.481 21.08C150.009 21.08 151.857 20.336 153.153 17.48L158.889 4.904H153.849L152.049 9.608L151.257 12.44H150.945L150.081 9.656L147.993 4.904H142.857L148.641 16.856C148.449 16.952 148.161 17 147.801 17H144.297V21.08H146.481ZM166.604 17.24C170.612 17.24 172.868 15.608 172.868 13.352C172.868 11.312 171.74 10.136 168.212 9.752L165.812 9.488C164.396 9.344 164.204 9.176 164.204 8.84C164.204 8.384 164.396 8.192 165.86 8.192C167.684 8.192 167.924 8.48 167.924 9.104V9.248H172.436V9.152C172.436 6.176 170.204 4.664 166.004 4.664C161.468 4.664 159.764 6.512 159.764 8.648C159.764 10.688 161.108 11.864 163.604 12.128L167.108 12.512C168.236 12.632 168.428 12.728 168.428 13.112C168.428 13.52 168.188 13.688 166.628 13.688C164.996 13.688 164.564 13.616 164.564 12.944V12.704H160.052V12.8C160.052 15.584 162.332 17.24 166.604 17.24ZM181.415 17.24C185.495 17.24 188.063 15.344 188.063 12.656V12.368H183.551V12.632C183.551 13.352 183.071 13.664 181.247 13.664C179.327 13.664 178.679 13.256 178.607 11.792H188.087C188.135 11.36 188.159 11.048 188.159 10.64C188.159 6.752 185.495 4.664 181.319 4.664C177.287 4.664 174.431 7.016 174.431 10.952C174.431 15.488 177.311 17.24 181.415 17.24ZM181.223 8.12C182.903 8.12 183.623 8.48 183.791 9.512H178.679C178.871 8.48 179.567 8.12 181.223 8.12Z"
              fill="white"
            />
          </svg>
        </a>
      </Link>

      <nav className="hidden text-sm text-neutral-400 lg:block">
        <ul className="flex gap-4 lg:gap-10">
          <li>
            <Link href="#">
              <a className="whitespace-nowrap hover:text-white">Home</a>
            </Link>
          </li>
          {/* <li>
            <Link href="#">
              <a className="whitespace-nowrap hover:text-white">About Us</a>
            </Link>
          </li> */}
          {/* <li>
            <Link href="#">
              <a className="whitespace-nowrap hover:text-white">FAQs</a>
            </Link>
          </li> */}
          <li>
            <Link href="#">
              <a className="whitespace-nowrap hover:text-white">Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>

      <button className="py-6 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="15"
          fill="none"
          viewBox="0 0 26 15"
        >
          <path
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1.66 13.333H25M1.66 1.667H25 1.66z"
          ></path>
        </svg>
      </button>

      <ul className="hidden w-max lg:flex lg:flex-wrap lg:gap-5">
        <li className="ml-auto max-w-[210px] flex-auto">
          <Link href="/user/login">
            <a className="inline-block w-full rounded-[7px] border-[0.5px] border-white border-opacity-50 bg-white bg-opacity-20 px-5 py-3 text-center font-medium text-white transition duration-500 ease-in-out hover:scale-[1.02] focus:outline-none  focus:ring-2  focus:ring-offset-2 active:scale-[0.95] disabled:cursor-not-allowed disabled:opacity-70">
              Log out
            </a>
          </Link>
        </li>
        <li className="ml-auto max-w-[210px] flex-auto">
          <LinkButton href="/dashboard" variant="primary" size="sm" className="w-full">
            Dashboard
          </LinkButton>
        </li>
      </ul>
    </header>
  );
};
