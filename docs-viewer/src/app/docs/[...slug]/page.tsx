import { getDocBySlug } from '@/utils/docs';
import MarkdownContent from '@/components/MarkdownContent';

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const resolvedParams = await params;
  const doc = await getDocBySlug(resolvedParams.slug.join('/'));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{doc.meta.title || doc.slug}</h1>
      <MarkdownContent content={doc.content} />
    </div>
  );
}
