import { PlayBtn } from '../../../shared/ui/PlayBtn';
import { SectionInfo } from '../../../shared/ui/SectionInfo';

export const SolutionSection = () => {
    return (
        <section className='container px-6 lg:max-w-7xl mx-auto mt-[80px] md:mt-[135px] h-auto flex flex-col md:flex-row gap-y-6 items-start lg:justify-between align-middle'>
            <div className='flex gap-y-6 order-1 lg:order-0 md:ml-6 lg:ml-0 lg:mr-6 flex-col justify-between'>
                <div className='relative flex justify-center items-center'>
                    <img className='rounded-2xl' src='/images/video.jpg' />
                    <div className='absolute'>
                        <PlayBtn />
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-[5px] h-auto mr-[15px] bg-gradient-to-b from-blue-300 from-40% to-green-300 '></div>
                    <p className='max-w-[430px] text-sm lg:text-base font-light italic text-blue-300 leading-[30px]'>
                        "Simform is quick to identify larger problem with the
                        Software so we decided to expand our scope to build new
                        modules"
                    </p>
                </div>
            </div>
            <SectionInfo
                title='Our Solution'
                linkName='Learn more about Solution'
                link={'#'}
            >
                <div className='font-normal text-justify text-(--color-secondary)'>
                    <p>
                        Just like SSL certificates protect websites, ItsMe
                        ensures secure human-to-human communication.
                    </p>
                    <ul className='list-disc pl-5'>
                        <li>
                            Blockchain-powered identity verification – no more
                            fakes.
                        </li>
                        <li>
                            Seamless integration – works across emails, chats,
                            and calls.
                        </li>
                        <li>
                            Privacy-first approach – no personal data exposure.
                        </li>
                    </ul>
                    <p>How It Works:</p>
                    <ol className='list-decimal pl-5'>
                        <li>
                            Blockchain-powered identity verification – no more
                            fakes.
                        </li>
                        <li>
                            Seamless integration – works across emails, chats,
                            and calls.
                        </li>
                        <li>
                            Privacy-first approach – no personal data exposure.
                        </li>
                    </ol>
                </div>
            </SectionInfo>
        </section>
    );
};
