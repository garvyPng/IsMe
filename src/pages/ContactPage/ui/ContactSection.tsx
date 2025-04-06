'use client';

import { useForm } from 'react-hook-form';
import { BtnPrimary } from '../../../shared/ui/BtnPrimary';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';

const countries = [
    { value: '+1', img: 'https://flagcdn.com/w40/us.png', name: 'USA' },
    { value: '+44', img: 'https://flagcdn.com/w40/gb.png', name: 'UK' },
    { value: '+49', img: 'https://flagcdn.com/w40/de.png', name: 'Germany' },
    { value: '+33', img: 'https://flagcdn.com/w40/fr.png', name: 'France' },
    { value: '+39', img: 'https://flagcdn.com/w40/it.png', name: 'Italy' },
    { value: '+34', img: 'https://flagcdn.com/w40/es.png', name: 'Spain' },
    { value: '+81', img: 'https://flagcdn.com/w40/jp.png', name: 'Japan' },
    { value: '+86', img: 'https://flagcdn.com/w40/cn.png', name: 'China' },
    { value: '+7', img: 'https://flagcdn.com/w40/ru.png', name: 'Russia' },
    { value: '+91', img: 'https://flagcdn.com/w40/in.png', name: 'India' },
];

interface FormValues {
    name: string;
    surname: string;
    email: string;
    phone: string;
    message: string;
}

