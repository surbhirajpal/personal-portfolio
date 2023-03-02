import Introduction from './components/Introduction';
import Service from './components/Service';
import SubHero from './components/SubHero';

const Home = () => {
    const screenHeight = window.innerHeight;
    const sectionHeight = screenHeight - 100;
    
    return (
        <>
            <Introduction sectionHeight={sectionHeight} />
            <Service />
            <SubHero sectionHeight={sectionHeight}/>
        </>
    );
};

export default Home;

