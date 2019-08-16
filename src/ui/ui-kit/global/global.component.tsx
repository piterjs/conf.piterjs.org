import {Global as EGlobal, css} from '@emotion/core';
import React from 'react';
import {buttonReset, inputReset, linkReset} from '../../../utils/css.utils';
import {reset} from '../../../utils/emotion.utils';
import {theme} from '../../../theme';

export const Global = () => (
	<EGlobal
		styles={css`
			${reset}
			@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap&subset=cyrillic');
			html {
				${theme};
				font-family: 'Montserrat', sans-serif;
				color: var(--text-main);
			}
			html,
			body,
			#root {
				min-height: 100%;
				height: 100%;
				max-height: 100%;
			}
			body {
				min-width: 320px;
			}
			button {
				font-family: inherit;
			}
			a {
				${linkReset};
				cursor: pointer;
			}
			button {
				${buttonReset}
			}
			input {
				${inputReset};
				font-family: inherit;
			}
			label {
				margin: 0;
			}
			* {
				font-size: 14px;
				line-height: 1.08;
			}
			textarea {
				padding: 0;
				font-family: inherit;
			}
		`}
	/>
);
