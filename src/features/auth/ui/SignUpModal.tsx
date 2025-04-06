import { createPortal } from 'react-dom';
import { SectionHeader } from '../../../shared/ui/SectionHeader';
import { BtnPrimary } from '../../../shared/ui/BtnPrimary';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid';

interface SignUpModalProps {
    open: boolean;
    onClose: () => void;
    switchToLogin: () => void;
}

interface FormValues {
    name: string;
    surname: string;
    email: string;
    password: string;
}

export const SignUpModal = ({
    open,
    onClose,
    switchToLogin,
}: SignUpModalProps) => {
    const modalRoot = document.getElementById('modal');
    const dialog = useRef<HTMLDialogElement>(null);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    useEffect(() => {
        if (dialog.current) {
            if (open) {
                dialog.current.showModal();
            } else {
                dialog.current.close();
            }
        }
    }, [open]);

    if (!modalRoot) return null;

    const onSubmit = async (data: FormValues) => {
        try {
            const response = await fetch('https://example.com/api/signup', {
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

    return createPortal(
        <dialog
            ref={dialog}
            className='min-w-full md:min-w-100 mx-auto my-auto py-8 px-6 rounded-xl text-(--color-primary) shadow-2xl'
        >
            {open ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <button
                        onClick={onClose}
                        className='text-(--color-secondary) text-3xl absolute top-[5px] right-[10px] cursor-pointer'
                    >
                        &times;
                    </button>
                    <SectionHeader title={'Create Account'} />
                    <div className='-mt-[40px]'>
                        <div className='flex flex-col md:flex-row gap-x-3 mb-2'>
                            <div className='w-full md:max-w-[170px]'>
                                <label
                                    className='block tracking-wide text-xs font-semibold mb-2'
                                    htmlFor='signup_name'
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
                                    id='signup_name'
                                    type='name'
                                    placeholder='John'
                                />
                                {typeof errors.name?.message === 'string' && (
                                    <p className='text-red-500 text-xs italic'>
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>
                            <div className='w-full md:max-w-[170px]'>
                                <label
                                    className='block tracking-wide text-xs font-semibold mb-2'
                                    htmlFor='signup_surname'
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
                                    id='signup_surname'
                                    type='surname'
                                    placeholder='Doe'
                                />
                                {typeof errors.surname?.message ===
                                    'string' && (
                                    <p className=' text-red-500 text-xs italic'>
                                        {errors.surname.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label
                                className='block tracking-wide text-xs font-semibold mb-2'
                                htmlFor='signup_email'
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
                                    errors.email
                                        ? 'border-red-500'
                                        : 'border-slate-200'
                                } rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white`}
                                id='signup_email'
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
                                htmlFor='sign_password'
                            >
                                Password
                            </label>
                            <div className='relative'>
                                <input
                                    {...register('password', {
                                        required: 'Password is required',
                                        maxLength: {
                                            value: 80,
                                            message: 'Password is too long',
                                        },
                                    })}
                                    className={`appearance-none block w-full bg-slate-100 border ${
                                        errors.password
                                            ? 'border-red-500'
                                            : 'border-slate-200'
                                    } rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white`}
                                    id='sign_password'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Your password'
                                />
                                <button
                                    className='absolute right-3 top-1/2 -translate-y-1/2 text-(--color-secondary)'
                                    type='button'
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? (
                                        <EyeIcon className='size-5' />
                                    ) : (
                                        <EyeSlashIcon className='size-5' />
                                    )}
                                </button>
                            </div>

                            {typeof errors.password?.message === 'string' && (
                                <p className='mb-2 text-red-500 text-xs italic'>
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                        <BtnPrimary add='w-full py-[16px] uppercase font-semibold text-sm mt-3'>
                            Submit
                        </BtnPrimary>
                    </div>
                    <p className='text-center mx-auto my-6'>or sign up with</p>
                    <div className='flex gap-x-4 justify-center'>
                        <button className='size-10 bg-yellow-300 hover:scale-115 transition-all duration-300 ease-in-out  rounded-full flex justify-center items-center'>
                            <img
                                className='size-4'
                                src='/images/icons/youtube.svg'
                            />
                        </button>
                        <button className='size-10 bg-red-300 hover:scale-115 transition-all duration-300 ease-in-out rounded-full flex justify-center items-center'>
                            <img
                                className='size-4'
                                src='/images/icons/facebook.svg'
                            />
                        </button>
                        <button className='size-10 bg-green-300 hover:scale-115 transition-all duration-300 ease-in-out rounded-full flex justify-center items-center'>
                            <img
                                className='size-4'
                                src='/images/icons/media.svg'
                            />
                        </button>
                        <button className='size-10 bg-blue-300 hover:scale-115 transition-all duration-300 ease-in-out rounded-full flex justify-center items-center'>
                            <img
                                className='size-4'
                                src='/images/icons/twiter.svg'
                            />
                        </button>
                    </div>
                    <p className='text-center mx-auto mt-6'>
                        Already have an account?{' '}
                        <button
                            onClick={switchToLogin}
                            className='text-blue-500 hover:underline'
                        >
                            {' '}
                            Log In
                        </button>
                    </p>
                </form>
            ) : null}
        </dialog>,
        modalRoot
    );
};
