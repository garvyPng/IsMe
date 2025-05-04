import { createPortal } from 'react-dom';
import { SectionHeader } from '../../../shared/ui/SectionHeader';
import { BtnPrimary } from '../../../shared/ui/BtnPrimary';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid';
import { supabase } from '../../../shared/lib/supabase';

interface LoginModalProps {
    open: boolean;
    onClose: () => void;
    switchToLogin: () => void;
}

interface FormValues {
    email: string;
    password: string;
}

export const LoginModal = ({
    open,
    onClose,
    switchToLogin,
}: LoginModalProps) => {
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const modalRoot = document.getElementById('modal');
    const dialog = useRef<HTMLDialogElement>(null);
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            email: localStorage.getItem('rememberedEmail') || '',
            password: localStorage.getItem('rememberedPassword') || '',
        },
    });

    useEffect(() => {
        if (dialog.current) {
            if (open) {
                dialog.current.showModal();
            } else {
                dialog.current.close();
            }
        }
    }, [open]);

    const onSubmit = async (data: FormValues) => {
        try {
            const { data: sessionData, error } =
                await supabase.auth.signInWithPassword({
                    email: data.email.trim(),
                    password: data.password,
                });

            if (error) {
                setError(error.message);
                console.error('Login error:', error.message);
                return;
            }

            console.log('Logged in user:', sessionData);
            onClose();
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Unknown error.');
            }
        }
    };

    if (!modalRoot) return null;

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
                    <SectionHeader title={'Welcome Back'} />
                    <div className='-mt-[40px]'>
                        <div>
                            <label
                                className='block tracking-wide text-xs font-semibold mb-2'
                                htmlFor='login_email'
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
                                id='login_email'
                                type='text'
                                placeholder='itsme@gmail.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
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
                        <div className='flex flex-row justify-between text-xs'>
                            <div className='flex items-center'>
                                <input
                                    type='checkbox'
                                    id='rememberMe'
                                    className='mr-2'
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                <label htmlFor='rememberMe'>Remember Me</label>
                            </div>
                            <a href='#'>Forgot password?</a>
                        </div>

                        <BtnPrimary add='w-full py-[16px] uppercase font-semibold text-sm mt-3'>
                            Submit
                        </BtnPrimary>
                        {error && (
                            <p className='mb-2 text-red-500 text-xs italic'>
                                {error}
                            </p>
                        )}
                    </div>
                    <p className='text-center mx-auto my-6'>or log in with</p>
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
                        Do not have an account?{' '}
                        <button
                            onClick={switchToLogin}
                            className='text-blue-500 hover:underline'
                        >
                            {' '}
                            Sign Up
                        </button>
                    </p>
                </form>
            ) : null}
        </dialog>,
        modalRoot
    );
};
