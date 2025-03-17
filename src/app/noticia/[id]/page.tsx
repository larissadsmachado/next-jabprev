import { notFound } from "next/navigation";
import { fetchPostById } from "@/lib/api";
import { FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";
import Image from 'next/image';

interface NoticiaPageProps {
  params: { id: number };
  searchParams?: { [key: string]: string | string[] | undefined };
}

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  date: string;
  category: string;
  content: {
    rendered: string;
  };
  featured_image_url?: string;
}

const NoticiaDetalhada = ({ post }: { post: Post }) => {

  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR");
  const formattedTime = new Date(post.date).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <main className="max-full mx-auto h-full">
      {/* Seção da imagem de destaque e informações */}
      <div className="relative w-full">
        {post.featured_image_url && ( // Garante que só renderiza se houver imagem
          <Image
            src={`/api/image-proxy?url=${encodeURIComponent(post.featured_image_url)}`}
            alt={post.title.rendered}
            width={1200}
            height={800}
            className="w-full h-screen object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-white p-6 ">

          <div className="absolute bottom-0 left-0 w-full bg-[#00347070] p-[32px] drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">

          <h1 className="Montserrat-Bold uppercase text-[40px] text-white text-center">{post.title.rendered}</h1>

          <div className="flex gap-4 mt-2 items-center justify-center">
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
          </div>
        </div>
      </div>


      {/* Conteúdo da notícia */}
      <section className="my-20 max-w-6xl mx-auto shadow-2xl bg-white p-10">
        <h1 className="Montserrat-Bold text-5xl font-bold mb-4 text-center pb-5">{post.title.rendered}</h1>


        <div className="flex gap-4 mt-2 mb-5 items-center justify-center">
            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock />
              <span>{formattedTime}</span>
            </div>
          </div>


        <div className="montserrat-regular prose prose-lg max-w-none text-xl" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </section>
    </main>
  );
};

export default async function NoticiaPage({ params }: NoticiaPageProps) {
  if (!params?.id) {
    return notFound();
  }

  const post = await fetchPostById(String(params.id));

  if (!post) {
    return notFound();
  }

  return <NoticiaDetalhada post={post} />;
}
