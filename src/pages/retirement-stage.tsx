// import { useRouter } from 'next/router';
import * as React from 'react';
// import { motion } from 'framer-motion'

import { Button, NotificationModal } from '@/components/elements';
import { useNotificationModalControl } from '@/hooks';

import { MarqueeContainer } from '@/features/ask_ai_by_glo/component';

// Type inspired by https://github.com/vercel/next.js/issues/4515#issuecomment-485236368
// Lazy load this component to avoid pulling in huge JS bundles when not necessary
// const WebsiteMobileMenu = dynamic<WebsiteMobileMenuProps>(() =>
//   import('./WebsiteMobileMenu').then(mod => mod.WebsiteMobileMenu),
// );

interface WebsiteHeaderProps {
  sample?: string;
}


// Define types
type Question = {
  id: number;
  text: string;
  answer: string;
}

type Answer = {
  questionId: number;
  answerId: number;
  user: string;
  time: number;
  isCorrect: boolean;
}

type _GameState = {
  currentQuestionIndex: number;
  answers: Answer[];
  score: number;
}

// Sample questions (you can expand this to 30)
const questions: Question[] = [
  {
    id: 1,
    text: "Mary's mother has four children: April, May, June, and ____?",
        answer: "2"
  },
  {
    id: 2,
    text: "Which country is home to the Eiffel Tower?",
        answer: "2"
  },
   {
    id: 3,
    text: "If you rearrange the letters 'L I S T E N', you would have the name of a:?",
    answer: "2"
  },
   {
    id: 4,
    text: "What is the currency of Canada?",
    answer: "2"
  },
     {
    id: 5,
    text: "Which number comes next in the series: 1, 3, 5, 7, 11, 13 ____?",
    answer: "2"
  },
     {
    id: 6,
    text: "Which planet is known as the Earth's twin?",
    answer: "2"
  },
     {
    id: 7,
    text: "What is the next letter in the series: A, C, F, J, ____?",
    answer: "2"
  },
     {
    id: 8,
    text: "Which country has the largest population in the world?",
    answer: "2"
  },
       {
    id: 9,
    text: "If you divide 30 by half and add 10, what do you get?",
    answer: "2"
  },
       {
    id: 10,
    text: "Which is the highest mountain in the world?",
    answer: "2"
  },
       {
    id: 11,
    text: " If it takes 5 machines 5 minutes to make 5 gadgets, how long would it take 100 machines to make 100 gadgets?",
    answer: "2"
  },
       {
    id: 12,
    text: "In which year did World War II end?",
    answer: "2"
  },
         {
    id: 13,
    text: "What is the next prime number after 23?",
    answer: "2"
  },
           {
    id: 14,
    text: "Which scientist is known for the theory of relativity?",
    answer: "2"
  },
           {
    id: 15,
    text: "If a red house is made of red bricks, and a blue house is made of blue bricks, what is a greenhouse made of?",
    answer: "2"
  },
           {
    id: 16,
    text: "What is the official language of Brazil?",
    answer: "2"
  },
           {
    id: 17,
    text: "Which two colors combine to make purple?",
    answer: "2"
  },
             {
    id: 18,
    text: "Which continent is the Sahara Desert located on?",
    answer: "2"
  },
               {
    id: 19,
    text: "If a rooster lays an egg on a roof, which way will it roll?",
    answer: "2"
  },
               {
    id: 20,
    text: "What is the capital of Italy?",
    answer: "2"
  },
               {
    id: 21,
    text: "What is the smallest prime number?",
    answer: "2"
  },
               {
    id: 22,
    text: "Which planet is closest to the sun?",
    answer: "2"
  },
               {
    id: 23,
    text: "Which number comes next in the series: 2, 6, 12, 20, ____?",
    answer: "2"
  },
              {
    id: 24,
    text: "Which country is known as the 'Land of the Free'?",
    answer: "2"
  },
              {
    id: 25,
    text: "Who invented the World Wide Web, and in which year was it first proposed?",
    answer: "2"
  },
              {
    id: 26,
    text: "Who was the first Nigerian to become a Senior Advocate of Nigeria (SAN)?",
    answer: "2"
  }


  // ... add more questions here
]

// Sound effects
const _correctSound = typeof Audio !== 'undefined' ? new Audio('/correct.mp3') : null
const _incorrectSound = typeof Audio !== 'undefined' ? new Audio('/incorrect.mp3') : null



const AskAI: React.FunctionComponent<WebsiteHeaderProps> = () => {
  // const { isModalOpen, closeModal, openModal } = useModalControl();
  const {
    message: errorModalMessage,
    isModalOpen: isErrorModalOpen,
    closeModal: closeErrorModal,
    openModal: _openErrorModal,
  } = useNotificationModalControl();



  const phoneNumberList = [
    'Answer questions win. ₦50,000.00)',
    '- Answer questions 2 more . ₦20,000.00)',
    '- Answer questions win 3 more . ₦25,000.00)',
    '- Answer questions win 4 more . ₦50,000.00)',
    '- Answer questions win everyone is a winner . ₦20,000.00)',
    '- Answer questions win omoo otilo!!. ₦20,000.00)',
  ];
const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [showAnswer, setShowAnswer] = React.useState(false);

  const handleNext = () => {
    if (showAnswer) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setShowAnswer(false);
      } else {
        alert("Quiz completed!");
        setCurrentQuestionIndex(0);
        setShowAnswer(false);
      }
    } else {
      setShowAnswer(true);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ask__ai__bg min-h-[100vh]">
      <NotificationModal
        headingText={errorModalMessage}
        label={errorModalMessage}
        type="error"
        allowDismiss
        closeModal={closeErrorModal}
        isModalOpen={isErrorModalOpen}
      />

      <section className="container mt-0 ">
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
              Whyze Games
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#00041068] text-white p-4 rounded-xl border border-[#00E2C6] h-[600px] mt-16">
          <div className="w-full max-w-2xl bg-blue-900 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl mb-4">{currentQuestion.text}</h2>
            {showAnswer && (
              <div className="mt-4 p-4 bg-green-600 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Answer:</h3>
                <p>{currentQuestion.answer}</p>
              </div>
            )}
            <div className="mt-6 flex justify-between items-center">
              <div className="text-lg">Question {currentQuestionIndex + 1} of {questions.length}</div>
              <Button
                onClick={handleNext}
                className="bg-green-500 hover:bg-green-600"
              >
                {showAnswer ? 'Next Question' : 'Show Answer'}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed bottom-0 w-full">
        <MarqueeContainer phoneNumberList={phoneNumberList} />
      </div>
    </div>
  );
};

export default AskAI;
