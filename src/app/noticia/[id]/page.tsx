import { notFound } from "next/navigation";
import { fetchPostById } from "@/lib/api";
import { FaFacebook, FaWhatsapp, FaTwitter, FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";

interface NoticiaPageProps {
  params: { id: string };
}

const NoticiaDetalhada = ({ post }: { post: any }) => {
  const shareUrl = `https://www.example.com/noticia/${post.id}`;
  const shareText = `Confira essa notícia: ${post.title.rendered}`;

  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR");
  const formattedTime = new Date(post.date).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <main className="max-full mx-auto p-6 h-full">
      {/* Seção da imagem de destaque e informações */}
      <div className="relative w-full">
        <img
          src={post.featured_media}
          alt={post.title.rendered}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
          <h1 className="text-3xl font-bold">{post.title.rendered}</h1>
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock />
              <span>{formattedTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTag />
              <span>{post.category || "Sem categoria"}</span>
            </div>
          </div>
          {/* Links para compartilhamento */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400"
            >
              <FaFacebook size={25} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}%20${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400"
            >
              <FaWhatsapp size={25} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}%20${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400"
            >
              <FaTwitter size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* Conteúdo da notícia */}
      <section className="mt-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-red-500 mb-4">{post.title.rendered}</h1>
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </section>
    </main>
  );
};

export default async function NoticiaPage({ params }: NoticiaPageProps) {
  if (!params?.id) {
    return notFound();
  }

  const post = await fetchPostById(params.id);

  if (!post) {
    return notFound();
  }

  return <NoticiaDetalhada post={post} />;
}
