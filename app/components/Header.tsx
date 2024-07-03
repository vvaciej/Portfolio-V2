import { useTranslation } from 'next-i18next';

export const Header = () => {
	const { t } = useTranslation();

	return (
		<header className='xl:h-40 sm:w-full md:h-32 h-full md:py-0 py-8 relative flex items-center justify-center md:flex-row flex-col xs:w-[18rem]'>
			<div className='xl:w-[70rem] lg:w-[60rem] md:w-[44rem] sm:w-[30rem] xs:w-[22rem] xxs:w-[18rem] w-[91%] z-10 relative flex justify-between items-center xxs:flex-row xs:flex-row sm:flex-row flex-col-reverse gap-4'>
				<button className='border-4 border-blue-500 sm:px-4 py-1 px-3 rounded-full text-white cursor-pointer hover:scale-105 transition-all xl:text-[.95rem] xs:text-sm text-[.85rem] '>
					<h3 className='bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent font-bold'>
						{t('Download CV')}
					</h3>
				</button>
				<nav className='md:flex hidden h-full w-max md:w-max py-1 ml-16 bg-[#131315] px-[.3rem] rounded-full'>
					<button className='h-full w-max bg-[#2C2C2E] px-4 py-2 rounded-full xl:text-md text-sm'>
						{t('Home page')}
					</button>
				</nav>
				<a
					href='mailto:maciejskok@proton.me'
					className='border-4 border-blue-500 sm:px-4 py-1 px-2 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 text-white cursor-pointer hover:scale-105 transition-all xl:text-[.95rem] xs:text-sm text-[.85rem]'>
					maciejskok@proton.me
				</a>
			</div>
			<nav className='h-full md:hidden w-max md:w-[10rem] xl:w-[15rem] py-1 bg-[#131315] px-[.3rem] rounded-full flex mt-4'>
				<button className='h-full w-full bg-[#2C2C2E] px-4 py-1 rounded-full xl:text-md text-sm'>
					{t('Home page')}
				</button>
			</nav>
		</header>
	);
};
