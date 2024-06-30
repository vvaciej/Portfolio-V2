import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='bg-[#1c1c1e] h-full w-full text-black'>
			<div className='w-full h-full font-[system-ui] flex items-center flex-col font-semibold text-[#eee]'>
				<header className='h-40 w-full relative flex items-center justify-center'>
					<div className='w-[70rem] z-10 relative flex justify-between items-center'>
						<span className='text-[#ffffffc4]'>&copy; 2024 maciejskok</span>
						<nav className='h-max py-1 mr-10 bg-[#111112] px-[.3rem] rounded-full flex gap-1'>
							<button className='h-full w-full bg-[#2C2C2E] px-4 py-1 rounded-full'>Wszystko</button>
							<button className='h-full w-full hover:brightness-50 transition-all px-4 py-1 rounded-full'>
								O mnie
							</button>
							<button className='h-full w-full hover:brightness-50 transition-all px-4 py-1 rounded-full'>
								Projekty
							</button>
						</nav>
						<a
							href='mailto:maciejskok@proton.me'
							className='border-4 border-blue-500 py-1 px-4 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 text-white cursor-pointer hover:scale-105 transition-all'>
							Kontakt
						</a>
					</div>
				</header>
				<div className='w-full h-9 bg-[#63e6be] text-[#080808] flex items-center justify-center'>
					<h2>Aktualnie jestem dostępny</h2>
				</div>
				<main className='w-[70rem] mt-16 h-full grid grid-cols-4 grid-rows-6 gap-5 mb-32'>
					<div className='w-full h-full bg-[#2C2C2E] col-span-2 rounded-[2rem] py-3 pt-7 px-4 flex items-center justify-center flex-col'>
						<h1 className='text-5xl font-extrabold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent select-none'>
							Maciek Skokowski
						</h1>
						<p className='mt-1 text-[1.32rem] select-none'>Student, samouk front-end developer w Warszawie</p>
						<p className='font-normal text-center mt-3 select-none'>
							Hej! Jestem Maciek i moim celem jest praca w firmie której będe dostarczał wartość biznesową i w trakcie
							której moje umięjetności będą się podwyższały jako developer.
						</p>
						<section className='mt-4 flex gap-4'>
							<button className='border-4 border-blue-500 py-1 px-4 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 text-white cursor-pointer hover:scale-105 transition-all'>
								Moje prace
							</button>
							<button className='bg-[#1C1C1E] rounded-full px-4 hover:scale-105 transition-transform'>
								Więcej o mnie
							</button>
						</section>
					</div>
					<div className='w-full h-full p-4 bg-[#2C2C2E] rounded-[2rem] relative overflow-hidden'>
						<img
							className='object-cover absolute top-[-4rem] scale-[121.5%] left-0'
							src='https://i.ibb.co/2qBks6M/448974962-1521669402065793-421239235051550492-n.jpg'
							alt='picture-of-my-face'
						/>
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
									<p className='leading-[1.1rem]'>Kompletny kurs: Javascript</p>
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
											className='h-10'
											src='https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg'
											alt='nodejs-logo'
										/>
										<img
											className='h-8'
											src='https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg'
											alt='expressjs-logo'
										/>
									</section>
									<p className='leading-[1.1rem]'>Node js, Express Kurs (Backend)</p>
								</section>
								<span className='uppercase text-[.8rem] text-gray-400 ml-10'>0% Ukończone</span>
							</div>
						</section>
					</div>
					<div className='w-full h-full bg-[#2C2C2E] p-4 row-span-2 rounded-[2rem]'></div>
					<div className='w-full h-full bg-[#2C2C2E] p-4 col-span-2 rounded-[2rem]'></div>
					<div className='w-full h-full bg-[#2C2C2E] p-4 rounded-[2rem]'></div>
					<div className='w-full h-full bg-[#2C2C2E] p-4 col-span-2 rounded-[2rem]'></div>
					<div className='w-full h-full bg-[#2C2C2E] p-4 col-span-2 rounded-[2rem]'></div>
					<div className='w-full h-full bg-[#2C2C2E] flex flex-col justify-between row-span-2 rounded-[2rem] p-6 px-8'>
						<section>
							<span className='uppercase text-[.8rem] tracking-wide text-gray-400'>Projekt</span>
							<h3 className='text-[1.6rem] font-bold leading-6 mb-4'>Psychoterapeuta</h3>
							<span className='uppercase text-[.8rem] text-gray-400 tracking-wide'>Built with</span>
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
								View project
							</a>
						</div>
					</div>
					<div className='w-full h-full bg-[#2C2C2E] flex flex-col justify-between row-span-2 rounded-[2rem] p-6 px-8'>
						<section>
							<span className='uppercase text-[.8rem] tracking-wide text-gray-400'>Projekt</span>
							<h3 className='text-[1.6rem] font-bold leading-6 mb-4'>Darmowe filmy</h3>
							<span className='uppercase text-[.8rem] text-gray-400 tracking-wide'>Built with</span>
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
								View project
							</a>
						</div>
					</div>
					<div
						className='w-full relative h-full p-4 bg-[#2C2C2E] rounded-[2rem] flex justify-center items-center'
						style={{
							background:
								'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);',
						}}>
						<a href='https://www.instagram.com/vvaciej_/' target='_blank' className='absolute h-full w-full'></a>
						<FontAwesomeIcon className='h-20' icon={faInstagram} />
					</div>
					<a
						href='https://github.com/vvaciej'
						target='_blank'
						className='w-full h-full p-4 bg-[#171515] rounded-[2rem] flex justify-center items-center'>
						<FontAwesomeIcon className='h-20' icon={faGithub} />
					</a>
				</main>
			</div>
		</div>
	);
}
