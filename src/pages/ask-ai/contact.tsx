import { LandingPageHeader } from '@/features/ask_ai_by_glo/component';
import { useModalControl } from '@/hooks';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { toast } from 'react-hot-toast';
import { socialMediaLinks } from '@/components/layout';
import { Button, LinkButton, Modal } from '@/components/elements';
import clsx from 'clsx';
const contactInfo = [
  {
    icon: (
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.6 0H2.4C1.76348 0 1.15303 0.271411 0.702944 0.754526C0.252856 1.23764 0 1.89288 0 2.57611V11.1631C0 11.8464 0.252856 12.5016 0.702944 12.9847C1.15303 13.4678 1.76348 13.7393 2.4 13.7393H13.6C14.2365 13.7393 14.847 13.4678 15.2971 12.9847C15.7471 12.5016 16 11.8464 16 11.1631V2.57611C16 1.89288 15.7471 1.23764 15.2971 0.754526C14.847 0.271411 14.2365 0 13.6 0ZM13.6 1.71741L8.4 5.55581C8.27839 5.63118 8.14043 5.67086 8 5.67086C7.85957 5.67086 7.72162 5.63118 7.6 5.55581L2.4 1.71741H13.6Z"
          fill="#9602AD"
        />
      </svg>
    ),
    infoType: 'Email',
    infoValue: 'support@wisewinn.com',
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.16249 3.59687L3.82656 1.93438C3.94394 1.81647 4.08346 1.72293 4.23711 1.65911C4.39076 1.59529 4.5555 1.56246 4.72187 1.5625C5.06093 1.5625 5.37968 1.69531 5.61874 1.93438L7.40937 3.725C7.52727 3.84238 7.62082 3.98191 7.68464 4.13555C7.74845 4.2892 7.78129 4.45394 7.78125 4.62031C7.78125 4.95938 7.64843 5.27813 7.40937 5.51719L6.1 6.82656C6.40649 7.50213 6.83262 8.1167 7.35781 8.64062C7.88168 9.16709 8.4962 9.59477 9.17187 9.90312L10.4812 8.59375C10.5986 8.47585 10.7382 8.3823 10.8918 8.31849C11.0454 8.25467 11.2102 8.22184 11.3766 8.22188C11.7156 8.22188 12.0344 8.35469 12.2734 8.59375L14.0656 10.3828C14.1837 10.5004 14.2773 10.6402 14.3411 10.7941C14.4049 10.948 14.4377 11.1131 14.4375 11.2797C14.4375 11.6188 14.3047 11.9375 14.0656 12.1766L12.4047 13.8375C12.0234 14.2203 11.4969 14.4375 10.9562 14.4375C10.8422 14.4375 10.7328 14.4281 10.625 14.4094C8.51875 14.0625 6.42968 12.9422 4.74374 11.2578C3.05937 9.575 1.94062 7.4875 1.58906 5.375C1.48281 4.72969 1.69687 4.06562 2.16249 3.59687Z"
          fill="#9602AD"
        />
      </svg>
    ),
    infoType: 'Phone',
    infoValue: '+234 817 945 8925',
  },
  // {
  //   icon: (
  //     <svg
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  //         fill="#9602AD"
  //       />
  //       <path
  //         d="M15.7096 15.9298C15.5796 15.9298 15.4496 15.8998 15.3296 15.8198L12.2296 13.9698C11.4596 13.5098 10.8896 12.4998 10.8896 11.6098V7.50977C10.8896 7.09977 11.2296 6.75977 11.6396 6.75977C12.0496 6.75977 12.3896 7.09977 12.3896 7.50977V11.6098C12.3896 11.9698 12.6896 12.4998 12.9996 12.6798L16.0996 14.5298C16.4596 14.7398 16.5696 15.1998 16.3596 15.5598C16.2096 15.7998 15.9596 15.9298 15.7096 15.9298Z"
  //         fill="#292D32"
  //       />
  //     </svg>
  //   ),
  //   infoType: 'Work hours',
  //   infoValue: 'Monday - Friday (8:00 AM to 5:00 PM)',
  // },
];
const AskAiContact = () => {
  const [state, handleSubmit] = useForm('my api');
  const { closeModal } = useModalControl();

  if (state.errors[0]?.code === 'EMPTY' && !state.submitting) {
    toast.error('Please fill out the form.', {
      id: 'error',
    });
  }

  const inputClassName =
    'placeholder:text-mauve-7 w-full rounded-md border-0 border-transparent p-0 py-4 px-3 text-xs outline-none outline-0 ring-0 autofill:text-white focus:border-0 focus:border-transparent focus:outline-none focus:outline-0 focus:ring-0 disabled:cursor-not-allowed disabled:opacity-60 md:text-sm bg-[#121212]';

  return (
    <div className="ask__ai__bg min-h-[100vh]">
      {' '}
      <LandingPageHeader />
      <main>
        <div className="container relative mb-5 items-end py-4 text-white md:mb-[146px] md:flex md:py-16">
          <div
            style={{ backgroundImage: "url('/images/contact-map-bg.png')" }}
            className="absolute left-0 right-0 top-0  -mt-36 h-[589px] bg-cover xl:left-10 xl:right-10"
          ></div>
          <div className="relative z-10 flex flex-1 justify-center rounded-[10px] bg-[#121212] p-3 md:justify-end md:bg-transparent md:p-0">
            <div className="md:mr-[37px]">
              <h1 className="text-2xl font-extrabold md:mb-20 md:text-4xl lg:text-[70px]">
                Contact us
              </h1>

              <ul className="mt-6 space-y-[22px] text-xs md:mt-[50px] md:text-sm">
                {contactInfo.map(({ icon, infoType, infoValue }) => (
                  <li className="flex items-center md:space-x-3" key={infoType}>
                    <span className="hidden md:block">{icon}</span>
                    <p className="mr-4 text-[#7d7d7d] md:mr-0">{infoType}:</p>
                    <p>{infoValue}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-[24px] flex space-x-5 text-xs md:text-sm">
                <p className="text-sm text-white">Follow Us:</p>
                <ul className="flex items-center gap-4">
                  {socialMediaLinks.map(({ icon, iconName, link, styles }) => (
                    <li key={iconName}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={iconName}
                        href={link}
                        className={clsx(styles)}
                      >
                        {icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative z-10 flex-1">
            <div className="mx-auto mt-6 max-w-[507px] rounded-[10px] bg-black p-5 md:mt-0 md:ml-[37px] md:p-9">
              <h3>Get in touch</h3>
              <form className="mt-[13px]" onSubmit={handleSubmit}>
                <input className={inputClassName} name="fullName" placeholder="Full name" />
                <ValidationError field="fullName" prefix="Full name" errors={state.errors} />
                <div className="mt-4">
                  <input className={inputClassName} name="email" placeholder="Email Address" />
                  <ValidationError field="email" prefix="Email" errors={state.errors} />
                </div>
                <div className="mt-4">
                  <input className={inputClassName} name="phoneNo" placeholder="Phone no" />
                  <ValidationError field="phoneNo" prefix="Phone no" errors={state.errors} />
                </div>
                <div className="mt-4">
                  <textarea
                    placeholder="Message"
                    name="message"
                    rows={5}
                    className={clsx(inputClassName, 'resize-none')}
                  ></textarea>
                  <ValidationError field="message" prefix="Message" errors={state.errors} />
                </div>
                <div className="mt-5 mb-6 md:mb-[49px]">
                  <Button type="submit" disabled={state.submitting} className="font-semibold">
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="absolute left-0 right-0 bottom-0 hidden h-64 bg-[#121212] md:block xl:right-10  xl:left-10"></div>
        </div>

        <Modal
          isModalOpen={state.succeeded}
          width="350px"
          label="Modal form success"
          closeModal={closeModal}
          className="mt-32 text-center"
          allowDismiss
        >
          <p>Thank you for getting in touch, we will get back to you shortly.</p>
          <LinkButton className="mt-4" href="/ask-ai">
            Go to home page
          </LinkButton>
        </Modal>

        {/* <div className="close-to-footer-shape -mt-2 h-20 sm:mt-0 md:h-[141px]"></div> */}
        {/* <style jsx>{`
          .close-to-footer-shape {
            background: linear-gradient(180deg, #000410 28.02%, #4c1961 355.17%);
            backdrop-filter: blur(50px);
            transform: rotate(-180deg);
          }
        `}</style> */}
      </main>
    </div>
  );
};

export default AskAiContact;
