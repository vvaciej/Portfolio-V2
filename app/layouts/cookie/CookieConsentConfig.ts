import type { CookieConsentConfig } from 'vanilla-cookieconsent';

const pluginConfig: CookieConsentConfig = {
	guiOptions: {
		consentModal: {
			layout: 'box',
			position: 'bottom right',
			equalWeightButtons: true,
			flipButtons: false,
		},
		preferencesModal: {
			layout: 'box',
			position: 'left',
			equalWeightButtons: true,
			flipButtons: false,
		},
	},

	onFirstConsent: function () {
		console.log('onFirstAction fired');
	},

	onConsent: function ({ cookie }) {
		console.log('onConsent fired ...');
	},

	onChange: function ({ changedCategories, cookie }) {
		console.log('onChange fired ...');
	},

	categories: {
		necessary: {
			readOnly: true,
			enabled: true,
		},
		analytics: {
			autoClear: {
				cookies: [
					{
						name: /^(_ga|_gid)/,
					},
				],
			},
		},
	},

	language: {
		default: 'en',

		translations: {
			en: {
				consentModal: {
					description:
						'We use cookies to optimize the functionality of the site and provide the best possible service',
					acceptAllBtn: 'OK',
				},
				preferencesModal: {
					sections: [],
				},
			},
		},
	},
};

export default pluginConfig;
