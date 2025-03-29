import { PageIntro } from '../../../shared/ui/PageIntro';
import { PreRegister } from '../../../shared/ui/PreRegister';
import { NewsContent } from './NewsContent';

export const NewsPage = () => {
    return (
        <>
            <PageIntro
                title="What's"
                coloredTitle='New'
                subtitle='The revolutionary fraud prevention technology that will redefine digital trust. The revolutionary fraud prevention technology that will redefine digital trust.'
            />
            <NewsContent />
            <PreRegister />
        </>
    );
};
