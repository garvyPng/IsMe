import { SectionInfo } from '../../../shared/ui/SectionInfo';

export const Story = () => {
    return (
        <section className='container px-6 lg:max-w-7xl mx-auto mt-[80px] h-auto flex flex-col md:flex-row gap-x-6 lg:justify-between align-middle items-center'>
            <SectionInfo title='Our Story'>
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
                    <p>
                        In today’s hyperconnected world, fraudsters, scammers,
                        and impersonators are more sophisticated than ever.
                        AI-driven deepfakes, phishing emails, and fake
                        identities make.
                    </p>
                </div>
            </SectionInfo>
            <div className='w-full'>
                <img
                    className='m-auto h-50 w-full object-cover md:w-130 md:h-auto rounded-[50px] lg:rounded-[130px]'
                    src='/images/alien4.webp'
                />
            </div>
        </section>
    );
};
