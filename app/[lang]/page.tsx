'use client';

import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useDocumentTitle from '../helpers/PageTitle';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface params {
	params: {
		lang: string;
	};
}

export default function Home({ params }: params) {
	const [myImagesTransform, setMyImagesTransform] = useState('firstSlide');

	useEffect(() => {
		document.cookie = `langChoosed=${params.lang}`;
	}, [params.lang]);

	const { t } = useTranslation();
	useDocumentTitle(`Portfolio | Maciek Skokowski`);

	return (
		<>
			{params.lang === 'pl' || params.lang === 'en' ? (
				<div className='bg-[#1c1c1e] h-full w-full text-black'>
					<div className='w-full h-full font-[system-ui] flex items-center flex-col font-semibold text-[#eee]'>
						<header className='xl:h-40 sm:w-full md:h-32 h-full md:py-0 py-8 relative flex items-center justify-center md:flex-row flex-col xs:w-[18rem]'>
							<div className='xl:w-[70rem] lg:w-[60rem] md:w-[44rem] sm:w-[30rem] xs:w-[22rem] xxs:w-[18rem] w-[91%] z-10 relative flex justify-between items-center'>
								<span className='text-[#ffffffc4] xl:text-md text-sm leading-4'>&copy; 2024 maciejskok</span>
								<nav className='md:flex hidden h-full w-max md:w-max py-1 ml-16 bg-[#131315] px-[.3rem] rounded-full'>
									<button className='h-full w-max bg-[#2C2C2E] px-4 py-1 rounded-full xl:text-md text-sm'>
										{t('Home page')}
									</button>
								</nav>
								<a
									href='mailto:maciejskok@proton.me'
									className='border-4 border-blue-500 py-1 xs:px-4 px-2 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 text-white cursor-pointer hover:scale-105 transition-all xl:text-md xs:text-sm text-[.85rem]'>
									maciejskok@proton.me
								</a>
							</div>
							<nav className='h-full md:hidden w-max md:w-[10rem] xl:w-[15rem] py-1 bg-[#131315] px-[.3rem] rounded-full flex mt-4'>
								<button className='h-full w-full bg-[#2C2C2E] px-4 py-1 rounded-full xl:text-md text-sm'>
									{t('Home page')}
								</button>
							</nav>
						</header>
						<div className='w-full sm:h-8 h-7 xl:h-9 bg-[#63e6be] text-[#080808] flex items-center justify-center'>
							<h2 className='sm:text-[1rem] text-sm'>{t('Im available rn')}</h2>
						</div>
						<main className='xl:w-[70rem] md:w-[44rem] xs:w-[22rem] xxs:w-[18rem] w-[91%] sm:w-[30rem] lg:w-[60rem] mt-10 lg:mt-16 h-full grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 lg:grid-rows-4 sm:grid-rows-8 grid-rows-[repeat(16,minmax(0,1fr))] md:grid-rows-6 gap-5 md:mb-32 mb-20'>
							<div className='w-full h-full bg-[#2C2C2E] col-span-2 sm:row-span-1 row-span-2 rounded-[2rem] xl:py-3 sm:py-2 xl:pt-7 sm:pt-3 sm:px-4 xs:px-8 xs:py-8 py-5 px-5 flex sm:items-center justify-center flex-col'>
								<h1 className='xl:text-5xl lg:text-4xl xs:text-[1.9rem] text-[1.64rem] sm:text-3xl leading-7 font-extrabold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent select-none sm:mr-0 md:mr-3'>
									Maciek Skokowski
								</h1>
								<p className='xl:mt-1 lg:text-xl text-lg sm:text-lg xl:text-[1.32rem] select-none leading-5 sm:mb-0 mb-1 sm:mt-0 mt-1'>
									{t('Self taught, front-end developer in Warsaw')}
								</p>
								<p className='font-normal sm:text-center xl:mt-3 lg:mt-2 mt-1 text-[0.86rem] select-none leading-5 xl:text-[1rem]'>
									{t(
										"Hey! I'm Maciek, I'm 20 years old and my passion is programming websites which I've been learning to do for over a year. I would be happy to program you a business card or more complex website at a very low price, contact me by email or phone :)."
									)}
								</p>
								<section className='xl:mt-8 sm:mt-4 mt-6'>
									<a
										href='tel:+48795369308'
										className='border-4 border-blue-500 py-1 px-4 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 text-white xl:text-[1rem] sm:text-sm xs:text-md text-[.88rem] cursor-pointer hover:scale-105 transition-all'>
										{t('Call me')}: +48 795 369 308
									</a>
								</section>
							</div>
							<div className='w-full h-full p-4 bg-[#2C2C2E] rounded-[2rem] sm:row-span-1 row-span-2 sm:col-span-1 col-span-2 relative overflow-hidden'>
								<section
									className={`${
										myImagesTransform === 'secondSlide'
											? 'translate-x-[-126%]'
											: myImagesTransform === 'thirdSlide'
											? 'translate-x-[-242%]'
											: 'translate-x-0'
									} transition-transform duration-500 relative h-full w-full flex`}>
									<Image
										priority
										height={1024}
										width={576}
										className='object-cover absolute top-[-2rem] xs:top-[-3.5rem] sm:top-[-2rem] xl:top-[-3rem] scale-[140%] xs:scale-[134%] sm:scale-[145%] xl:scale-[139%]'
										src='https://i.ibb.co/2qBks6M/448974962-1521669402065793-421239235051550492-n.jpg'
										alt='picture-of-my-face'
									/>
									<Image
										height={1024}
										width={576}
										priority
										className='object-cover absolute top-[-3rem] sm:top-[-2rem] xl:top-[-2.7rem] scale-[118%] left-[124.5%]'
										src='https://i.ibb.co/g4GwYVT/448794891-995839758513458-3133694217385930912-n-1.jpg'
										alt='picture-of-my-face'
									/>
									<Image
										height={1024}
										width={576}
										priority
										className='object-cover absolute top-[-4rem] sm:top-[-2rem] scale-[121%] xl:scale-[113%] left-[243%]'
										src='https://i.ibb.co/hZdFkpp/448725510-1013649933488125-530744277301084544-n-1.jpg'
										alt='picture-of-my-dog'
									/>
								</section>
								<button
									className='xl:w-10 w-8 h-8 xl:h-10 bg-[#00000074] xl:hover:w-12 xl:hover:h-12 transition-all rounded-full absolute left-6 bottom-4 xl:bottom-6 xl:hover:bottom-5 xl:hover:left-5 flex items-center justify-center'
									onClick={() => {
										myImagesTransform === 'secondSlide'
											? setMyImagesTransform('firstSlide')
											: myImagesTransform === 'thirdSlide'
											? setMyImagesTransform('secondSlide')
											: '';
									}}>
									<FontAwesomeIcon className='h-4 text-orange-50 brightness-90' icon={faChevronLeft} />
								</button>
								<section className='flex gap-3 absolute xl:bottom-10 bottom-5 left-1/2 translate-x-[-50%]'>
									<div
										className={`h-[0.6rem] transition-colors duration-300 w-[0.6rem] rounded-full bg-[#00000074] cursor-pointer ${
											myImagesTransform === 'firstSlide' ? 'bg-[#ffffffc5]' : ''
										}`}
										onClick={() => {
											setMyImagesTransform('firstSlide');
										}}></div>
									<div
										className={`h-[0.6rem] w-[0.65rem] duration-300 transition-colors rounded-full bg-[#00000074] cursor-pointer ${
											myImagesTransform === 'secondSlide' ? 'bg-[#ffffffc5]' : ''
										}`}
										onClick={() => {
											setMyImagesTransform('secondSlide');
										}}></div>
									<div
										className={`h-[0.6rem] w-[0.6rem] duration-300 transition-colors rounded-full bg-[#00000074] cursor-pointer ${
											myImagesTransform === 'thirdSlide' ? 'bg-[#ffffffc5]' : ''
										}`}
										onClick={() => {
											setMyImagesTransform('thirdSlide');
										}}></div>
								</section>
								<button
									className='xl:w-10 w-8 h-8 xl:h-10 bg-[#00000074] xl:hover:w-12 xl:hover:h-12 transition-all rounded-full absolute right-6 bottom-4 xl:bottom-6 xl:hover:bottom-5 xl:hover:right-5 flex items-center justify-center'
									onClick={() => {
										myImagesTransform === 'firstSlide'
											? setMyImagesTransform('secondSlide')
											: myImagesTransform === 'secondSlide'
											? setMyImagesTransform('thirdSlide')
											: '';
									}}>
									<FontAwesomeIcon className='h-4 text-orange-50 brightness-90' icon={faChevronRight} />
								</button>
							</div>
							<div className='w-full h-full sm:col-span-1 col-span-2 bg-[#2C2C2E] row-span-2 rounded-[2rem] xs:p-5 p-4 xl:p-8 flex flex-col justify-center'>
								<h2 className='xl:text-3xl text-2xl font-bold text-center'>{t('Learning')}</h2>
								<section className='lg:mt-6 mt-5 sm:block flex flex-col gap-6'>
									<section className='grid sm:grid-cols-1 sm:gap-0 gap-6 grid-cols-2'>
										<div className='sm:border-b-[2px] border-zinc-900 sm:pb-3 xl:py-4 xs:gap-2 gap-2 grid sm:grid-cols-[1fr,6fr]'>
											<section className='flex sm:flex-col flex-row justify-center items-center gap-1'>
												<img
													className='h-6'
													src='https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg'
													alt='html-logo'
												/>
												<img
													className='h-6'
													src='https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg'
													alt='css-logo'
												/>
											</section>
											<section className='text-center sm:text-left flex flex-col md:gap-1 gap-2'>
												<p className='leading-[1.05rem] xl:text-md sm:text-sm text-[.92rem] sm:text-left text-center'>
													{t('Building responsive sites with HTML and CSS')}
												</p>
												<span className='uppercase text-xs text-gray-400 sm:text-left text-center leading-4 block'>
													{t('Completed')}, 2 {t('months')}
												</span>
											</section>
										</div>
										<div className='sm:border-b-[2px] border-zinc-900 xs:gap-2 xl:py-4 sm:py-3 gap-2 grid sm:grid-cols-[1fr,6fr]'>
											<section className='flex sm:flex-col flex-row justify-center items-center gap-1'>
												<img
													className='h-6'
													src='https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg'
													alt='js-logo'
												/>
												<img className='h-6' src='https://i.ibb.co/Lr0WsP7/typescript-icon.png' alt='ts-logo' />
											</section>
											<section className='text-center sm:text-left flex flex-col md:gap-1 gap-2'>
												<p className='leading-[1.05rem] xl:text-md sm:text-sm text-[.92rem] sm:text-left text-center'>
													{t('Full course Javascript and Typescript')}
												</p>
												<span className='uppercase text-xs text-gray-400 sm:text-left text-center leading-4 block'>
													{t('Completed')}, 4 {t('months')}
												</span>
											</section>
										</div>
									</section>
									<section className='grid sm:grid-cols-1 sm:gap-0 gap-6 grid-cols-2 sm:flex-col flex-row'>
										<div className='sm:border-b-[2px] border-zinc-900 xl:py-4 xs:gap-2 sm:py-3 gap-2 grid sm:grid-cols-[1fr,6fr]'>
											<section className='flex sm:flex-col flex-row justify-center items-center gap-1'>
												<img
													className='h-6'
													src='https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
													alt='react-logo'
												/>
												<img className='h-6' src='https://i.ibb.co/28n9LQy/nextjs-icon.png' alt='next-logo' />
											</section>
											<section className='text-center sm:text-left flex flex-col md:gap-1 gap-2'>
												<p className='leading-[1.05rem] xl:text-md sm:text-sm text-[.92rem] sm:text-left text-center'>
													{t('Full course React and Next')}
												</p>
												<span className='uppercase text-xs text-gray-400 sm:text-left text-center leading-4 block'>
													{t('Completed')}, 2 {t('months')}
												</span>
											</section>
										</div>
										<div className='xs:gap-2 sm:py-3 gap-2 grid xl:py-4 sm:grid-cols-[1fr,6fr]'>
											<section className='flex sm:flex-col flex-row justify-center items-center gap-1'>
												<img
													className='h-6'
													src='https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg'
													alt='nodejs-logo'
												/>
												<img
													className='h-6'
													src='https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg'
													alt='expressjs-logo'
												/>
											</section>
											<section className='text-center sm:text-left flex flex-col md:gap-1 gap-2'>
												<p className='leading-[1.05rem] xl:text-md sm:text-sm text-[.92rem] sm:text-left text-center'>
													{t('Full course basics NodeJS, Express')}
												</p>
												<span className='uppercase text-xs text-gray-400 sm:text-left text-center leading-4 block'>
													{t('Completed')}, 0%
												</span>
											</section>
										</div>
									</section>
								</section>
							</div>
							<div className='w-full h-full bg-[#2C2C2E] p-3 px-6 rounded-[2rem] lg:col-span-1 md:col-span-2 col-span-2 sm:col-span-1'>
								<section className='relative lg:bottom-1 sm:bottom-4 md:bottom-5 flex justify-center flex-col items-center'>
									<img
										className='lg:top-5 sm:top-8 xl:top-6 lg:h-max xs:h-32 h-28 md:h-36 sm:h-24 top-[-10%] xs:top-[-40%] sm:relative absolute'
										src='https://i.ibb.co/VpHR2Dr/fb3274a5-f14e-4488-84fe-13cd5238b192.png'
										alt='wsb-merito-warszawa-logo'
									/>
									<p className='xl:text-[1.2rem] md:text-lg lg:text-[1.05rem] font-semibold text-center lg:leading-5 md:leading-6 xs:leading-5 leading-[1.2rem] xl:leading-6 sm:mt-3 md:mt-0 relative sm:top-0 xs:top-20 top-[5rem]'>
										{t('Second semester college computer science ')}
										<b className='font-bold'>{t('at WSB in Warsaw')}</b>
									</p>
								</section>
							</div>
							<div className='w-full h-full bg-[#2C2C2E] col-span-2 sm:row-span-1 row-span-2 rounded-[2rem] flex sm:items-center xs:p-7 p-5 justify-between sm:flex-row flex-col'>
								<section className='flex justify-between w-full'>
									<img
										className='xl:h-56 sm:h-44 h-40 rounded-2xl'
										src='https://i.scdn.co/image/ab67616d0000b2738a31195a371b2233456f6c07'
										alt='spotify-artist-image'
									/>
									<img
										className='xl:h-14 sm:h-12 h-16 sm:hidden block'
										src='https://registe.me/img/spotify-logo.svg'
										alt='spotify-logo'
									/>
								</section>
								<section className='flex flex-col justify-between sm:h-full items-start sm:pr-7'>
									<img
										className='xl:h-14 sm:h-12 h-16 sm:block hidden'
										src='https://registe.me/img/spotify-logo.svg'
										alt='spotify-logo'
									/>
									<section>
										<section className='flex items-center'>
											<div className='animate-[playing_0.8s_infinite] w-[3px] h-[10px] rounded-sm bg-[#2ad45e] mr-[3px]'></div>
											<div className='animate-[playing_1s_infinite] w-[3px] h-[10px] rounded-sm bg-[#2ad45e] mr-[3px]'></div>
											<div className='animate-[playing_1.2s_infinite] w-[3px] h-[10px] rounded-sm bg-[#2ad45e] mr-[3px]'></div>
											<h3 className='text-green-500 xl:mb-1 ml-1 w-max'>{t('Last played')}</h3>
										</section>
										<h1 className='xl:text-2xl sm:text-xl text-2xl font-extrabold sm:leading-6 leading-7'>
											Unforgettable
										</h1>
										<span>French Montana</span>
									</section>
								</section>
							</div>
							<div className='w-full h-full bg-[#2C2C2E] col-span-2 sm:row-span-1 row-span-2 rounded-[2rem]'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.1600748814762!2d20.96178647700158!3d52.31309775152704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ec99f9c2b9fc3%3A0x467c5fe4ea06d29f!2sMy%C5%9Bliborska%2C%20Warszawa!5e0!3m2!1spl!2spl!4v1719792322074!5m2!1spl!2spl'
									className='h-full w-full rounded-3xl'
									loading='lazy'></iframe>
							</div>
							<div className='w-full h-full bg-[#2C2C2E] flex-col justify-between rounded-[2rem] sm:p-6 xs:px-6 xs:py-4 px-5 py-3 xl:px-8 row-span-2 sm:col-span-1 col-span-2 flex'>
								<section>
									<span className='uppercase text-xs xl:text-[.8rem] tracking-wide text-gray-400'>{t('Project')}</span>
									<h3 className='xl:text-[1.6rem] sm:text-xl text-2xl font-bold leading-6 mb-2 xl:mb-4'>
										{t('Psychotherapist')}
									</h3>
									<span className='uppercase text-xs xl:text-[.8rem] text-gray-400 tracking-wide'>
										{t('technologies')}
									</span>
									<section className='flex items-center gap-1 mt-1'>
										<img
											className='xl:h-5 sm:h-4 h-5'
											title='tailwindcss'
											src='https://i.ibb.co/VV1b8Xy/tailwindcss-icon.png'
											alt='tailwindcss-icon'
										/>
										<img
											className='xl:h-6 sm:h-5 h-6'
											title='react'
											src='https://i.ibb.co/YcjmT0w/react.png'
											alt='react-icon'
										/>
										<img
											className='xl:h-5 sm:h-5 h-6'
											title='typescript'
											src='https://i.ibb.co/Lr0WsP7/typescript-icon.png'
											alt='typescript-icon'
										/>
										<img
											className='xl:h-7 sm:h-6 h-7'
											title='nextjs'
											src='https://i.ibb.co/28n9LQy/nextjs-icon.png'
											alt='nextjs-icon'
										/>
									</section>
								</section>
								<div className='bg-white h-full w-full sm:bg-[url("https://i.ibb.co/1rRXY4p/i-Phone-13-PRO-www-martamoszko-pl.png")] bg-[url("https://i.ibb.co/zr6YbDt/Zrzut-ekranu-2024-07-02-002432.png")] brightness-[95%] bg-center bg-cover mt-3 mb-3 rounded-2xl'></div>
								<div className='w-full flex justify-center'>
									<a
										href='https://martamoszko.pl'
										target='_blank'
										className='px-5 bg-[#1C1C1E] w-max rounded-full py-2 hover:scale-105 transition-transform text-sm xl:text-md'>
										{t('Check project')}
									</a>
								</div>
							</div>
							<div className='w-full h-full bg-[#2C2C2E] flex flex-col justify-between row-span-2 rounded-[2rem] xs:py-4 sm:p-6 xs:px-6 py-4 px-5 sm:col-span-1 col-span-2'>
								<section>
									<span className='uppercase text-xs xl:text-[.8rem] tracking-wide text-gray-400'>{t('Project')}</span>
									<h3 className='xl:text-[1.6rem] sm:text-xl text-2xl font-bold leading-6 mb-3'>{t('Free films')}</h3>
									<span className='uppercase text-[.8rem] text-gray-400 tracking-wide'>{t('technologies')}</span>
									<section className='flex items-center gap-1 mt-1'>
										<img
											className='xl:h-5 h-4'
											title='tailwindcss'
											src='https://i.ibb.co/VV1b8Xy/tailwindcss-icon.png'
											alt='tailwindcss-icon'
										/>
										<img
											className='xl:h-7 h-5'
											title='react'
											src='https://i.ibb.co/YcjmT0w/react.png'
											alt='react-icon'
										/>
										<img
											className='xl:h-7 h-5'
											title='typescript'
											src='https://i.ibb.co/Lr0WsP7/typescript-icon.png'
											alt='typescript-icon'
										/>
										<img
											className='xl:h-8 h-6'
											title='nextjs'
											src='https://i.ibb.co/28n9LQy/nextjs-icon.png'
											alt='nextjs-icon'
										/>
									</section>
								</section>
								<div className='bg-white h-full w-full bg-[url("https://i.ibb.co/M2Tp4dw/Zrzut-ekranu-2024-07-02-002849.png")] sm:bg-[url("https://i.ibb.co/J54gyws/i-Phone-13-PRO-www-vvaciej-codes.png")] brightness-[95%] bg-center bg-cover mt-3 mb-3 rounded-2xl'></div>
								<div className='w-full flex justify-center'>
									<a
										href='https://vvaciej.codes'
										target='_blank'
										className='px-5 bg-[#1C1C1E] text-sm xl:text-md w-max rounded-full py-2 hover:scale-105 transition-transform'>
										{t('Check project')}
									</a>
								</div>
							</div>
							<a
								href='https://www.instagram.com/vvaciej_/'
								target='_blank'
								className='w-full relative h-full p-4 bg-[#2C2C2E] rounded-[2rem] flex justify-center items-center bg-gradient-to-r from-purple-600 to-orange-400'>
								<FontAwesomeIcon className='h-20' icon={faInstagram} />
								<div className='w-10 h-10 bg-[#00000074] hover:w-12 hover:h-12 flex justify-center items-center transition-all rounded-full absolute right-4 bottom-4 sm:right-6 sm:bottom-6 hover:bottom-5 hover:right-5'>
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
