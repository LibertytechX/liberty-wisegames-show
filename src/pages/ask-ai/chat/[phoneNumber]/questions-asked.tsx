import { SmallSpinner } from '@/components/elements';
import { QuestionsResponse, usePostGetQuestionsAsked } from '@/features/ask_ai_by_glo/api';
import { ChatMobileMenu } from '@/features/ask_ai_by_glo/component/ChatMobileMenu';
import { useModalControl } from '@/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const QuestionsAsked = () => {
  const router = useRouter();
  const phoneNumber = router.query.phoneNumber as string;

  const [questionsAsked, setQuestionsAsked] = useState<QuestionsResponse>([]);

  const { mutate: postGetQuestions, isLoading } = usePostGetQuestionsAsked();

  useEffect(() => {
    //
    postGetQuestions(
      { phone_number: phoneNumber },
      {
        onSuccess: data => {
          console.log(data);
          setQuestionsAsked(data.data);
          //   openModal();
        },

        onError: () => {
          return;
        },
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneNumber]);

  const { isModalOpen, closeModal, openModal } = useModalControl();

  return (
    <>
      <ChatMobileMenu closeModal={closeModal} isModalOpen={isModalOpen} />
      <div className="leftbar-shadow relative flex w-full shrink-0 flex-col gap-4 overflow-y-auto bg-[#002414] px-4 ">
        <div className="mobile__headers container flex items-center justify-between py-8 lg:hidden ">
          <Link href="/">
            <a className="inline flex-1 overflow-visible">
              <div className="flex items-center gap-x-4">
                <Image src={'/images/gloLogo.png'} width={50} height={50} alt="glo" />
                <p className="text-base font-semibold text-white lg:text-2xl">Ask Ai by Glo</p>
              </div>
            </a>
          </Link>

          <button className="rounded-lg p-2" onClick={openModal}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="35"
                height="35"
                rx="7.5"
                stroke="white"
                strokeOpacity="0.36"
              />
              <path
                d="M10 24H26C26.55 24 27 23.55 27 23C27 22.45 26.55 22 26 22H10C9.45 22 9 22.45 9 23C9 23.55 9.45 24 10 24ZM10 19H26C26.55 19 27 18.55 27 18C27 17.45 26.55 17 26 17H10C9.45 17 9 17.45 9 18C9 18.55 9.45 19 10 19ZM9 13C9 13.55 9.45 14 10 14H26C26.55 14 27 13.55 27 13C27 12.45 26.55 12 26 12H10C9.45 12 9 12.45 9 13Z"
                fill="#50B651"
              />
            </svg>
          </button>
        </div>

        <div className="h-[.1px] w-full bg-white/40"></div>

        <div className="min-h-screen">
          <h2 className="mb-4 text-base font-[700] text-white">Questions asked...</h2>

          {!isLoading ? (
            <div className="relative !z-[999]">
              {Array.isArray(questionsAsked) && questionsAsked.length > 0 ? (
                questionsAsked.map(message => {
                  return (
                    <div className="mb-4 w-full bg-white/[0.08] px-4 py-4" key={message.created_at}>
                      <h2 className="text-sm font-[600]">{message.prompt}</h2>
                      <div className="my-4 h-[1px] w-full bg-white/40"></div>
                      <p className="text-xs text-white">{message.response}</p>
                    </div>
                  );
                })
              ) : (
                <p className="text-xs italic text-white ">No Questions asked yet.</p>
              )}
            </div>
          ) : (
            <SmallSpinner />
          )}

          <div className="mt-4 h-[.1px] w-full bg-white/40"></div>
          <div className="absolute -bottom-40 z-[99]">
            <Image
              src={'/images/ask-ai-by-glo/bulb.svg'}
              alt={'bulb'}
              width={200}
              height={200}
              className=""
              //
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionsAsked;
