import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='bg-[#1c1c1e] h-[calc(100vh+65rem)] w-full text-black'>
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
					<div className='w-full h-full bg-[#2C2C2E] col-span-2 rounded-[2rem] py-3 px-4 pb-1 flex items-center justify-center flex-col'>
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
					<div className='w-full h-full bg-[#2C2C2E] rounded-[2rem] relative overflow-hidden'>
						<img
							className='object-cover absolute top-[-4rem] scale-[121.5%] left-0'
							src='https://i.ibb.co/2qBks6M/448974962-1521669402065793-421239235051550492-n.jpg'
							alt=''
						/>
					</div>
					<div className='w-full h-full bg-[#2C2C2E] row-span-2 rounded-[2rem] px-4 flex items-center flex-col justify-center py-8'>
						<h2 className='text-3xl font-bold'>Co wykorzystuje</h2>
						<section className='mt-4'></section>
					</div>
					<div className='w-full h-full bg-[#2C2C2E] row-span-2 rounded-[2rem]'></div>
					<div className='w-full h-full bg-[#2C2C2E] col-span-2 rounded-[2rem]'></div>
					<div className='w-full h-full bg-[#2C2C2E] rounded-[2rem]'></div>
					<div className='w-full h-full bg-[#2C2C2E] col-span-2 rounded-[2rem]'></div>
					<div className='w-full h-full bg-[#2C2C2E] col-span-2 rounded-[2rem]'></div>
					<div className='w-full h-full bg-[#2C2C2E] row-span-2 rounded-[2rem] p-8'>
						<span className='uppercase text-[.8rem] tracking-wide text-gray-400'>Projekt</span>
						<h3 className='text-[1.6rem] font-bold leading-6 mb-4'>Psychoterapeuta</h3>
						<span className='uppercase text-[.8rem] text-gray-400 tracking-wide'>Built with</span>

					</div>
					<div className='w-full h-full bg-[#2C2C2E] row-span-2 rounded-[2rem]'></div>
					<div className='w-full h-full bg-[#2C2C2E] rounded-[2rem]'></div>
					<div className='w-full h-full bg-[#2C2C2E] rounded-[2rem]'></div>
					<div className='w-full h-full bg-[#2C2C2E] rounded-[2rem]'></div>
					<div className='w-full h-full bg-[#2C2C2E] col-span-2 rounded-[2rem]'></div>
					<div className='w-full h-full bg-[#2C2C2E] rounded-[2rem]'></div>
				</main>
			</div>
		</div>
	);
}
