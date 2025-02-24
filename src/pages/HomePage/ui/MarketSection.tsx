import { ReactNode } from 'react';
import { SectionHeader } from '../../../shared/ui/SectionHeader';

const Card = ({
    title,
    color,
    image,
    children,
}: {
    title: string;
    color: string;
    image: string;
    children: ReactNode;
}) => (
    <div className='w-full lg:max-w-[590px] flex flex-col md:flex-row items-center md:items-start p-6 md:p-[35px] border rounded-4xl border-(--color-light-grey) gap-5'>
        <div
            className={`size-[45px] md:size-[58px] rounded-2xl ${color} flex-shrink-0 flex items-center justify-center`}
        >
            <img className='size-[25px]' src={image} />
        </div>
        <div>
            <h3 className='text-lg md:text-xl font-semibold text-center md:text-start mb-[17px]'>
                {title}
            </h3>
            <div className='text-sm text-(--color-secondary) text-justify leading-[162%]'>
                {children}
            </div>
        </div>
    </div>
);

export const MarketSection = () => {
    return (
        <section className='container px-6 lg:max-w-7xl mx-auto mt-[80px] md:mt-[135px] h-auto'>
            <SectionHeader
                title='Market Opportunity'
                subtitle='Every industry is vulnerable to identity fraud. The demand for reliable, scalable identity verification solutions has never been higher.'
            ></SectionHeader>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <Card
                    title='&#128176;Finance & Banking – $5.8B Lost to Identity Fraud Annually'
                    color='bg-yellow-300'
                    image='/images/icons/bank.svg'
                >
                    <ul className='list-disc pl-5'>
                        <li>
                            Financial institutions are prime targets for account
                            takeovers, wire fraud, and synthetic identity scams.
                        </li>
                        <li>
                            Deepfake technology is being used to impersonate
                            executives and approve fraudulent transactions.
                        </li>
                        <li>
                            Regulators are demanding stronger authentication
                            (e.g., KYC, AML), creating a massive opportunity for
                            secure identity solutions like ItsMe.
                        </li>
                    </ul>
                </Card>
                <Card
                    title='&#127973;Healthcare – Medical Identity Theft Impacts Millions'
                    color='bg-red-300'
                    image='/images/icons/healthcare.svg'
                >
                    <ul className='list-disc pl-5'>
                        <li>
                            Stolen medical records sell for up to 50x more than
                            credit card data on the dark web.
                        </li>
                        <li>
                            Fraudsters use fake identities to access treatments,
                            prescriptions, and insurance benefits, costing the
                            industry billions.
                        </li>
                        <li>
                            Hospitals and insurers must enhance patient
                            verification to prevent fraud and comply with strict
                            privacy laws.
                        </li>
                    </ul>
                </Card>
                <Card
                    title='&#128181;Legal & Corporate – High-Value Fraud Cases in Contracts & Negotiations'
                    color='bg-green-300'
                    image='/images/icons/legal.svg'
                >
                    <ul className='list-disc pl-5'>
                        <li>
                            Fraudulent actors impersonate executives,
                            authorizing fake deals and contract signings.
                        </li>
                        <li>
                            Fake credentials and identity spoofing undermine
                            trust in sensitive corporate transactions.
                        </li>
                        <li>
                            Law firms and enterprises need secure verification
                            tools to confirm identities in high-stakes
                            negotiations.
                        </li>
                    </ul>
                </Card>
                <Card
                    title='&#127979;Education – Fake Credentials and Diploma Mills'
                    color='bg-blue-300'
                    image='/images/icons/education.svg'
                >
                    <ul className='list-disc pl-5'>
                        <li>
                            Over 300+ diploma mills issue fraudulent degrees and
                            certifications, deceiving employers and
                            institutions.
                        </li>
                        <li>
                            Deepfake video interviews allow scammers to pass
                            remote hiring processes with fake credentials.
                        </li>
                        <li>
                            Universities, employers, and online education
                            platforms need trustworthy digital identity
                            verification to maintain credibility.
                        </li>
                    </ul>
                </Card>
            </div>
        </section>
    );
};
