import styled from 'styled-components';
import Link from 'next/link';
import HeightAutoImg from '@/components/common/HeightAutoImg';
import { IArticleDetail } from '@/models/article.model';
import { dateFormatter } from '@/utils/formatter';
import { getFirstImage } from '@/utils/getFirstImage';

interface Props {
	popular: IArticleDetail[];
	flex?: number;
	className?: string;
}

function PopularArticle({ popular, flex, className }: Props) {

	return (
		<PopularNewsletterStyled flex={flex} className={className}>
			<h3 className="section-title">지금 인기 아티클 TOP 5</h3>
			<ul className="popular-list">
				{popular.map((article, index) => (
					<li key={index}>
						<p className="index">{index + 1}</p>
						<Link href={`/articles/detail/${article.id}`} className="text-section">
							<div>
								<p className="title">{article.title}</p>
								<p className="date">{dateFormatter(article.createdAt)}</p>
							</div>
						</Link>
						{article.imageUrl ? (
							<Link href={`/articles/detail/${article.id}`} className="thum-link">
								<HeightAutoImg src={getFirstImage(article.imageUrl)} aspectratio={1} />
							</Link>
						) : (
							<div className="thum-empty" />
						)}
					</li>
				))}
			</ul>
		</PopularNewsletterStyled>
	);
}

const PopularNewsletterStyled = styled.div<Omit<Props, 'popular'>>`
	position: sticky;
	overflow: auto;
	height: 100%;
	top: 4rem;

	.index {
		color: ${({ theme }) => theme.color.mediumGrey};
	}

	.section-title {
		font-size: ${({ theme }) => theme.fontSize.medium};
		font-weight: ${({ theme }) => theme.fontWeight.semiBold};
		padding: 0 0 1rem 0;
		border-bottom: 1px solid ${({ theme }) => theme.color.border};
	}

	.popular-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem 0 1rem 0;
		border-bottom: 1px solid ${({ theme }) => theme.color.border};

		li {
			overflow: hidden;
			display: flex;
			flex-direction: row;
			gap: 1rem;

			.thum-link {
				flex: 1;
				height: fit-content;
				margin: 0;
			}

			.text-section {
				flex: 3;
				word-break: break-word;
				height: 4.25rem;

				.category {
					font-size: ${({ theme }) => theme.fontSize.extraSmall};
					color: ${({ theme }) => theme.color.primary};
					font-weight: ${({ theme }) => theme.fontWeight.medium};
				}

				.title {
					font-size: ${({ theme }) => theme.fontSize.small};
					font-weight: ${({ theme }) => theme.fontWeight.medium};

					overflow: hidden;
					text-overflow: ellipsis;

					display: -webkit-box;
					-webkit-line-clamp: 2; // 원하는 라인수
					-webkit-box-orient: vertical;
				}

				.date {
					font-size: ${({ theme }) => theme.fontSize.extraSmall};
					color: ${({ theme }) => theme.color.lightGrey};
				}
			}
		}

		li:hover .title {
			color: ${({ theme }) => theme.color.primary};
		}
	}

	@media screen and ${({ theme }) => theme.mediaQuery.tablet} {
		display: flex;
		flex-direction: column;

		.section-title {
			border-top: none;
		}

		.popular-list {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			gap: 1.5rem;
			margin-bottom: 0;

			li {
				display: flex;
				flex-direction: row;
				align-items: stretch;
				flex: fit-content;

				.thum-link {
					flex: 1;
				}

				.thum-empty {
					flex: 1;
					aspect-ratio: 1;
					height: auto;
				}

				.text-section {
					flex: 5;
					justify-content: space-between;

					.title {
						height: 3rem;
					}
				}
			}
		}
	}

	@media screen and ${({ theme }) => theme.mediaQuery.mobile} {
		.thum-empty {
			display: none;
		}
	}
`;

export default PopularArticle;
