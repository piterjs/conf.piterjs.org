import { Global as EGlobal, css } from '@emotion/core';
import React from 'react';
import { buttonReset, inputReset, linkReset } from '../../utils/css.utils';
import { reset } from '../../utils/emotion.utils';

export const Global = () => (
	<EGlobal
		styles={css`
			${reset}
			html {
				font-family: Stolzl, Helvetica, Arial, sans-serif;
			}
			html,
			body,
			#root {
				min-height: 100%;
				height: 100%;
				max-height: 100%;
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
			}
			textarea {
				padding: 0;
				font-family: inherit;
			}
		`}
	/>
);
