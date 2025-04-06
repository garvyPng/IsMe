import { ReactNode } from 'react';
import { SectionHeader } from '../../../shared/ui/SectionHeader';
import { useInView } from '../../../shared/hooks';
import { BtnPrimary } from '../../../shared/ui/BtnPrimary';
const TimelineItem = ({
    title,
    children,
    animation,
}: {
    title: string;
    children: ReactNode;
    animation: string;
}) => {
    const { ref, isVisible } = useInView();
    return (
        <div
            ref={ref}
            className={`${animation} ${
                isVisible ? 'animate-bounce-in' : 'animate-none'
            }`}
        >
            <h3 className='text-lg lg:text-xl font-semibold mb-[17px]'>
                {title}
            </h3>
            <div className='text-(--color-secondary) text-justify lg:leading-[36px]'>
                {children}
            </div>
        </div>
    );
};
export const WhynowSection = () => {
    return (
        <section className='container px-6 lg:max-w-7xl mx-auto mt-[80px] md:mt-[135px] h-auto'>
            <SectionHeader
                title='Why Now?'
                subtitle='&#128640;The digital landscape is evolving rapidly, and with it, the thr
            eats to online trust are escalating. Here’s why now is the moment to invest in identity verification technology'
            ></SectionHeader>
            <div className='flex flex-col md:flex-row gap-y-6 justify-between'>
                <div className='md:w-2/6 gap-y-6 flex flex-col justify-between'>
                    <TimelineItem
                        animation=''
                        title={'The Rise of AI-Powered Fraud'}
                    >
                        <p>
                            &#127917;
                            <span className='inline-block bg-yellow-300/50 rounded-md px-[7px]'>
                                Deepfake technology
                            </span>{' '}
                            improves drastically, making fake videos and voices
                            nearly indistinguishable from real ones. <br />
                            &#128176;Cybercrime skyrockets, with fraud losses
                            exceeding $6.9 billion in 2021 (FBI report). <br />
                            &#128721;Businesses struggle to detect and prevent
                            impersonation attacks.
                        </p>
                    </TimelineItem>
                    <div className='hidden md:block'>
                        <TimelineItem animation='' title={'The Breaking Point'}>
                            <p>
                                &#129302;Generative AI reaches new levels,
                                making identity fraud nearly undetectable.
                                <br />
                                &#128274;Trust in digital communication plummets
                                – people can no longer distinguish
                                <span className='inline-block bg-blue-300/50 rounded-md px-[7px]'>
                                    real messages
                                </span>{' '}
                                from AI-generated scams.
                                <br />
                                &#127757;A $142B fraud prevention market
                                emerges, creating huge demand for innovative
                                identity solutions.
                            </p>
                        </TimelineItem>
                    </div>
                </div>
                <div className='hidden md:block w-2/6'>
                    <div className='relative rounded-2xl w-1 my-[40px] bg-(--color-primary) h-[757px] mx-auto'>
                        <div className='absolute left-1/2 -translate-x-1/2 top-0 w-[21px] h-[21px] bg-yellow-300 rounded-full flex items-center'>
                            <div className='relative flex items-center left-1/2'>
                                <div className='absolute  -translate-x-2/2  flex flex-col items-center'>
                                    <span className='text-2xl lg:text-4xl font-extrabold'>
                                        2019
                                    </span>
                                    <div className='w-[100px] h-[7px] lg:w-[135px] lg:h-[11px] rounded-full bg-yellow-300'></div>
                                    <span className='text-2xl lg:text-4xl font-extrabold'>
                                        2020
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='absolute left-1/2 -translate-x-1/2 top-1/3 w-[21px] h-[21px] bg-green-300 rounded-full flex items-center'>
                            <div className='relative flex items-center left-1/2'>
                                <div className='absolute flex flex-col items-center'>
                                    <span className='text-2xl lg:text-4xl font-extrabold'>
                                        2021
                                    </span>
                                    <div className='w-[100px] h-[7px] lg:w-[135px] lg:h-[11px] rounded-full bg-green-300'></div>
                                    <span className='text-2xl lg:text-4xl font-extrabold'>
                                        2022
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='absolute left-1/2 -translate-x-1/2 top-2/3 w-[21px] h-[21px] bg-blue-300 rounded-full flex items-center'>
                            <div className='relative flex items-center left-1/2'>
                                <div className='absolute  -translate-x-2/2  flex flex-col items-center'>
                                    <span className=' text-2xl lg:text-4xl font-extrabold'>
                                        2023
                                    </span>
                                    <div className='w-[100px] h-[7px] lg:w-[135px] lg:h-[11px] rounded-full bg-blue-300'></div>
                                    <span className=' text-2xl lg:text-4xl font-extrabold'>
                                        2024
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='absolute left-1/2 -translate-x-1/2 bottom-0 w-[21px] h-[21px] bg-red-300 rounded-full flex items-center'>
                            <div className='relative flex items-center left-1/2'>
                                <div className='absolute flex flex-col items-center'>
                                    <span className=' text-2xl lg:text-4xl font-extrabold'>
                                        2025
                                    </span>
                                    <div className='w-[100px] h-[7px] lg:w-[135px] lg:h-[11px] rounded-full bg-red-300'></div>
                                    <span className=' text-2xl lg:text-4xl font-extrabold'>
                                        Beyond
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-2/6 flex flex-col gap-y-6 justify-between'>
                    <TimelineItem
                        animation='delay-[7000ms]'
                        title={'The Identity Crisis'}
                    >
                        <p>
                            &#128201;Phishing and social engineering scams
                            explode, with a 500% increase in AI-generated fraud
                            attempts.
                            <br />
                            &#127974;
                            <span className='inline-block bg-green-300/50 rounded-md px-[7px]'>
                                Financial sector hit hardest,
                            </span>{' '}
                            losing billions to identity-based cyberattacks.
                            <br />
                            &#128269;Regulations tighten, with governments
                            pushing for stronger identity verification
                            requirements.
                        </p>
                    </TimelineItem>
                    <div className='md:hidden'>
                        <TimelineItem animation='' title={'The Breaking Point'}>
                            <p>
                                &#129302;Generative AI reaches new levels,
                                making identity fraud nearly undetectable.
                                <br />
                                &#128274;Trust in digital communication plummets
                                – people can no longer distinguish
                                <span className='inline-block bg-blue-300/50 rounded-md px-[7px]'>
                                    real messages
                                </span>{' '}
                                from AI-generated scams.
                                <br />
                                &#127757;A $142B fraud prevention market
                                emerges, creating huge demand for innovative
                                identity solutions.
                            </p>
                        </TimelineItem>
                    </div>
                    <TimelineItem
                        animation='delay-[7000ms]'
                        title={'The Future of Digital Trust'}
                    >
                        <p>
                            &#9989;Blockchain-based identity verification
                            becomes essential—just{' '}
                            <span className='inline-block bg-red-300/50 rounded-md px-[7px]'>
                                like SSL certificates
                            </span>{' '}
                            did for websites.
                            <br />
                            &#127942;First-mover advantage: Companies that
                            invest early in fraud prevention gain a competitive
                            edge.
                            <br />
                            &#128640;ItsMe is leading the charge, ensuring
                            secure, verified communication for the digital
                            world.
                        </p>
                    </TimelineItem>
                </div>
            </div>
            <div className='w-full flex flex-col justify-between items-center mt-[65px] gap-y-5'>
                <p>
                    The time to act is now. The future of trust depends on it.
                </p>
                <BtnPrimary secondary>Invest Now</BtnPrimary>
            </div>
        </section>
    );
};
