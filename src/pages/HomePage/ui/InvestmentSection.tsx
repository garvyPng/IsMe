import { SectionHeader } from '../../../shared/ui/SectionHeader';
import { useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { Select } from '../../../shared/ui/Select';
import { BtnPrimary } from '../../../shared/ui/BtnPrimary';

const data = {
    revenue: [
        { date: '2024-01-01', value: 500 },
        { date: '2024-02-01', value: 700 },
        { date: '2024-03-01', value: 900 },
    ],
    users: [
        { date: '2024-01-01', value: 200 },
        { date: '2024-02-01', value: 400 },
        { date: '2024-03-01', value: 600 },
    ],
};

const metrics: { value: 'revenue' | 'users'; label: string }[] = [
    { value: 'revenue', label: 'Revenue' },
    { value: 'users', label: 'Users' },
];

const dates = [
    { value: '2024-01-01', label: 'January 2024' },
    { value: '2024-02-01', label: 'February 2024' },
    { value: '2024-03-01', label: 'March 2024' },
];

export const InvestmentSection = () => {
    const [selectedMetric, setSelectedMetric] =
        useState<(typeof metrics)[number]['value']>('revenue');
    const [selectedDate, setSelectedDate] = useState(dates[0].value);

    return (
        <section className='container px-6 lg:max-w-7xl mx-auto mt-[80px] md:mt-[135px] h-auto'>
            <SectionHeader
                title='Investment Opportunity'
                subtitle='Fraud prevention is no longer an option—it’s a necessity. With AI-driven scams growing at an alarming rate, businesses and individuals are in urgent need of a trust verification system.'
            />
            <div className='flex flex-col lg:flex-row justify-between gap-6 items-center'>
                <div className='w-full lg:w-1/2 mx-auto p-6 bg-white rounded-xl shadow-lg'>
                    <div className='flex gap-4 mb-6'>
                        {/* Выбор метрики */}
                        <Select
                            options={metrics}
                            selectedValue={selectedMetric}
                            onChange={setSelectedMetric}
                        />

                        {/* Выбор даты */}
                        <Select
                            options={dates}
                            selectedValue={selectedDate}
                            onChange={setSelectedDate}
                        />
                    </div>

                    {/* График */}
                    <ResponsiveContainer width='100%' height={300}>
                        <LineChart data={data[selectedMetric]}>
                            <XAxis dataKey='date' />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type='monotone'
                                dataKey='value'
                                stroke='#2563eb'
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className='lg:w-1/2 mx-auto leading-[162%]'>
                    <h4 className='font-semibold'>
                        Join the Mission – Invest in the Future
                    </h4>
                    <span className='text-(--color-secondary)'>
                        Exclusive Early Investor Benefits:
                    </span>
                    <ul className='list-disc pl-5 text-(--color-secondary)'>
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
                    <p className='text-(--color-secondary)'>
                        Be part of the next big revolution in digital security.
                        <br />
                        Funding Goal: $5M
                    </p>
                    <ul className='pl-5 text-(--color-secondary)'>
                        <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-sm before:bg-red-300 before:content-['']">
                            45% – Product development
                        </li>
                        <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-sm before:bg-blue-300 before:content-['']">
                            30% – Go-to-market strategy & business expansion
                        </li>
                        <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-sm before:bg-green-300 before:content-['']">
                            15% – Infrastructure & security upgrades
                        </li>
                        <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-sm before:bg-yellow-300 before:content-['']">
                            10% – Team & talent acquisition
                        </li>
                    </ul>
                </div>
            </div>

            <div className='mt-10 flex justify-center gap-x-6'>
                <input
                    className='appearance-none block max-w-[130px] border border-(--color-light-grey) rounded-md py-3 px-4 leading-tight focus:outline-none'
                    id='grid-first-name'
                    type='text'
                    placeholder='100$'
                />
                <BtnPrimary>Invest Now</BtnPrimary>
            </div>
        </section>
    );
};
