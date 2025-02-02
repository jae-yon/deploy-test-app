'use client';

import { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
	label?: string;
	onChange: (date: Date | null) => void;
	onBlur?: () => void;
}

const InputDate = ({ label, onChange, onBlur }: Props) => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
		onChange(date);
	};

	return (
		<StyledInputDate>
			{label && <label htmlFor="custom-date-picker">{label}</label>}
			<DatePicker
				id="custom-date-picker"
				className="custom-datepicker"
				selected={selectedDate}
				onChange={handleDateChange}
				showYearDropdown
				yearDropdownItemNumber={130}
				scrollableYearDropdown
				dateFormat="yyyy-MM-dd"
				placeholderText="날짜를 선택하세요"
				closeOnScroll={true}
				shouldCloseOnSelect={true}
				maxDate={new Date()}
				onBlur={onBlur}
			/>
		</StyledInputDate>
	);
};

const StyledInputDate = styled.div`
	display: flex;
	flex-direction: column;
	z-index: 1000;

	label {
		margin-left: 0.5rem;
		font-size: ${({ theme }) => theme.fontSize.extraSmall};
		color: ${({ theme }) => theme.color.text};
		pointer-events: none;
	}

	.custom-datepicker {
		width: 100%;
		height: 3rem;
		border: 1px solid ${({ theme }) => theme.color.border};
		padding: 0.6rem 1.2rem;
		background-color: transparent;
		font-size: ${({ theme }) => theme.fontSize.small};
		color: ${({ theme }) => theme.color.text};
		outline: none;

		&:focus {
			border-color: ${({ theme }) => theme.color.primary};
		}

		&::placeholder {
			color: ${({ theme }) => theme.color.neutral};
		}
	}

	.react-datepicker__header {
		background-color: ${({ theme }) => theme.color.secondary};
		color: ${({ theme }) => theme.color.background};
		border-bottom: none;
	}

	.react-datepicker__current-month,
	.react-datepicker-time__header {
		font-size: ${({ theme }) => theme.fontSize.medium};
		color: ${({ theme }) => theme.color.background};
	}

	.react-datepicker__day-name {
		color: ${({ theme }) => theme.color.background};
	}

	.react-datepicker__day--selected,
	.react-datepicker__day--keyboard-selected {
		background-color: ${({ theme }) => theme.color.primary};
		color: ${({ theme }) => theme.color.background};
		border-radius: ${({ theme }) => theme.borderRadius.small};
	}

	.react-datepicker__day:hover {
		background-color: ${({ theme }) => theme.color.secondary};
		color: ${({ theme }) => theme.color.background};
	}

	.react-datepicker__year-dropdown,
	.react-datepicker__month-dropdown {
		background-color: ${({ theme }) => theme.color.background};
		color: ${({ theme }) => theme.color.text};
		border: 1px solid ${({ theme }) => theme.color.border};
	}

	.react-datepicker__year-option:hover,
	.react-datepicker__month-option:hover {
		background-color: ${({ theme }) => theme.color.secondary};
		color: ${({ theme }) => theme.color.background};
	}
`;

export default InputDate;
