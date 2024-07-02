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
			},
		},
	},
	lng: getLanguageFromUrl(),
});

export default i18next;
