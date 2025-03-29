import { createPortal } from 'react-dom';
import { SectionHeader } from '../../../shared/ui/SectionHeader';
import { BtnPrimary } from '../../../shared/ui/BtnPrimary';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

interface LoginModalProps {
    open: boolean;
    onClose: () => void;
    switchToLogin: () => void;
}

export const LoginModal = ({
    open,
    onClose,
    switchToLogin,
}: LoginModalProps) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const modalRoot = document.getElementById('modal');
    const dialog = useRef<HTMLDialogElement>(null);

    const {
        register,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (dialog.current) {
            if (open) {
                dialog.current.showModal();
            } else {
                dialog.current.close();
            }
        }
    }, [open]);

    useEffect(() => {
        const savedEmail = localStorage.getItem('rememberedEmail');
        if (savedEmail) {
            setEmail(savedEmail);
            setRememberMe(true);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (rememberMe) {
            localStorage.setItem('rememberedEmail', email);
        } else {
            localStorage.removeItem('rememberedEmail');
        }
    };

    if (!modalRoot) return null;

    return createPortal(
        <dialog
            ref={dialog}
            className='min-w-full md:min-w-100 mx-auto my-auto py-8 px-6 rounded-xl text-(--color-primary) shadow-2xl'
        >
            {open ? (
                <form onSubmit={handleSubmit}>
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
                                    required: true,
                                    pattern: /^\S+@\S+$/i,
                                })}
                                className={`appearance-none block w-full bg-slate-100 border ${
                                    errors.email
                                        ? 'border-red-500'
                                        : 'border-slate-200'
                                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id='login_email'
                                type='text'
                                placeholder='itsme@gmail.com'
                            />
                        </div>
                        <div>
                            <label
                                className='block tracking-wide text-xs font-semibold mb-2'
                                htmlFor='login_password'
                            >
                                Password
                            </label>
                            <input
                                {...register('name', {
                                    required: true,
                                    maxLength: 80,
                                })}
                                className={`appearance-none block w-full bg-slate-100 border ${
                                    errors.name
                                        ? 'border-red-500'
                                        : 'border-slate-200'
                                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                id='login_password'
                                type='password'
                                placeholder='Your password'
                            />
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
