import { PageIntro } from '../../../shared/ui/PageIntro';
import { ContactSection } from './ContactSection';

export const ContactPage = () => {
    return (
        <>
            <PageIntro
                title='Contact'
                coloredTitle='Us'
                subtitle='The revolutionary fraud prevention technology that will redefine digital trust. The revolutionary fraud prevention technology that will redefine digital trust.'
            />
            <ContactSection />
        </>
    );
};
