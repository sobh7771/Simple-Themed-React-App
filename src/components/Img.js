import styled from 'styled-components';
import { themes } from '../context/theme-context';

export default styled.img(({ theme, animation }) => {
	const commonStyle = {
		width: '4rem',
		height: '4rem',
		transition: 'all 0.3s linear'
	};

	if (theme === themes.light) {
		// Light theme
		if (animation === 'move-up') {
			return {
				...commonStyle,
				transform: 'translateY(-125%)'
			};
		} else {
			// animation=move-down
			return {
				...commonStyle,
				transform: 'translateY(0)'
			};
		}
	} else {
		// Dark theme
		if (animation === 'move-up') {
			return {
				...commonStyle,
				transform: 'translateY(0)'
			};
		} else {
			// animation=move-down
			return {
				...commonStyle,
				transform: 'translateY(125%)'
			};
		}
	}
});
