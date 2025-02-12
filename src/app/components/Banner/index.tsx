const Banner = () => {
    return (
        <div className="relative h-screen w-full flex justify-center items-center text-white">
            {/* Vídeo de fundo */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/video.mp4" type="video/mp4" />
            </video>

            {/* Overlay escuro para melhorar a legibilidade */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Conteúdo do banner */}
            <div className="relative text-center">
                <h1 className="text-3xl md:text-5xl font-bold">JABOATÃO PREV</h1>
                <p className="text-lg md:text-xl mt-2">COMPROMISSO COM O FUTURO</p>

                {/* Botões */}
                <div className="flex justify-center gap-4 mt-6 flex-wrap">
                    <button className="border-2 border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
                        SERVIÇOS
                    </button>
                    <button className="border-2 border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
                        ENQUETE
                    </button>
                    <button className="border-2 border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
                        FALE CONOSCO
                    </button>
                    <button className="border-2 border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
                        NOTÍCIAS
                    </button>
                </div>

                {/* Ícones de premiação */}
                <div className="flex justify-center gap-6 mt-8 flex-wrap">
                    <img src="/images/Medalha/premio1.png" alt="Prêmio 1" className="h-20" />
                    <img src="/images/Medalha/premio2.png" alt="Prêmio 2" className="h-20" />
                    <img src="/images/Medalha/premio3.png" alt="Prêmio 3" className="h-20" />
                    <img src="/images/Medalha/premio4.png" alt="Prêmio 4" className="h-20" />
                    <img src="/images/Medalha/premio5.png" alt="Prêmio 5" className="h-20" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
