import { useTranslation } from 'next-i18next';

export const AboutMeBlock = () => {
	const { t } = useTranslation();

  const getLanguageFromUrl = () => {
		if (typeof window !== 'undefined') {
			const url = window.location.pathname;
			return url.startsWith('/en') ? 'en' : 'pl';
		}
		return 'pl';
	};

	return (
		<div className='w-full h-full bg-[#2C2C2E] col-span-2 sm:row-span-1 row-span-2 rounded-[2rem] xl:py-3 sm:py-2 xl:pt-7 sm:pt-3 sm:px-4 xs:px-8 xs:py-8 py-5 px-5 flex sm:items-center justify-center flex-col'>
			<h1 className='xl:text-5xl lg:text-4xl xs:text-[1.9rem] text-[1.64rem] sm:text-3xl leading-7 font-extrabold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent select-none sm:mr-0 md:mr-3'>
				Maciek Skokowski
			</h1>
			<p className='xl:mt-1 lg:text-xl text-lg sm:text-lg xl:text-[1.32rem] select-none leading-5 sm:mb-0 mb-1 sm:mt-0 mt-1'>
				{t('Self taught, front-end developer in Poland')}
			</p>
			<p className='font-normal sm:text-center xl:mt-3 lg:mt-2 mt-1 text-[0.86rem] select-none leading-5 xl:text-[1rem]'>
				{t(
					"Hey! I'm Maciek, I'm 20 years old and my passion is programming websites which I've been learning to do for over a year. I would be happy to program you a business card or more complex website at a very low price, contact me by email or phone :)."
				)}
			</p>
			{getLanguageFromUrl() === 'pl' ? (
				<section className='xl:mt-6 sm:mt-4 mt-6'>
					<a
						href='tel:+48795369308'
						className='border-4 border-blue-500 py-1 sm:px-4 px-2 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 text-white xl:text-[1rem] sm:text-sm xs:text-md text-[.85rem] cursor-pointer hover:scale-105 transition-all'>
						+48 795 369 308
					</a>
				</section>
			) : (
				<a
					href='mailto:maciejskok@proton.me'
					className='border-4 border-blue-500 sm:px-4 py-1 xs:px-4 px-2 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 text-white cursor-pointer hover:scale-105 transition-all xl:text-[.95rem] xs:text-sm text-[.85rem] mt-2 sm:mt-3 w-max'>
					maciejskok@proton.me
				</a>
			)}
		</div>
	);
};
