import React from 'react';
import styled from 'styled-components';

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onBlur'> {
	label?: string;
	placeholder?: string;
	inputType?: 'number' | 'select' | 'textarea' | 'text' | 'email' | 'password';
	onBlur?: (name: string, value: string) => void;
}

const InputText = React.forwardRef<HTMLInputElement, Props>(
	({ label, placeholder, inputType = 'text', onBlur, onChange, ...props }, ref) => {
		const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			if (onBlur) {
				onBlur(name, value);
			}
		};

		return (
			<StyledInputText className="input-text">
				{label && <label>{label}</label>}
				<input
					placeholder={placeholder}
					ref={ref}
					type={inputType}
					onBlur={handleBlur} // 커스텀 onBlur 전달
					onChange={onChange}
					{...props}
				/>
			</StyledInputText>
		);
	}
);

const StyledInputText = styled.div`
	display: flex;
	width: 100%;
	line-height: 1.8;

	input {
		display: flex;
		width: 100%;
		height: 3rem;
		border: 1px solid ${({ theme }) => theme.color.border};
		overflow: visible;
		padding: 0.6rem 1.2rem;
		line-height: 1.8;

		color: ${({ theme }) => theme.color.text};
		background: ${({ theme }) => theme.color.background};
		border-radius: ${({ theme }) => theme.borderRadius.default};
		font-size: ${({ theme }) => theme.fontSize.small};

		&:focus {
			border-color: ${({ theme }) => theme.color.primary};
		}

		&::placeholder {
			color: ${({ theme }) => theme.color.neutral};
		}
	}
`;

InputText.displayName = 'InputText'; // Next.js에서 유용한 컴포넌트 이름 설정

export default InputText;
