import { notFound } from "next/navigation";
import { fetchPostById } from "@/lib/api";

interface NoticiaPageProps {
  params: { id: string };
}

export default async function NoticiaPage({ params }: NoticiaPageProps) {
  if (!params?.id) {
    return notFound();
  }

  const post = await fetchPostById(params.id); // Supondo que esta seja sua função de fetch
  
  if (!post) {
    return notFound();
  }

  return (
    <main className="max-w-3xl mx-auto p-6 h-full ">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 pt-20">{post.title.rendered}</h1>
      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </main>
  );
}
