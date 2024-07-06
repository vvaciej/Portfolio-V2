import { useTranslation } from 'next-i18next';

export const SpotifyBlock = () => {
	const { t } = useTranslation();
	return (
		<div className='w-full h-full bg-[#2C2C2E] col-span-2 sm:row-span-1 row-span-2 rounded-[2rem] xs:p-3 xs:pt-6 xxs:pt-8 xxs:pb-8 xxs:px-3 xs:pb-7 p-7 pb-4 pt-5 sm:gap-0 gap-6 flex-col flex lg:px-7 px-2'>
			<h1 className='text-3xl font-bold text-center mb-1'>UI & UX</h1>
			<section className='items-center gap-3 flex sm:flex-row flex-col lg:grid xl:grid-cols-[1.2fr,2fr] lg:grid-cols-[1fr,2fr]'>
				<img
					className='lg:w-full lg:h-full object-cover h-36 sm:block hidden'
					src='https://i.ibb.co/WHQKC7v/a558b426cb8973523f37bbed94cf0f09-removebg-preview.png'
					alt='figma-logo'
				/>
				<img
					className='rounded-xl sm:h-28 xs:h-32 xxs:h-28 h-full sm:hidden'
					src='https://i.ibb.co/HTVJM0Y/64309e7ce733f37f0a4c0880-Figma-rebrand-assets-Blog-hero.webp'
					alt='figma-logo'
				/>
				<p className='lg:leading-[1.28rem] sm:leading-[1.08rem] leading-[1.1rem] xl:text-[1rem] text-sm sm:text-sm sm:text-left text-center'>
					Każde zlecenie zaczynam od kreatywnego procesu projektowania w aplikacji Figma, tworząc wygląd strony
					internetowej. Współpracuję z klientem, aby zapewnić, że końcowy projekt spełnia wszystkie jego oczekiwania i
					potrzeby
				</p>
			</section>
		</div>
	);
};
