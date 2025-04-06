import { createPortal } from 'react-dom';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
    videoUrl: string;
    onClose: () => void;
}

export const VideoPlayer = ({ videoUrl, onClose }: VideoPlayerProps) => {
    const overlayElement = document.getElementById('overlay');

    if (!overlayElement) return null;
    return createPortal(
        <div
            className={`fixed flex justify-center items-center w-full h-full top-0 bg-black/80`}
        >
            <div className='w-[720px] h-[480px] relative'>
                <ReactPlayer
                    url={videoUrl}
                    playing
                    controls
                    width='100%'
                    height='100%'
                />
                <button
                    onClick={onClose}
                    className=' text-white text-2xl absolute -top-[27px] right-5 md:-right-[25px] cursor-pointer'
                >
                    &times;
                </button>
            </div>
        </div>,
        overlayElement as Element
    );
};
