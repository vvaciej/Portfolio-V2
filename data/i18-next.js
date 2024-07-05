import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const getLanguageFromUrl = () => {
	if (typeof window !== 'undefined') {
		const url = window.location.pathname;
		return url.startsWith('/en') ? 'en' : 'pl';
	}
	return 'pl';
};

i18next.use(initReactI18next).init({
	resources: {
		pl: {
			translation: {
				'Home page': 'Strona główna',
				'Im available rn': 'Aktualnie jestem dostępny',
				'Self taught, front-end developer in Poland': 'Samouk, front-end developer w Poznaniu',
				"Hey! I'm Maciek, I'm 20 years old and my passion is programming websites which I've been learning to do for over a year. I would be happy to program you a business card or more complex website at a very low price, contact me by email or phone :).":
					'Hej! Jestem Maciek, mam 20 lat i moją pasją jest programowanie stron internetowych których uczę się robić od ponad roku. Chętnie zaprogramuje Tobie stronę wizytówke czy bardziej rozbudowaną w bardzo niskiej cenie, skontaktuj się ze mną mailowo lub telefonicznie :).',
				'Call me': 'Zadzwoń',
				Learning: 'Nauka',
				'Building responsive sites with HTML and CSS': 'Budowanie responsywnych stron z HTML i CSS',
				Completed: 'Ukończone',
				msc: 'months',
				'Full course Javascript and Typescript': 'Kompletny kurs Javascript i Typescript',
				'Full course React and Next': 'Kompletny kurs podstaw: React i Next',
				'Full course basics NodeJS, ExpressJS (Backend)': 'Kompletny kurs podstaw NodeJS, Express (Backend)',
				'Second semester college computer science ': 'Student informatyki drugiego semestru ',
				'at WSB in Poznań': 'na uczelni WSB Merito w Poznaniu',
				'Last played': 'Ostatnio słuchane',
				Project: 'Projekt',
				Psychotherapist: 'Psychoterapeuta',
				technologies: 'technologie',
				'Check project': 'Zobacz projekt',
				'Free films': 'Darmowe filmy',
				'Download CV': 'Pobierz CV',
			},
		},
	},
	lng: getLanguageFromUrl(),
});

export default i18next;
