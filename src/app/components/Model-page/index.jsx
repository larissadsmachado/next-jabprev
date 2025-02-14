import AccessibilityButton from "../components/AccessibilityButton";
export default function Model({ children, caminhoImagem, titulo, subtitulo }) {
  return (
    <div>
      <AccessibilityButton />
      <div className="relative w-full h-[250px] flex items-end justify-center bg-[#122162]">
        {/* Imagem de fundo */}
        <img
          src={caminhoImagem}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Camada de sobreposição para escurecer a imagem */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Conteúdo sobre a imagem */}
        <div className="z-10 text-center text-white pb-4 ">
        <h1 className=" text-[40px] leading-[40px] pb-[5px] font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)] uppercase">{titulo}</h1>

          {/* Aumenta o subtítulo */}
          <p className="text-[14px] font-bold	">{subtitulo}</p>
        </div>
      </div>

      {children}
      
    </div>
  );
}
