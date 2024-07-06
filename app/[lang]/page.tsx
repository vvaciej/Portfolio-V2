'use client';

import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useDocumentTitle from '../helpers/PageTitle';
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ImgCarousel } from '../components/MyImgCarousel';
import { LearningPath } from '../components/LearningBlock';
import { MapBoxBlock } from '../components/MapBoxBlock';
import { Project1Block } from '../components/Project1Block';
import { Project2Block } from '../components/Project2Block';
import { Header } from '../components/Header';
import { AboutMeBlock } from '../components/AboutMeBlock';
import { SpotifyBlock } from '../components/FigmaBlock';

interface params {
	params: {
		lang: string;
	};
}

export default function Home({ params }: params) {
	useEffect(() => {
		document.cookie = `langChoosed=${params.lang}`;
	}, [params.lang]);

	const { t } = useTranslation();
	useDocumentTitle(`Portfolio | Maciek Skokowski`);

	return (
		<>
			{params.lang === 'pl' || params.lang === 'en' ? (
				<div className='bg-[#1c1c1e] h-max w-full text-black'>
					<div className='w-full h-full font-[system-ui] flex items-center flex-col font-semibold text-[#eee]'>
					<Header />
						<div className='w-full sm:h-8 h-7 xl:h-9 bg-[#63e6be] text-[#080808] flex items-center justify-center'>
							<h2 className='sm:text-[1rem] text-sm'>{t('Im available rn')}</h2>
						</div>
						<main className='xl:w-[70rem] md:w-[44rem] xs:w-[22rem] xxs:w-[18rem] w-[91%] sm:w-[30rem] lg:w-[60rem] mt-10 lg:mt-16 h-max md:max-h-[85rem] sm:max-h-[105rem] max-h-[130rem] xl:max-h-[70rem] grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 lg:grid-rows-4 sm:grid-rows-8 grid-rows-[repeat(16,minmax(0,1fr))] md:grid-rows-6 gap-5 md:mb-32 mb-20'>
							<AboutMeBlock />
							<ImgCarousel />
							<LearningPath />
							<div className='w-full h-full bg-[#2C2C2E] p-3 px-6 rounded-[2rem] lg:col-span-1 md:col-span-2 col-span-2 sm:col-span-1'>
								<section className='relative lg:bottom-1 sm:bottom-4 md:bottom-5 flex justify-center flex-col items-center'>
									<img
										className='lg:top-5 sm:top-8 md:top-4 xl:top-6 lg:h-max xs:h-32 h-28 max-h-[7.5rem] md:h-36 sm:h-24 top-[-14%] xs:top-[-40%] sm:relative absolute'
										src='https://i.ibb.co/VpHR2Dr/fb3274a5-f14e-4488-84fe-13cd5238b192.png'
										alt='wsb-merito-warszawa-logo'
									/>
									<p className='xl:text-[1.2rem] md:text-lg lg:text-[1.05rem] font-semibold text-center lg:leading-5 md:leading-6 xs:leading-5 leading-[1.2rem] md:top-[-1rem] lg:top-0 xl:leading-6 sm:mt-3 md:mt-0 relative sm:top-0 xs:top-20 top-[4.5rem]'>
										{t('Second semester college computer science ')}
										<b className='font-bold'>{t('at WSB in Poznań')}</b>
									</p>
								</section>
							</div>
							<SpotifyBlock />
							<MapBoxBlock />
							<Project1Block />
							<Project2Block />
							<a
								href='https://www.instagram.com/vvaciej_/'
								target='_blank'
								className='w-full relative h-full p-4 bg-[#2C2C2E] rounded-[2rem] flex justify-center items-center bg-gradient-to-r from-purple-600 to-orange-400'>
								<FontAwesomeIcon className='h-20' icon={faInstagram} />
								<div className='w-10 h-10 bg-[#00000074] hover:w-12 hover:h-12 flex justify-center items-center n-all rounded-full absolute right-4 bottom-4 sm:right-6 sm:bottom-6 hover:bottom-5 hover:right-5'>
									<FontAwesomeIcon className='h-5 text-orange-50 brightness-90' icon={faArrowRight} />
								</div>
							</a>
							<a
								href='https://github.com/vvaciej'
								target='_blank'
								className='w-full h-full relative p-4 bg-[#171515] rounded-[2rem] flex justify-center items-center lg:col-span-1 md:col-span-2'>
								<FontAwesomeIcon className='h-20' icon={faGithub} />
								<div className='w-10 h-10 bg-[#00000074] hover:w-12 hover:h-12 transition-all rounded-full absolute right-4 bottom-4 sm:right-6 sm:bottom-6 flex items-center justify-center hover:bottom-5 hover:right-5'>
									<FontAwesomeIcon className='h-5 text-orange-50 brightness-90' icon={faArrowRight} />
								</div>
							</a>
						</main>
					</div>
				</div>
			) : (
				''
			)}
		</>
	);
}
