import { useState } from 'react';
import { SectionInfo } from '../../../shared/ui/SectionInfo';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { BtnPrimary } from '../../../shared/ui/BtnPrimary';

const FormSwaper = ({
    text,
    isActive,
    onClick,
}: {
    text: string;
    isActive: boolean;
    onClick: () => void;
}) => (
    <button
        onClick={onClick}
        className={`inline-block pb-4 relative after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-red-300 after:transition-transform ${
            isActive ? 'after:scale-x-100' : 'after:scale-x-0'
        }`}
    >
        {text}
    </button>
);

export const LauncherSection = () => {
    const [formPage, setFormPage] = useState('Buy');
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className='container px-6 lg:max-w-7xl mx-auto mt-[80px] md:mt-[135px] h-auto flex flex-col gap-y-6 lg:flex-row justify-between align-middle'>
            <SectionInfo
                title={'Crypto launcher'}
                linkName={'Learn more about Token'}
                link={'#'}
            >
                <p className='text-(--color-secondary) text-justify lg:leading-[36px]'>
                    ItsMe Token Utility & Benefits: <br />
                    &#128160; Identity Verification – Users can purchase, stake,
                    and use ItsMe Tokens to verify their identity in digital
                    interactions.
                    <br />
                    &#128160; Fraud Prevention – Businesses can integrate ItsMe
                    verification, using ItsMe Tokens as an authentication
                    mechanism.
                    <br />
                    &#128160; Access to Premium Features – Token holders get
                    priority access to advanced AI fraud detection tools.
                    <br />
                    &#128160; Early Adopter Rewards – First investors and users
                    receive discounted verifications and exclusive NFTs.
                    <br />
                    &#128160; NFT-Based Digital Identity – Verified users
                    receive NFTs as their secure digital credentials (like a
                    Web3 passport).
                </p>
            </SectionInfo>
            <div className='lg:w-4/9 p-6 border border-(--color-light-grey) rounded-2xl'>
                <div className='h-full flex flex-col flex-auto'>
                    <div className='w-full flex border-b border-b-(--color-light-grey)'>
                        <div className='flex gap-x-4'>
                            <FormSwaper
                                text='Buy'
                                isActive={formPage === 'Buy'}
                                onClick={() => setFormPage('Buy')}
                            />
                            <FormSwaper
                                text='Sell'
                                isActive={formPage === 'Sell'}
                                onClick={() => setFormPage('Sell')}
                            />
                            <FormSwaper
                                text='Swap'
                                isActive={formPage === 'Swap'}
                                onClick={() => setFormPage('Swap')}
                            />
                        </div>
                    </div>
                    <div className='h-full flex flex-col justify-between'>
                        <div className='h-auto'>
                            <div className='mt-2'>
                                <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-(--color-light-grey) has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600'>
                                    <input
                                        id='price'
                                        name='price'
                                        type='text'
                                        placeholder='0.00'
                                        className='block min-w-0 grow py-4 pr-3 pl-1 text-base placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
                                    />
                                    <div className='grid shrink-0 grid-cols-1 focus-within:relative'>
                                        <select
                                            id='currency'
                                            name='currency'
                                            aria-label='Currency'
                                            className='col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-(--color-secondary) placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                                        >
                                            <option>USD</option>
                                            <option>CAD</option>
                                            <option>EUR</option>
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden='true'
                                            className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-(--color-secondary) sm:size-4'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-(--color-light-grey) has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600'>
                                    <input
                                        id='price'
                                        name='price'
                                        type='text'
                                        placeholder='0.00'
                                        className='block min-w-0 grow py-4 pr-3 pl-1 text-base placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
                                    />
                                    <div></div>
                                    <div className='grid shrink-0 grid-cols-1 focus-within:relative'>
                                        <select
                                            id='currency'
                                            name='currency'
                                            aria-label='Currency'
                                            className='col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-(--color-secondary) placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                                        >
                                            <option>COIN</option>
                                            <option>COIN</option>
                                            <option>COIN</option>
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden='true'
                                            className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-(--color-secondary) sm:size-4'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='w-full mx-auto my-2 border border-(--color-light-grey) text-(--color-secondary) rounded-md block min-w-0 grow py-4 pl-1 pr-2'>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className='pl-3 flex justify-between w-full text-base font-medium  focus:outline-none'
                                >
                                    See some information
                                    <span
                                        className={`transform transition-transform grid shrink-0 grid-cols-1 ${
                                            isOpen ? 'rotate-180' : ''
                                        }`}
                                    >
                                        <ChevronDownIcon
                                            aria-hidden='true'
                                            className='pointer-events-none col-start-1 row-start-1 size-5 self-center justify-self-end text-(--color-secondary) sm:size-4'
                                        />
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className='mt-2 max-h-[150px] overflow-y-auto  space-y-2  p-3 rounded-md'>
                                        <p className='text-justify'>
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Facere
                                            aliquid eligendi voluptatibus
                                            ducimus voluptas corporis aperiam,
                                            magnam debitis consequatur
                                            perspiciatis ut optio esse accusamus
                                            cupiditate enim sed, est commodi.
                                            Eum.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* <button className='w-full mt-auto bg-blue-300 rounded-lg py-[16px] text-sm font-semibold text-white uppercase'>
                            Continue
                        </button> */}
                        <BtnPrimary add='w-full py-[16px] uppercase font-semibold text-sm'>
                            Continue
                        </BtnPrimary>
                    </div>
                </div>
            </div>
        </section>
    );
};
