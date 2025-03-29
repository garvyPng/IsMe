import { PageIntro } from '../../../shared/ui/PageIntro';
import { PreRegister } from '../../../shared/ui/PreRegister';
import { AboutPlayer } from './AboutPlayer';
import { Founders } from './Founders';
import { News } from './News';
import { Story } from './Story';
import { Values } from './Values';

export const AboutPage = () => {
    return (
        <>
            <PageIntro
                title='About our'
                coloredTitle='Company'
                subtitle='The revolutionary fraud prevention technology that will redefine digital trust. The revolutionary fraud prevention technology that will redefine digital trust.'
            />
            <AboutPlayer />
            <Story />
            <Values />
            <Founders />
            <News />
            <PreRegister />
        </>
    );
};
