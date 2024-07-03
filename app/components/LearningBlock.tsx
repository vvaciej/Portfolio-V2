import { useTranslation } from 'next-i18next';

export const LearningPath = () => {
	const { t } = useTranslation();
  
	return (
		<div className='w-full h-full sm:col-span-1 col-span-2 bg-[#2C2C2E] row-span-2 rounded-[2rem] xs:p-5 p-4 xl:p-8 flex flex-col justify-center'>
			<h2 className='xl:text-3xl text-2xl font-bold text-center'>{t('Learning')}</h2>
			<section className='lg:mt-6 mt-5 sm:block flex flex-col gap-6'>
				<section className='grid sm:grid-cols-1 sm:gap-0 gap-6 grid-cols-2'>
					<div className='sm:border-b-[2px] border-zinc-900 sm:pb-3 xl:py-4 xs:gap-2 gap-2 grid sm:grid-cols-[1fr,6fr]'>
						<section className='flex sm:flex-col flex-row justify-center items-center gap-1'>
							<img className='h-6' src='https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg' alt='html-logo' />
							<img className='h-6' src='https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg' alt='css-logo' />
							<img
								className='h-6'
								src='https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
								alt='tailwind-logo'
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
							<img className='h-6' src='https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' alt='react-logo' />
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
							<img className='h-6' src='https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' alt='nodejs-logo' />
							<img
								className='h-6'
								src='https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg'
								alt='expressjs-logo'
							/>
						</section>
						<section className='text-center sm:text-left flex flex-col md:gap-1 gap-2'>
							<p className='leading-[1.05rem] xl:text-md sm:text-sm text-[.92rem] sm:text-left text-center'>
								{t('Full course basics NodeJS, ExpressJS (Backend)')}
							</p>
							<span className='uppercase text-xs text-gray-400 sm:text-left text-center leading-4 block'>
								{t('Completed')}, 0%
							</span>
						</section>
					</div>
				</section>
			</section>
		</div>
	);
};
