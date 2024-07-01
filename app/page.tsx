'use client';

import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function Home() {
	const [myImagesTransform, setMyImagesTransform] = useState('firstSlide');

	return (
		<div className='bg-[#1c1c1e] h-full w-full text-black'>
			<div className='w-full h-full font-[system-ui] flex items-center flex-col font-semibold text-[#eee]'>
				<header className='h-40 w-full relative flex items-center justify-center'>
					<div className='w-[70rem] z-10 relative flex justify-between items-center'>
						<span className='text-[#ffffffc4]'>&copy; 2024 maciejskok</span>
						<nav className='h-full w-[15rem] py-1 ml-16 bg-[#131315] px-[.3rem] rounded-full flex'>
							<button className='h-full w-full bg-[#2C2C2E] px-4 py-1 rounded-full'>Strona główna</button>
						</nav>
						<a
							href='mailto:maciejskok@proton.me'
							className='border-4 border-blue-500 py-1 px-4 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 text-white cursor-pointer hover:scale-105 transition-all'>
							maciejskok@proton.me
						</a>
					</div>
				</header>
				<div className='w-full h-9 bg-[#63e6be] text-[#080808] flex items-center justify-center'>
					<h2>Aktualnie jestem dostępny</h2>
				</div>
				<main className='w-[70rem] mt-16 h-full grid grid-cols-4 grid-rows-4 gap-5 mb-32'>
					<div className='w-full h-full bg-[#2C2C2E] col-span-2 rounded-[2rem] py-3 pt-7 px-4 flex items-center justify-center flex-col'>
						<h1 className='text-5xl font-extrabold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent select-none'>
							Maciek Skokowski
						</h1>
						<p className='mt-1 text-[1.32rem] select-none'>Samouk, front-end developer w Warszawie</p>
						<p className='font-normal text-center mt-2 select-none'>
							Hej! Jestem Maciek, mam 20 lat i moją pasją jest programowanie stron internetowych których uczę się robić
							od ponad roku. Chętnie zaprogramuje Tobie stronę wizytówke czy bardziej rozbudowaną w bardzo niskiej
							cenie, skontaktuj się ze mną mailowo lub telefonicznie :).
						</p>
						<section className='mt-4 flex gap-4'>
							<a
								href='tel:+48795369308'
								className='border-4 border-blue-500 py-1 px-4 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 text-white cursor-pointer hover:scale-105 transition-all'>
								Zadzwoń: 795 369 308
							</a>
						</section>
					</div>
					<div className='w-full h-full p-4 bg-[#2C2C2E] rounded-[2rem] relative overflow-hidden'>
						<section
							className={`${
								myImagesTransform === 'secondSlide'
									? 'translate-x-[-126%]'
									: myImagesTransform === 'thirdSlide'
									? 'translate-x-[-242%]'
									: 'translate-x-0'
							} transition-transform duration-200 relative h-full w-full flex`}>
							<img
								className='object-cover absolute top-[-3rem] scale-[139%]'
								src='https://i.ibb.co/2qBks6M/448974962-1521669402065793-421239235051550492-n.jpg'
								alt='picture-of-my-face'
							/>
							<img
								className='object-cover absolute top-[-2.7rem] scale-[118%] left-[126%]'
								src='https://i.ibb.co/g4GwYVT/448794891-995839758513458-3133694217385930912-n-1.jpg'
								alt='picture-of-my-face'
							/>
							<img
								className='object-cover absolute top-[-2rem] scale-[113%] left-[242%]'
								src='https://i.ibb.co/hZdFkpp/448725510-1013649933488125-530744277301084544-n-1.jpg'
								alt='picture-of-my-dog'
							/>
						</section>
						<button
							className='w-10 h-10 bg-[#00000074] hover:w-12 hover:h-12 transition-all rounded-full absolute left-6 bottom-6 hover:bottom-5 hover:left-5 flex items-center justify-center'
							onClick={() => {
								myImagesTransform === 'secondSlide'
									? setMyImagesTransform('firstSlide')
									: myImagesTransform === 'thirdSlide'
									? setMyImagesTransform('secondSlide')
									: '';
							}}>
							<FontAwesomeIcon className='h-4 text-orange-50 brightness-90' icon={faChevronLeft} />
						</button>
						<section className='flex gap-3 absolute bottom-10 left-1/2 translate-x-[-50%]'>
							<div
								className={`h-[0.6rem] transition-colors duration-300 w-[0.6rem] rounded-full bg-[#00000074] ${
									myImagesTransform === 'firstSlide' ? 'bg-[#ffffffc5]' : ''
								}`}></div>
							<div
								className={`h-[0.6rem] w-[0.65rem] duration-300 transition-colors rounded-full bg-[#00000074]  ${
									myImagesTransform === 'secondSlide' ? 'bg-[#ffffffc5]' : ''
								}`}></div>
							<div
								className={`h-[0.6rem] w-[0.6rem] duration-300 transition-colors rounded-full bg-[#00000074]  ${
									myImagesTransform === 'thirdSlide' ? 'bg-[#ffffffc5]' : ''
								}`}></div>
						</section>
						<button
							className='w-10 h-10 bg-[#00000074] hover:w-12 hover:h-12 transition-all rounded-full absolute right-6 bottom-6 hover:bottom-5 hover:right-5 flex items-center justify-center'
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
					<div className='w-full h-full bg-[#2C2C2E] row-span-2 rounded-[2rem] p-8 flex flex-col justify-center'>
						<h2 className='text-3xl font-bold'>Nauka</h2>
						<section className='mt-8'>
							<div className='border-b-[2px] border-zinc-900 pb-3 flex gap-2 flex-col'>
								<section className='flex gap-2 items-center'>
									<section>
										<img
											className='min-h-5 mb-1'
											src='https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg'
											alt='html-logo'
										/>
										<img
											className='min-h-5'
											src='https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg'
											alt='css-logo'
										/>
									</section>
									<p className='leading-[1.1rem]'>Budowanie responsywnych stron z HTML i CSS</p>
								</section>
								<span className='uppercase text-[.8rem] text-gray-400 ml-10'>Ukończone, 2msc</span>
							</div>
							<div className='border-b-[2px] mt-4 border-zinc-900 pb-3 flex gap-1 flex-col'>
								<section className='flex gap-3 items-center'>
									<section>
										<img
											className='h-8'
											src='https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg'
											alt='js-logo'
										/>
										<img className='h-7' src='https://i.ibb.co/Lr0WsP7/typescript-icon.png' alt='' />
									</section>
									<p className='leading-[1.1rem]'>Kompletny kurs Javascript</p>
								</section>
								<span className='uppercase text-[.8rem] text-gray-400 ml-10'>Ukończone, 3msc</span>
							</div>
							<div className='border-b-[2px] mt-4 border-zinc-900 pb-3 flex gap-1 flex-col'>
								<section className='flex gap-3 items-center'>
									<section>
										<img
											className='h-11'
											src='https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
											alt='reactjs-logo'
										/>
										<img className='min-h-2 max-h-7' src='https://i.ibb.co/28n9LQy/nextjs-icon.png' alt='nextjs-logo' />
									</section>
									<p className='leading-[1.1rem]'>Kompletny kurs podstaw: React i Next</p>
								</section>
								<span className='uppercase text-[.8rem] text-gray-400 ml-10'>Ukończone, 2msc</span>
							</div>
							<div className='mt-4 pb-3 flex flex-col'>
								<section className='flex gap-3 items-center'>
									<section>
										<img
											className='h-15'
											src='https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg'
											alt='nodejs-logo'
										/>
										<img
											className='h-10'
											src='https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg'
											alt='expressjs-logo'
										/>
									</section>
									<p className='leading-[1.1rem]'>Kompletny kurs podstaw Node js, Express (Backend)</p>
								</section>
								<span className='uppercase text-[.8rem] text-gray-400 ml-10 mt-2'>0% Ukończone</span>
							</div>
						</section>
					</div>
					<div className='w-full h-full bg-[#2C2C2E] p-3 rounded-[2rem]'>
						<section className='relative bottom-1'>
							<img
								className='relative top-6'
								src='https://i.ibb.co/VpHR2Dr/fb3274a5-f14e-4488-84fe-13cd5238b192.png'
								alt='wsb-merito-warszawa-logo'
							/>
							<p className='text-[1.2rem] font-semibold text-center leading-6'>
								Student informatyki drugiego semestru na uczelni <b className='font-bold'>WSB Merito w Warszawie</b>
							</p>
						</section>
					</div>
					<div className='w-full h-full bg-[#2C2C2E] col-span-2 rounded-[2rem] flex items-center p-7 justify-between'>
						<img
							className='h-56 rounded-2xl'
							src='https://i.scdn.co/image/ab67616d0000b2738a31195a371b2233456f6c07'
							alt='spotify-artist-image'
						/>
						<section className='flex flex-col justify-between h-full items-start pr-10'>
							<img className='h-14' src='https://registe.me/img/spotify-logo.svg' alt='spotify-logo' />
							<section>
								<section className='flex items-center'>
									<div className='animate-[playing_0.8s_infinite] w-[3px] h-[10px] rounded-sm bg-[#2ad45e] mr-[3px]'></div>
									<div className='animate-[playing_1s_infinite] w-[3px] h-[10px] rounded-sm bg-[#2ad45e] mr-[3px]'></div>
									<div className='animate-[playing_1.2s_infinite] w-[3px] h-[10px] rounded-sm bg-[#2ad45e] mr-[3px]'></div>
									<h3 className='text-green-500 mb-1 ml-1'>Ostatnio słuchane</h3>
								</section>
								<h1 className='text-2xl font-extrabold leading-6'>Unforgettable</h1>
								<span>French Montana</span>
							</section>
						</section>
					</div>
					<div className='w-full h-full bg-[#2C2C2E] col-span-2 rounded-[2rem]'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.1600748814762!2d20.96178647700158!3d52.31309775152704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ec99f9c2b9fc3%3A0x467c5fe4ea06d29f!2sMy%C5%9Bliborska%2C%20Warszawa!5e0!3m2!1spl!2spl!4v1719792322074!5m2!1spl!2spl'
							className='h-full w-full rounded-3xl'
							loading='lazy'></iframe>
					</div>
					<div className='w-full h-full bg-[#2C2C2E] flex flex-col justify-between row-span-2 rounded-[2rem] p-6 px-8'>
						<section>
							<span className='uppercase text-[.8rem] tracking-wide text-gray-400'>Projekt</span>
							<h3 className='text-[1.6rem] font-bold leading-6 mb-4'>Psychoterapeuta</h3>
							<span className='uppercase text-[.8rem] text-gray-400 tracking-wide'>technologie</span>
							<section className='flex items-center gap-1 mt-1'>
								<img
									className='h-5'
									title='tailwindcss'
									src='https://i.ibb.co/VV1b8Xy/tailwindcss-icon.png'
									alt='tailwindcss-icon'
								/>
								<img className='h-7' title='react' src='https://i.ibb.co/YcjmT0w/react.png' alt='react-icon' />
								<img
									className='h-7'
									title='typescript'
									src='https://i.ibb.co/Lr0WsP7/typescript-icon.png'
									alt='typescript-icon'
								/>
								<img className='h-8' title='nextjs' src='https://i.ibb.co/28n9LQy/nextjs-icon.png' alt='nextjs-icon' />
							</section>
						</section>
						<div className='bg-white h-full w-full bg-[url("https://i.ibb.co/1rRXY4p/i-Phone-13-PRO-www-martamoszko-pl.png")] brightness-[95%] bg-center bg-cover mt-3 mb-3 rounded-2xl'></div>
						<div className='w-full flex justify-center'>
							<a
								href='https://martamoszko.pl'
								target='_blank'
								className='px-5 bg-[#1C1C1E] w-max rounded-full py-2 hover:scale-105 transition-transform'>
								Zobacz projekt
							</a>
						</div>
					</div>
					<div className='w-full h-full bg-[#2C2C2E] flex flex-col justify-between row-span-2 rounded-[2rem] p-6 px-8'>
						<section>
							<span className='uppercase text-[.8rem] tracking-wide text-gray-400'>Projekt</span>
							<h3 className='text-[1.6rem] font-bold leading-6 mb-4'>Darmowe filmy</h3>
							<span className='uppercase text-[.8rem] text-gray-400 tracking-wide'>technologie</span>
							<section className='flex items-center gap-1 mt-1'>
								<img
									className='h-5'
									title='tailwindcss'
									src='https://i.ibb.co/VV1b8Xy/tailwindcss-icon.png'
									alt='tailwindcss-icon'
								/>
								<img className='h-7' title='react' src='https://i.ibb.co/YcjmT0w/react.png' alt='react-icon' />
								<img
									className='h-7'
									title='typescript'
									src='https://i.ibb.co/Lr0WsP7/typescript-icon.png'
									alt='typescript-icon'
								/>
								<img className='h-8' title='nextjs' src='https://i.ibb.co/28n9LQy/nextjs-icon.png' alt='nextjs-icon' />
							</section>
						</section>
						<div className='bg-white h-full w-full bg-[url("https://i.ibb.co/J54gyws/i-Phone-13-PRO-www-vvaciej-codes.png")] brightness-[95%] bg-center bg-cover mt-3 mb-3 rounded-2xl'></div>
						<div className='w-full flex justify-center'>
							<a
								href='https://vvaciej.codes'
								target='_blank'
								className='px-5 bg-[#1C1C1E] w-max rounded-full py-2 hover:scale-105 transition-transform'>
								Zobacz projekt
							</a>
						</div>
					</div>
					<a
						href='https://www.instagram.com/vvaciej_/'
						target='_blank'
						className='w-full relative h-full p-4 bg-[#2C2C2E] rounded-[2rem] flex justify-center items-center'
						style={{
							background:
								'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);',
						}}>
						<FontAwesomeIcon className='h-20' icon={faInstagram} />
						<div className='w-10 h-10 bg-[#00000074] hover:w-12 hover:h-12 flex justify-center items-center transition-all rounded-full absolute right-6 bottom-6 hover:bottom-5 hover:right-5'>
							<FontAwesomeIcon className='h-5 text-orange-50 brightness-90' icon={faArrowRight} />
						</div>
					</a>
					<a
						href='https://github.com/vvaciej'
						target='_blank'
						className='w-full h-full relative p-4 bg-[#171515] rounded-[2rem] flex justify-center items-center'>
						<FontAwesomeIcon className='h-20' icon={faGithub} />
						<div className='w-10 h-10 bg-[#00000074] hover:w-12 hover:h-12 transition-all rounded-full absolute right-6 bottom-6 flex items-center justify-center hover:bottom-5 hover:right-5'>
							<FontAwesomeIcon className='h-5 text-orange-50 brightness-90' icon={faArrowRight} />
						</div>
					</a>
				</main>
			</div>
		</div>
	);
}
