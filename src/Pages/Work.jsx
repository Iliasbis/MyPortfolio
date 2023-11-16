import React, { useState } from 'react'
import atec from '../Assets/Projects/atec.png'
import brand from '../Assets/Projects/brandApp1.png'
import chatapp from '../Assets/Projects/chatapp.png'
import crud from '../Assets/Projects/crud-app.jpeg'
import erp from '../Assets/Projects/flutterErpSchool.png'
import hotelbooking from '../Assets/Projects/hotelbooking.png'
import instagram from '../Assets/Projects/instagramRedesign.png'
import portfolio from '../Assets/Projects/portfolio.png'
import simplePortfolio from '../Assets/Projects/simplePortfolio.png'
import snake from '../Assets/Projects/snakgame.png'
import spotify from '../Assets/Projects/spotifyUi.png'
import weather from '../Assets/Projects/weather-app.jpeg'
export const Work = () => {
    const allProjects = [
        {
            projectName: "Portfolio",
            projectImage: portfolio,
            githubLink:'',
            youtubeLink:'',
            technologie: [
                'html', 'css', 'TailwindCss', 'ReactJs','EmailJs'
            ],
            category: 'Web Project'
        },
        {
            projectName: "Atec Mobile App",
            projectImage: atec,
            githubLink:'',
            youtubeLink:'',
            technologie: [
                'Flutter', 'Dart', 'OOP',
            ],
            category: 'Mobile Project'
        },
        {
            projectName: "Store Website",
            projectImage: brand,
            githubLink:'https://github.com/Iliasbis/React-Brand-App',
            youtubeLink:'',
            technologie: [
                'ReactJS', 'css', 'TailwindCss', 'javascript','PHP','MySQL',
            ],
            category: 'Web Project'
        },
        {
            projectName: "Flutter Hotel Booking UI",
            projectImage: hotelbooking,
            githubLink:'https://github.com/Iliasbis/Flutter_Hotel_Booking_UI',
            youtubeLink:'https://www.youtube.com/watch?v=cVGJOCC_3tI',
            technologie: [
                'Dart', 'Flutter', 'OOP',
            ],
            category: 'Mobile Project'
        },
        {
            projectName: "Chat App",
            projectImage: chatapp,
            githubLink:'',
            youtubeLink:'https://www.youtube.com/watch?v=qJCrFHwd37E&t=58s',
            technologie: [
                'Flutter', 'FireBase', 'OOP', 'Dart',
            ],
            category: 'Mobile Project'
        },
        {
            projectName: "React CRUD App",
            projectImage: crud,
            githubLink:'https://github.com/Iliasbis/React-Crud-App',
            youtubeLink:'',
            technologie: [
                'ReactJS', 'css', 'TailwindCss', 'javascript','Redux',
            ],
            category: 'Web Project'
        },
        {
            projectName: "School ERP UI",
            projectImage: erp,
            githubLink:'https://github.com/Iliasbis/Flutter_School_erp_UI',
            youtubeLink:'',
            technologie: [
                'Flutter', 'OOP', 'Dart',
            ],
            category: 'Mobile Project'
        },
        {
            projectName: "Instagram Redesign UI",
            projectImage: instagram,
            githubLink:'https://github.com/Iliasbis/Flutter_instagram_redesign',
            youtubeLink:'https://www.youtube.com/watch?v=H99Of2GqdU0&t=54s',
            technologie: [
                'Flutter', 'OOP', 'Dart',
            ],
            category: 'Mobile Project'
        },
        {
            projectName: "Snake Game",
            projectImage: snake,
            githubLink:'https://github.com/Iliasbis/Flutter-Snake-Game',
            youtubeLink:'',
            technologie: [
                'Flutter', 'OOP', 'Dart',
            ],
            category: 'Mobile Project'
        },
        {
            projectName: "Simple Portfolio",
            projectImage: simplePortfolio,
            githubLink:'https://github.com/Iliasbis/React-Portfolio-App',
            youtubeLink:'',
            technologie: [
                'ReactJS', 'css', 'TailwindCss', 'javascript',
            ],
            category: 'Web Project'
        },
        {
            projectName: "Spotify UI",
            projectImage: spotify,
            githubLink:'https://github.com/Iliasbis/Spotify-Ui',
            youtubeLink:'https://www.youtube.com/watch?v=Vla0MYJn2p8',
            technologie: [
                'Flutter', 'OOP', 'Dart',
            ],
            category: 'Mobile Project'
        },
        
        
        {
            projectName: "Weather App",
            projectImage: weather,
            githubLink:'https://github.com/Iliasbis/React-Weather-App',
            youtubeLink:'',
            technologie: [
                'ReactJS', 'css', 'TailwindCss', 'javascript','WeatherAPI',
            ],
            category: 'Web Project'
        },
    ];

    const [projects, setProjects] = useState(allProjects);
    const [activeCategory, setActiveCategory] = useState('all');

    const filterProjects = (category) => {
        if (category === 'all') {
            setProjects(allProjects);
        } else {
            const filteredProjects = allProjects.filter(project => project.category === category);
            setProjects(filteredProjects);
        }
        setActiveCategory(category);
    };
    return (
        <div id='work' className='h-fit w-full bg-slate-200 flex flex-col items-center py-10 '>
            <h1 className='text-3xl sm:text-5xl font-semibold my-10 text-center'>My Creative <span className='text-teal-500'>Project</span></h1>
            <div className='flex gap-x-7 '>
                <button onClick={() => filterProjects('all')} className={activeCategory === 'all' ? 'bg-teal-600 border  rounded-lg  h-10 px-4 text-white font-semibold text-sm ' : ' font-semibold text-sm rounded-lg h-10 px-4 bt'}>All</button>
                <button onClick={() => filterProjects('Web Project')} className={activeCategory === 'Web Project' ? 'bg-teal-600 rounded-lg h-10 px-4 text-white font-semibold text-sm' : 'font-semibold text-sm rounded-lg h-10 px-4 bt'}>Web Project</button>
                <button onClick={() => filterProjects('Mobile Project')} className={activeCategory === 'Mobile Project' ? 'bg-teal-600 rounded-lg h-10 px-4 text-white font-semibold text-sm' : 'font-semibold text-sm rounded-lg h-10 px-4 bt'}>Mobile Project</button>
            </div>

            <div className='flex flex-wrap justify-center w-screen gap-x-10 gap-y-10 my-8 cursor-pointer'>
                {
                    projects.map((e,i) => {
                        return (
                            <div className='bg-white p-4 rounded-xl w-[300px] md:w-1/4 h-fit ' key={i}>
                                <div className={`w-full bg-gray-300 h-60 bg-center bg-contain bg-no-repeat rounded-xl relative`} style={{ backgroundImage: `url(${e.projectImage})` }}>
                                    <div className='absolute bottom-0 title z-40 rounded-t-xl self-center bg-white w-32 h-6'>
                                        <p className='text-center text-gray-500 font-semibold'>{e.category}</p>
                                    </div>
                                    <div className='w-full h-60 work flex justify-center items-center gap-x-4 rounded-xl '>
                                        <div className='bg-white p-1 rounded-full btnwork'>
                                            <a href={`${e.youtubeLink}`} target='_blank'>
                                            <div className='w-10 h-10 bg-gray bg-eye bg-center bg-no-repeat bg-contain rounded-full workbtn'></div>

                                            </a>
                                        </div>
                                        <div className='bg-white p-1 rounded-full btnwork'>
                                           <a href={`${e.githubLink}`} target='_blank'>
                                                 <div className='w-10 h-10  bg-github bg-center bg-no-repeat bg-contain rounded-full workbtn'></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <p className='text-center py-3 text-xl font-semibold'>{e.projectName}</p>
                                <div className='flex gap-4 w-full flex-wrap '>
                                    {e.technologie.map(t => {
                                        return <div className='bg-gray-300 px-3 rounded-md py-1 tech'>{t}</div>
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
