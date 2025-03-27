/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import { fetchPostById } from "@/lib/api";
import { FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";
import Image from "next/image";
import { JSX } from "react/jsx-runtime";
import React from "react";

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

const NoticiaDetalhada = ({ post }: { post: Post }): JSX.Element => {
  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR");
  const formattedTime = new Date(post.date).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <main className="relative w-full h-auto">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 w-full h-1/2">
        <Image
          src="/images/Instituicao/fachada.jpeg"
          alt="Imagem de fundo"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        {/* Gradiente com transparência ajustada */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060d29ef] to-[#0000018c]" />
      </div>

      {/* Imagem destacada e Título */}
      <div className="relative z-10 w-full h-1/2 flex flex-col justify-center items-center text-white p-6">
        {/* TÍTULO */}
        <div className="mt-6 pt-44">
          <div className="flex gap-4 mt-2 items-center">
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

          <h1 className="text-4xl font-bold uppercase pt-3 pb-14 break-words leading-tight max-w-[800px] mx-auto">
            {post.title.rendered}
          </h1>
        </div>

        {/* IMAGEM DESTAQUE COM TAMANHO FIXO */}
        {post.featured_image_url && (
          <div className="w-[1200px] h-[600px] max-w-full mx-auto overflow-hidden rounded-lg shadow-lg">
            <Image
              src={`/api/image-proxy?url=${encodeURIComponent(
                post.featured_image_url
              )}`}
              alt={post.title.rendered}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Conteúdo da notícia */}
      <section className="relative z-10 my-20 max-w-6xl mx-auto shadow-[0_6px_40px_rgba(0,_0,_0,_0.45)] bg-white p-10 rounded-lg">
        <h1 className="text-5xl font-bold mb-4 text-center pb-5 text-green-900">
          {post.title.rendered}
        </h1>
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
        <div
          className="prose prose-lg max-w-none text-xl"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </section>
    </main>
  );
};

export default async function NoticiaPage({
  params,
}: any): Promise<JSX.Element> {
  if (!params?.id) {
    return notFound();
  }

  const postId = parseInt(params.id, 10);
  if (isNaN(postId)) {
    return notFound();
  }

  const post = await fetchPostById(postId.toString());
  if (!post) {
    return notFound();
  }

  return <NoticiaDetalhada post={post} />;
}
