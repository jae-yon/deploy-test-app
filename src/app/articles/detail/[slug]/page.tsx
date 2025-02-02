import Article from '@/app/articles/detail/[slug]/_components/Article';
import { stripCodeFence } from '@/utils/stripCodeFence';
import { getArticleContent, getArticleList, getPopularArticles } from '@/hooks/useArticle';

export default async function NewsletterDetailPage({ params }: { params: { slug: string }; }) {
  const { slug } = (await params);

  const articleInfo = await getArticleContent(slug);
  const articleContent = articleInfo.newsletter;
  const articleContentHTML = stripCodeFence(articleContent.contentAsHTML, 'html');

  const popularArticles = await getPopularArticles(100);
  const latestArticles = await getArticleList(9);

  return (
    <>
      <Article
        article={articleContent}
        summary={articleContent.content ? articleContent.content : ''}
        content={articleContentHTML}
        popular={popularArticles}
        latest={latestArticles}
        newsId={articleContent.id}
        prev={articleInfo.previousNewsletter}
        next={articleInfo.nextNewsletter}
      />
    </>
  );
}