import { BentoGrid } from '@/components/ui/bento-grid';
import ClientCollaboration from './grid-items/client-collaboration';
import Communication from './grid-items/communication';
import CurrentlyBuilding from './grid-items/currently-bulding';
import DevelopmentPassion from './grid-items/development-passion';
import TechStack from './grid-items/tech-stack';
import WorkTogether from './grid-items/work-together';

const About = () => {
    return (
        <section id='about'>
            <BentoGrid>
                <ClientCollaboration />
                <Communication />
                <TechStack />
                <DevelopmentPassion />
                <CurrentlyBuilding />
                <WorkTogether />
            </BentoGrid>
        </section>
    );
};

export default About;
