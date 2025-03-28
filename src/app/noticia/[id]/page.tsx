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
  <div className="absolute top-0 left-0 w-full h-[600px]">
    <Image
      src="/images/Bandeira/bandeira.jpeg"
      alt="Imagem de fundo"
      layout="fill"
      objectFit="cover"
      className="z-0"
    />
    {/* Gradiente com transparência ajustada */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#060d29ef] to-[#0000018c]" />
  </div>

  {/* Espaço reservado para empurrar o conteúdo para baixo sem alterar a imagem de fundo */}
  <div className="pt-[150px]"></div>

  {/* Imagem destacada e Título */}
  <div className="Montserrat-Medium relative z-10 flex flex-col text-white p-6">
    {/* TÍTULO */}
    <div className="w-[1200px] mx-auto">
      <div className="flex gap-4 mt-2 ">
        <div className="flex gap-2">
          <FaCalendarAlt />
          <span>{formattedDate}</span>
        </div>
        <div className="flex gap-2">
          <FaClock />
          <span>{formattedTime}</span>
        </div>
      </div>

      <h1 className="text-5xl font-bold uppercase pt-3 pb-14 break-words leading-tight">
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
  <section className="relative z-10 my-20 max-w-6xl mx-auto  bg-white p-10 rounded-lg">
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
