import { useTranslation } from 'next-i18next';

export const Project1Block = () => {
  const { t } = useTranslation();
  
	return (
		<div className='w-full h-full bg-[#2C2C2E] flex-col justify-between rounded-[2rem] sm:p-6 xs:px-6 xs:py-4 px-5 py-3 xl:px-8 row-span-2 sm:col-span-1 col-span-2 flex'>
			<section>
				<span className='uppercase text-xs xl:text-[.8rem] tracking-wide text-gray-400'>{t('Project')}</span>
				<h3 className='xl:text-[1.6rem] sm:text-xl text-2xl font-bold leading-6 mb-2 xl:mb-4'>
					{t('Psychotherapist')}
				</h3>
				<span className='uppercase text-xs xl:text-[.8rem] text-gray-400 tracking-wide'>{t('technologies')}</span>
				<section className='flex items-center gap-1 mt-1'>
					<img
						className='xl:h-5 sm:h-4 h-5'
						title='tailwindcss'
						src='https://i.ibb.co/VV1b8Xy/tailwindcss-icon.png'
						alt='tailwindcss-icon'
					/>
					<img className='xl:h-6 sm:h-5 h-6' title='react' src='https://i.ibb.co/YcjmT0w/react.png' alt='react-icon' />
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
	);
};
