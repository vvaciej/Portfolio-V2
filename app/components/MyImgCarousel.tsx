'use client';

import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const ImgCarousel = () => {
	const { t } = useTranslation();
	const [myImagesTransform, setMyImagesTransform] = useState('firstSlide');

	return (
		<div className='w-full h-full p-4 bg-[#2C2C2E] rounded-[2rem] sm:row-span-1 row-span-2 sm:col-span-1 col-span-2 relative overflow-hidden'>
			<section
				className={`${
					myImagesTransform === 'secondSlide'
						? 'translate-x-[-126%]'
						: myImagesTransform === 'thirdSlide'
						? 'translate-x-[-250%]'
						: 'translate-x-0'
				} transition-transform duration-500 relative h-full w-full flex`}>
				<Image
					priority
					height={1024}
					width={576}
					className='object-cover absolute top-[-2rem] xs:top-[-3.5rem] sm:top-[-2rem] xl:top-[-3rem] scale-[140%] xs:scale-[133%] sm:scale-[145%] xl:scale-[139%]'
					src='https://i.ibb.co/fHX9FSt/448974962-1521669402065793-421239235051550492-n-magicstudio-0rjvo6hlghtb.png'
					alt='picture-of-my-face'
				/>
				<Image
					height={1024}
					width={576}
					priority
					className='object-cover absolute h-full scale-125 w-full left-[121.95%]'
					src='https://i.ibb.co/xzH1qJB/448268024-983397733259880-6468480579347296530-n.jpg'
					alt='picture-of-me'
				/>
				<Image
					height={1024}
					width={576}
					priority
					className='object-cover absolute top-[-4rem] sm:top-[-4rem] scale-[120%] sm:scale-[115.8%] xl:scale-[113%] left-[250%]'
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
			<section className='flex gap-3 absolute xl:bottom-8 bottom-5 left-1/2 translate-x-[-50%]'>
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
	);
};
