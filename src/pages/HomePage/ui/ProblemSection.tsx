import { SectionInfo } from '../../../shared/ui/SectionInfo';

export const ProblemSection = () => {
    return (
        <section className='container px-6 lg:max-w-7xl mx-auto mt-[80px] md:mt-[135px] h-auto flex flex-col md:flex-row gap-y-6 justify-between align-middle'>
            <SectionInfo
                title='Problem Statment'
                linkName='Learn more about Problems'
                link={'#'}
            >
                <div className='font-normal text-justify text-(--color-secondary)'>
                    <p>
                        In today’s hyperconnected world, fraudsters, scammers,
                        and impersonators are more sophisticated than ever.
                        AI-driven deepfakes, phishing emails, and fake
                        identities make it nearly impossible to distinguish real
                        from fake. The result?
                    </p>
                    <ul className='list-disc pl-5'>
                        <li>Businesses lose billions to fraud.</li>
                        <li>Individuals fall victim to identity theft.</li>
                        <li>
                            Trust—the foundation of digital communication—is
                            crumbling.
                        </li>
                    </ul>
                </div>
            </SectionInfo>
            <div className=''>
                <img
                    className='m-auto h-50 md:h-auto'
                    src='/images/ProblemImg.png'
                />
            </div>
        </section>
    );
};