export const ContactSection = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();
    const onSubmit = async (data: FormValues) => {
        try {
            const response = await fetch('https://example.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Error while sending data');
            }

            return await response.json();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const [isCountryPhoneOpen, setIsCountryPhoneOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);

    return (
        <section className='container px-6 lg:max-w-7xl mx-auto mt-[50px] md:mt-[135px] h-auto flex lg:flex-row justify-center gap-x-8'>
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7515.632279649089!2d13.39335183504465!3d52.47394645961083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2z0JHQtdGA0LvQuNC9LCDQk9C10YDQvNCw0L3QuNGP!5e0!3m2!1sru!2sch!4v1743854405580!5m2!1sru!2sch'
                className='w-full lg:w-1/2 hidden'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='w-full md:w-2/3 lg:w-1/2'
            >
                <div className='flex flex-col md:flex-row gap-x-3 mb-2'>
                    <div className='w-full md:w-1/2'>
                        <label
                            className='block tracking-wide text-xs font-semibold mb-2'
                            htmlFor='contact_name'
                        >
                            Name
                        </label>
                        <input
                            {...register('name', {
                                required: 'Name is required',
                                maxLength: {
                                    value: 80,
                                    message: 'Name is too long',
                                },
                            })}
                            className={`w-full appearance-none block  bg-slate-100 border ${
                                errors.name
                                    ? 'border-red-500'
                                    : 'border-slate-200'
                            } rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white`}
                            id='contact_name'
                            type='name'
                            placeholder='John'
                        />
                        {typeof errors.name?.message === 'string' && (
                            <p className=' text-red-500 text-xs italic'>
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                    <div className='w-full md:w-1/2'>
                        <label
                            className='block tracking-wide text-xs font-semibold mb-2'
                            htmlFor='contact_surname'
                        >
                            Surname
                        </label>
                        <input
                            {...register('surname', {
                                required: 'Surname is required',
                                maxLength: {
                                    value: 80,
                                    message: 'Surname is too long',
                                },
                            })}
                            className={`w-full appearance-none block bg-slate-100 border ${
                                errors.surname
                                    ? 'border-red-500'
                                    : 'border-slate-200'
                            } rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white`}
                            id='contact_surname'
                            type='text'
                            placeholder='Doe'
                        />
                        {typeof errors.surname?.message === 'string' && (
                            <p className=' text-red-500 text-xs italic'>
                                {errors.surname.message}
                            </p>
                        )}
                    </div>
                </div>

                <div>
                    <label
                        className='block tracking-wide text-xs font-semibold mb-2 mt-3'
                        htmlFor='contact_email'
                    >
                        Email
                    </label>
                    <input
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message:
                                    'Email must be in the format name@.gmail.com',
                            },
                        })}
                        className={`appearance-none block w-full bg-slate-100 border ${
                            errors.email ? 'border-red-500' : 'border-slate-200'
                        } rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white`}
                        id='contact_email'
                        type='text'
                        placeholder='itsme@gmail.com'
                    />
                    {typeof errors.email?.message === 'string' && (
                        <p className='mb-2 text-red-500 text-xs italic'>
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div>
                    <label
                        className='block tracking-wide text-xs font-semibold mb-2 mt-3'
                        htmlFor='contact_num'
                    >
                        Phone number
                    </label>
                    <div>
                        <div className='flex mb-1'>
                            <div className='relative flex items-center'>
                                <button
                                    id='dropdown-phone-button'
                                    data-dropdown-toggle='dropdown-phone'
                                    className='h-full z-10 inline-flex  items-center py-3 px-4 text-sm font-medium text-center space-x-2 text-gray-900 bg-slate-100 border border-slate-300 rounded-s hover:bg-slate-200  focus:outline-none'
                                    type='button'
                                    onClick={() =>
                                        setIsCountryPhoneOpen((prev) => !prev)
                                    }
                                >
                                    <img
                                        className='w-5 h-3'
                                        src={selectedCountry.img}
                                        alt=''
                                    />
                                    {selectedCountry.value}{' '}
                                    <span
                                        className={`transform transition-transform mr-3`}
                                    >
                                        <ChevronDownIcon
                                            aria-hidden='true'
                                            className=' size-5 sm:size-4'
                                        />
                                    </span>
                                </button>
                                {isCountryPhoneOpen && (
                                    <div
                                        id='dropdown-phone'
                                        className='absolute left-0 top-15 max-h-50 overflow-y-scroll z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-52 dark:bg-gray-700'
                                    >
                                        <ul
                                            className='py-2 text-sm text-gray-700 dark:text-gray-200'
                                            aria-labelledby='dropdown-phone-button'
                                        >
                                            {countries.map((country) => (
                                                <li key={country.name}>
                                                    <button
                                                        type='button'
                                                        className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                                                        role='menuitem'
                                                        onClick={() => {
                                                            setSelectedCountry(
                                                                country
                                                            );
                                                            setIsCountryPhoneOpen(
                                                                false
                                                            );
                                                        }}
                                                    >
                                                        <span className='inline-flex items-center'>
                                                            <img
                                                                className='w-5 h-3 mr-3'
                                                                src={
                                                                    country.img
                                                                }
                                                                alt={
                                                                    country.name
                                                                }
                                                            />
                                                            {country.name +
                                                                ' (' +
                                                                country.value +
                                                                ') '}
                                                        </span>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <input
                                {...register('phone', {
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^(?:\d{11}|\d{3}-\d{2}-\d{2}-\d{4})$/,
                                        message:
                                            'Phone number must be in the format 00000000000 or 000-00-00-0000',
                                    },
                                })}
                                className={`appearance-none block w-full bg-slate-100 border ${
                                    errors.phone
                                        ? 'border-red-500'
                                        : 'border-slate-200'
                                } rounded-e py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
                                id='contact_num'
                                type='tel'
                                placeholder='000-000-0000'
                            />
                        </div>

                        {typeof errors.phone?.message === 'string' && (
                            <p className='mb-2 text-red-500 text-xs italic'>
                                {errors.phone.message}
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <label
                        className='block tracking-wide text-xs font-semibold mb-2 mt-3'
                        htmlFor='contact_password'
                    >
                        Desctibe your case
                    </label>
                    <textarea
                        {...register('message', {
                            required: 'Message is required',
                            maxLength: {
                                value: 5000,
                                message: 'Message is too long',
                            },
                        })}
                        className={`appearance-none block w-full h-50 min-h-12 max-h-100 bg-slate-100 border ${
                            errors.message
                                ? 'border-red-500'
                                : 'border-slate-200'
                        } rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white`}
                        id='contact_password'
                        placeholder='Tell us about your use case...'
                    />
                    {typeof errors.message?.message === 'string' && (
                        <p className='mb-2 text-red-500 text-xs italic'>
                            {errors.message.message}
                        </p>
                    )}
                </div>
                <BtnPrimary add='w-full py-[16px] uppercase font-semibold mb-2 text-sm mt-3'>
                    Submit
                </BtnPrimary>
            </form>
        </section>
    );
};
