const trustedServices = [
    { name: 'Telegram', icon: '/images/icons/telegram.svg' },
    { name: 'WhatsApp', icon: '/images/icons/whatsApp.svg' },
    { name: 'Telegram', icon: '/images/icons/telegram.svg' },
    { name: 'WhatsApp', icon: '/images/icons/whatsApp.svg' },
];

const TrustedItem = ({ name, icon }: { name: string; icon: string }) => (
    <div className='flex items-center gap-2 md:p-3'>
        <img
            src={icon}
            alt={name}
            className='size-[25px] md:size-[30px] lg:size-[40px]'
        />
        <span className='text-base md:text-lg text-(--color-secondary)'>
            {name}
        </span>
    </div>
);

export const TrustedBy = () => {
    return (
        <div className='container px-6 lg:max-w-7xl mx-auto mt-[80px] md:mt-[135px]'>
            <div
                className='w-auto h-auto md:h-[184px] flex flex-col gap-y-3 lg:flex-row justify-center lg:justify-between items-center p-6 lg:px-[110px] font-semibold text-lg lg:text-xl rounded-2xl'
                style={{
                    boxShadow:
                        '0px 4px 10px rgba(0, 0, 0, 0.1), 0px -4px 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <span className='text-base lg:text-lg font-semibold text-gray-900'>
                    Trusted By
                </span>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                    {trustedServices.map((service, index) => (
                        <TrustedItem key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};
