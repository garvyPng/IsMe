import { useState } from 'react';
import { SectionHeader } from '../../../shared/ui/SectionHeader';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

const FaqItem = ({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) => {
    const [isActive, setIsActive] = useState(false);

    function activeToggle() {
        setIsActive((prev) => !prev);
    }
    return (
        <div className='md:w-lg mx-auto mt-2 border-b border-b-(--color-light-grey) block min-w-0 grow'>
            <button
                onClick={activeToggle}
                className='text-start py-4 px-4 flex justify-between w-full text-lg md:text-xl font-semibold  focus:outline-none'
            >
                {question}
                <span
                    className={`transform transition-transform grid shrink-0 grid-cols-1 ${
                        isActive ? 'rotate-180' : ''
                    }`}
                >
                    <ChevronDownIcon
                        aria-hidden='true'
                        className=' pointer-events-none col-start-1 row-start-1 size-5 self-center justify-self-end sm:size-4'
                    />
                </span>
            </button>

            {isActive && (
                <div className='mt-2 max-h-[150px] space-y-2  pt-3 pb-5 px-4 rounded-md'>
                    <p className='text-sm md:text-base text-justify text-(--color-secondary)'>
                        {answer}
                    </p>
                </div>
            )}
        </div>
    );
};

const faqs = [
    {
        question: 'What is React?',
        answer: 'React is a JavaScript library for building user interfaces, developed by Facebook.',
    },
    {
        question: 'How does state work in React?',
        answer: 'State is an object that holds the data that affects the rendering of a component. It can be updated using the `setState` function.',
    },
    {
        question: 'What is a component in React?',
        answer: 'A component is a reusable and self-contained unit of the UI. Components can be either functional or class-based.',
    },
];

export const Questions = () => {
    return (
        <section className='container px-6 lg:max-w-7xl mx-auto mt-[80px] md:mt-[135px] h-auto'>
            <SectionHeader
                title={'Some Asked Questions'}
                subtitle={''}
            ></SectionHeader>
            {faqs.map((faq, index) => (
                <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                />
            ))}
        </section>
    );
};
