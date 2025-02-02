'use client';

import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

interface Props {
	size?: string;
}

function Spinner({ size }: Props) {
	return (
		<StyledSpinner $size={size}>
			<FaSpinner />
		</StyledSpinner>
	);
}

const StyledSpinner = styled.div<{ $size?: string }>`
	padding: ${({ $size }) => ($size ? '0' : '2rem')} 0;
	text-align: center;

	svg {
		width: ${({ theme, $size }) => ($size ? theme.fontSize[$size] : '4rem')};
		height: ${({ theme, $size }) => ($size ? theme.fontSize[$size] : '4rem')};
		fill: ${({ theme }) => theme.color.secondary};
		animation: rotate 1s linear infinite;
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}
`;

export default Spinner;
