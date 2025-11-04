import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row border-b border-white/20">
      {/* Texto */}
      <div className="flex flex-col justify-center px-8 py-16 lg:w-1/2 bg-[#0a0a0a] text-white">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
          New Way of Doing Things
        </h2>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          A{" "}
          <span className="underline decoration-gray-500/50 underline-offset-4">
            Photography Studio
          </span>{" "}
          <br /> Whispers in the Dark
        </h1>

        <p className="text-gray-400 max-w-lg mb-10">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum dfdf.
        </p>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
          <div>
            <p className="text-2xl font-bold">100+</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              Awarded Projects
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">200M</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              Online Followers
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">700K</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              Photo Session
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">25+</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              Years in Business
            </p>
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="bg-white text-black hover:bg-gray-100"
          >
            Contact Us
          </Button>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black"
          >
            Our Services
          </Button>
        </div>
      </div>

      {/* Imagen */}
      <div className="lg:w-1/2 relative h-[400px] lg:h-auto border-l border-white/20">
        <Image
          src="/hero-photo.jpg" // 📸 cambia por tu imagen
          alt="Photography"
          fill
          className="object-cover object-center grayscale"
        />
      </div>
    </section>
  );
};

export default Hero;
