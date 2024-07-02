import { useTranslation } from 'next-i18next';

export const SpotifyBlock = () => {
	const { t } = useTranslation();
	return (
		<div className='w-full h-full bg-[#2C2C2E] col-span-2 sm:row-span-1 row-span-2 rounded-[2rem] flex sm:items-center xs:p-7 p-5 justify-between sm:flex-row flex-col'>
			<section className='flex justify-between w-full'>
				<img
					className='xl:h-56 sm:h-44 h-36 rounded-2xl'
					src='https://i.scdn.co/image/ab67616d0000b2738a31195a371b2233456f6c07'
					alt='spotify-artist-image'
				/>
				<img
					className='xl:h-14 h-12 sm:hidden block'
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
					<h1 className='xl:text-2xl sm:text-xl text-2xl font-extrabold sm:leading-6 leading-7'>Unforgettable</h1>
					<span>French Montana</span>
				</section>
			</section>
		</div>
	);
};
