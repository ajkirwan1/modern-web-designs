import plugin from '@stylistic/eslint-plugin-js'
import stylisticJs from '@stylistic/eslint-plugin-js'
import html from '@html-eslint/eslint-plugin'
import parser from '@html-eslint/parser'

export default [
	// html.configs['flat/recommended'],
	{
		files: ['**/*.html'],
		// ignores: ['eslint.config.js'],
		plugins: {
			'@html-eslint': html,
		},
		languageOptions: {
			parser,
		},
		// parserOptions: {
		// 	project: './.vscode/settings.json',
		// },
		rules: {
			'@html-eslint/indent': 'error',
			'@html-eslint/element-newline': 'error',
			'@html-eslint/indent': ['error', 'space' | 2],
			'@html-eslint/no-trailing-spaces': 'error',
			'@html-eslint/no-multiple-empty-lines': ['error', { max: 0 }],
			'@html-eslint/require-closing-tags': [
				'error',
				{ selfClosing: 'always' },
			],
			'@html-eslint/no-extra-spacing-attrs': [
				'error',
				{ enforceBeforeSelfClose: true },
			],
			'@html-eslint/id-naming-convention': ['error', 'kebab-case'],
			'@html-eslint/no-duplicate-attrs': 'error',
			'@html-eslint/no-duplicate-id': 'error',
		},
	},
]
