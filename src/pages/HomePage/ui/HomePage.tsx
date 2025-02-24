import { PreRegister } from '../../../shared/ui/PreRegister';
import { HeroSection } from './HeroSection';
import { ImagesSection } from './ImagesSection';
import { InvestmentSection } from './InvestmentSection';
import { LauncherSection } from './LauncherSection';
import { MarketSection } from './MarketSection';
import { ProblemSection } from './ProblemSection';
import { Questions } from './Questions';
import { SolutionSection } from './SolutionSection';
import { TrustedBy } from './TrustedBy';
import { WhynowSection } from './WhynowSection';

export const HomePage = () => {
    return (
        <>
            <HeroSection />
            <TrustedBy />
            <ProblemSection />
            <SolutionSection />
            <WhynowSection />
            <ImagesSection />
            <MarketSection />
            <InvestmentSection />
            <LauncherSection />
            <Questions />
            <PreRegister />
        </>
    );
};
