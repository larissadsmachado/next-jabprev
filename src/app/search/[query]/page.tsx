import { use } from "react";
import SearchPage from "../../components/search"; 
import React from "react";

export default function SearchResults({
  params,
}: {
  // Avise ao TS que "params" pode ser Promise
  params: Promise<{ query: string }>;
}) {
  // Desempacota a Promise usando "use()"
  const { query } = use(params);

  // Se vier encodeURIComponent (ex.: comunica%C3%A7%C3%A3o), decodifique
  const searchTerm = decodeURIComponent(query);

  return (
    <div className="mt-96">
      <h1>Resultados para: {searchTerm}</h1>
      {/* Agora passamos esse searchTerm para o componente client */}
      <SearchPage searchTerm={searchTerm} />
    </div>
  );
}
