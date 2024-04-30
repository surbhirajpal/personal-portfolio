import './Skills.less';

import ReactImage from '../../../../public/images/works/react.png';
import AntDesignImage from '../../../../public/images/works/ant-design.png';
import CSSImage from '../../../../public/images/works/css.png';
import HTMLImage from '../../../../public/images/works/html.png';
import JavascriptImage from '../../../../public/images/works/javascript.png';
import TypescriptImage from '../../../../public/images/works/typescript.png';
import FramerMotionImage from '../../../../public/images/works/framer-motion.png';
import GitImage from '../../../../public/images/works/git.png';
import LessImage from '../../../../public/images/works/less.png';
import SassImage from '../../../../public/images/works/sass.png';
import StoryBookImage from '../../../../public/images/works/storybook.png';

import UxImage from '../../../../public/images/works/UX.png';
import FigmaImage from '../../../../public/images/works/figma.png';
import DoraImage from '../../../../public/images/works/dora.png';
import creativeImage from '../../../../public/images/works/creative-cloud.png';

const Skills = () => {

    const skills = {
        tech : [
            {
                id: 'react',
                image: ReactImage
            },
            {
                id: 'ant-design',
                image: AntDesignImage
            },
            {
                id: 'css',
                image: CSSImage
            },
            {
                id: 'html',
                image: HTMLImage
            },
            {
                id: 'javascript',
                image: JavascriptImage
            },
            {
                id: 'typescript',
                image: TypescriptImage
            },
            {
                id: 'framer-motion',
                image: FramerMotionImage
            },
            {
                id: 'git',
                image: GitImage
            },
            {
                id: 'less',
                image: LessImage
            },
            {
                id: 'sass',
                image: SassImage
            },
            {
                id: 'storybook',
                image: StoryBookImage
            },
        ],
        design : [
            {
                id: 'UX',
                image: UxImage
            },
            {
                id: 'figma',
                image: FigmaImage
            },
            {
                id: 'dora',
                image: DoraImage
            },
            {
                id: 'creative-cloud',
                image: creativeImage
            },
        ]
    }

   

    return (
        <section className='skills'>
            <div className='skills__holder padding-stripe'>
                <div className='container'>
                    <h1 className='skills__title'>{'SKILLS'}</h1>
                    <div className='skills__wrapper'>
                        {
                            skills.tech.map((item, index) => {
                                return (
                                    <div className='skills__content'>
                                        <div className='skills__image'>
                                            <img
                                                key={index}
                                                src={item.image}
                                                data-type={item.id}
                                            />
                                        </div>
                                        <p className='skills__name'>{item.id}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='skills__wrapper design'>
                    {
                            skills.design.map((item, index) => {
                                return (
                                    <div className='skills__content design'>
                                        <div className='skills__image design'>
                                            <img
                                                key={index}
                                                src={item.image}
                                                data-type={item.id}
                                            />
                                        </div>
                                        <p className='skills__name'>{item.id}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;