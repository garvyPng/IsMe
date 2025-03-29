import { useState } from 'react';
import { PlayBtn } from '../../../shared/ui/PlayBtn';
import { VideoPlayer } from '../../../shared/ui/VideoPlayer';

export const AboutPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoUrl = 'https://www.youtube.com/watch?v=KZGWfHdfWQs';
    return (
        <div className='container px-6 lg:max-w-7xl mx-auto mt-[80px] h-auto flex flex-col md:flex-row gap-y-6 items-start lg:justify-between align-middle'>
            <div className='w-full flex gap-y-6 order-1 lg:order-0 md:ml-6 lg:ml-0 lg:mr-6 flex-col justify-between'>
                <div className='relative flex justify-center items-center'>
                    <img
                        className='w-full object-cover max-h-60 rounded-2xl'
                        src='/images/video.jpg'
                    />
                    <div className='absolute'>
                        <PlayBtn onClick={() => setIsPlaying(true)} />
                        {isPlaying && (
                            <VideoPlayer
                                videoUrl={videoUrl}
                                onClose={() => setIsPlaying(false)}
                            />
                        )}
                    </div>
                </div>
                <div className='flex flex-col gap-y-4 mx-auto text-center'>
                    <div className='w-[87px] h-[3px] mx-auto bg-gradient-to-r from-blue-300 from-40% to-green-300 '></div>
                    <p className='max-w-[430px] text-sm lg:text-base font-light italic text-blue-300 leading-[30px]'>
                        "Simform is quick to identify larger problem with the
                        Software so we decided to expand our scope to build new
                        modules"
                    </p>
                </div>
            </div>
        </div>
    );
};
