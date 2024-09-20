// import { useRouter } from 'next/router';
import * as React from 'react';

import { Button, NotificationModal, SubscriptionModal } from '@/components/elements';
import { useModalControl, useNotificationModalControl } from '@/hooks';

// import { WebsiteMobileMenuProps } from './WebsiteMobileMenu';
// import ChooseGameModal from '@/features/website/components/ChooseGameModal';

import Image from 'next/image';
import { Input } from '@/components/form';
import { LandingPageHeader, MarqueeContainer } from '@/features/ask_ai_by_glo/component';
import { usePostAiSubscription } from '@/features/ask_ai_by_glo/api';
import { formatAxiosErrorMessage } from '@/utils';
import { AxiosError } from 'axios';

// Type inspired by https://github.com/vercel/next.js/issues/4515#issuecomment-485236368
// Lazy load this component to avoid pulling in huge JS bundles when not necessary
// const WebsiteMobileMenu = dynamic<WebsiteMobileMenuProps>(() =>
//   import('./WebsiteMobileMenu').then(mod => mod.WebsiteMobileMenu),
// );

interface WebsiteHeaderProps {
  sample?: string;
}

const AskAI: React.FunctionComponent<WebsiteHeaderProps> = () => {
  const { isModalOpen, closeModal, openModal } = useModalControl();
  const {
    message: errorModalMessage,
    isModalOpen: isErrorModalOpen,
    closeModal: closeErrorModal,
    openModal: openErrorModal,
  } = useNotificationModalControl();

  const [phoneNumber, setPhoneNumber] = React.useState('');

  const phoneNumberList = [
    '0805**339** . ₦50,000.00)',
    '- 0804**940** . ₦20,000.00)',
    '- 0806**459** . ₦25,000.00)',
    '- 0806**339** . ₦50,000.00)',
    '- 0806**439** . ₦20,000.00)',
    '- 0806**363** . ₦20,000.00)',
  ];

  const { mutate: postAiSub, isLoading } = usePostAiSubscription();

  const handleSubmission = () => {
    postAiSub(
      { phone_number: phoneNumber },
      {
        onSuccess: data => {
          console.log({ data });
          openModal();
        },

        onError: error => {
          const errorResponse = error as AxiosError;

          console.log({ error });

          const errorMessage = formatAxiosErrorMessage(errorResponse);
          openErrorModal(errorMessage as string);
          return;
        },
      },
    );
  };

  return (
    <div className="ask__ai__bg min-h-[100vh]">
      <SubscriptionModal
        headingText={''}
        type={'success'}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        phoneNumber={phoneNumber}
        label={'Subscription modal'}
      />

      <NotificationModal
        headingText={errorModalMessage}
        label={errorModalMessage}
        type="error"
        allowDismiss
        closeModal={closeErrorModal}
        isModalOpen={isErrorModalOpen}
      />
      <LandingPageHeader />

      <section className="container mt-0 grid grid-cols-12 items-start justify-between ">
        <div className="left__section relative top-8 col-span-12 lg:col-span-6">
          <button className="button__bg flex items-center rounded-full py-1 px-2 lg:py-2">
            <span className="inline-block">
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5414 3.35854C13.3464 2.6702 14.6647 2.6702 15.4814 3.35854L17.3247 4.9452C17.6747 5.24854 18.328 5.49354 18.7947 5.49354H20.778C22.0147 5.49354 23.0297 6.50854 23.0297 7.7452V9.72854C23.0297 10.1835 23.2747 10.8485 23.578 11.1985L25.1647 13.0419C25.853 13.8469 25.853 15.1652 25.1647 15.9819L23.578 17.8252C23.2747 18.1752 23.0297 18.8285 23.0297 19.2952V21.2785C23.0297 22.5152 22.0147 23.5302 20.778 23.5302H18.7947C18.3397 23.5302 17.6747 23.7752 17.3247 24.0785L15.4814 25.6652C14.6764 26.3535 13.358 26.3535 12.5414 25.6652L10.698 24.0785C10.348 23.7752 9.6947 23.5302 9.22803 23.5302H7.2097C5.97303 23.5302 4.95803 22.5152 4.95803 21.2785V19.2835C4.95803 18.8285 4.71303 18.1752 4.42137 17.8252L2.84637 15.9702C2.1697 15.1652 2.1697 13.8585 2.84637 13.0535L4.42137 11.1985C4.71303 10.8485 4.95803 10.1952 4.95803 9.7402V7.73354C4.95803 6.49687 5.97303 5.48187 7.2097 5.48187H9.22803C9.68303 5.48187 10.348 5.23687 10.698 4.93354L12.5414 3.35854Z"
                  fill="#50B651"
                />
                <path
                  d="M12.588 18.1985C12.3547 18.1985 12.133 18.1052 11.9697 17.9418L9.14633 15.1185C8.80799 14.7802 8.80799 14.2202 9.14633 13.8818C9.48466 13.5435 10.0447 13.5435 10.383 13.8818L12.588 16.0868L17.6047 11.0702C17.943 10.7318 18.503 10.7318 18.8413 11.0702C19.1797 11.4085 19.1797 11.9685 18.8413 12.3068L13.2063 17.9418C13.043 18.1052 12.8213 18.1985 12.588 18.1985Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="clipped__text ml-2 inline-block text-xs font-[600] lg:text-sm">
              ASK AI BY GLO
            </span>
          </button>

          <h2 className="my-4 text-2xl font-[600] text-white lg:my-8 lg:text-5xl">
            Learn, Earn, and Win with <br /> {"Nigeria's"} First SMS to Ai ! 🎁
          </h2>

          <div className="">
            <p className="text-sm text-white lg:max-w-[80%] lg:text-base">
              Subscribe and ask questions on topics you require answers on and also stand a chance
              to <span className="font-[600]">Win Up</span> to{' '}
              <span className="font-[600]">N1,000,000</span> every time you ask a question.
            </p>

            <div className="mt-4 flex shrink-0 flex-col items-center justify-start gap-2 lg:mt-8 lg:max-w-[75%] lg:flex-row">
              <Input
                name={'phoneNumber'}
                type={'number'}
                placeholder={'Enter phone number...'}
                required={true}
                min={8}
                className="h-12 bg-[#fff]/10 !font-[600] text-white placeholder:text-[#fff]"
                onChange={e => setPhoneNumber(e.target.value)}
                onWheel={e => e.currentTarget.blur()}
              />
              <Button
                variant="greenery"
                className="h-12 w-full whitespace-nowrap !px-3 !py-2 !text-sm lg:w-auto"
                centered
                disabled={isLoading || phoneNumber.length < 10}
                onClick={handleSubmission}
              >
                {isLoading ? 'Loading' : 'Ask me ✨'}
              </Button>
            </div>
          </div>
        </div>
        {/* 
        <div className="mt-10 w-[350px] lg:hidden">
          <Image
            alt="right side image"
            src={'/images/ask-ai-by-glo/landingpage_mobile.svg'}
            width={500}
            height={500}
            quality={100}
            className="relative object-contain"
            sizes="100vw"
            //
          />
        </div> */}

        {/* <div className="relative left-5 mt-12 min-w-[300px] lg:hidden">
          <Image
            src={'/images/ask-ai-by-glo/landing_page_mobile.png'}
            alt="mobile image"
            width={300}
            height={500}
            layout="responsive"
            sizes="100vw"
          />
        </div> */}

        <div className="right__section col-span-12 hidden justify-end lg:col-span-6 lg:flex">
         
          <div className="relative -right-[4.2rem] w-full lg:min-w-[400px]">
            <Image
              alt="right side image"
              src={'/images/ask-ai-by-glo/rsi.png'}
              width={'100%'}
              height={'100%'}
              quality={100}
              className="h-auto w-full"
              sizes="100vw"
              //
            />
          </div>
        </div>
      </section>
      <div className="fixed bottom-0 ">
        {' '}
        <MarqueeContainer phoneNumberList={phoneNumberList} />
      </div>
    </div>
  );
};

export default AskAI;

{
  /*  */
}
