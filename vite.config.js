import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import { sveltekit } from '@sveltejs/kit/vite';
import replace from '@rollup/plugin-replace';
import presetIcons from '@unocss/preset-icons'
import { extractorSvelte } from '@unocss/core'

const config = {
	ssr: {
		noExternal: ['devalue']
	},
	plugins: [
		Unocss({
			extractors: [extractorSvelte],
			presets: [
				presetUno(),
				presetIcons({
					extraProperties: {
						'fill': 'currentColor',
						'stroke': 'currentColor',
						'display': 'inline-block',
						'vertical-align': 'middle'
					}
				})
			]
		}),
		sveltekit(),
		replace({
      'API_URL': process.env.API_URL || 'https://cms.cdmn.de/api' || 'http://localhost:3000/api',
			'SITE_TOKEN': process.env.SITE_TOKEN,
    })
	]
};

export default config;
