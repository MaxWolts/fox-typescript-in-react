import { useRef, useEffect, useState } from "react";

type Props = { image: string };

const RandomFox = ({ image }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [src, setSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('hey you!');
          setSrc(image);
          observerRef.current?.disconnect(); // Desconectar el IntersectionObserver después de la primera entrada
        }
      });
    });

    observerRef.current = observer; // Guardar la instancia del IntersectionObserver

    if (node.current) {
      observer.observe(node.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect(); // Desconectar el IntersectionObserver en el desmontaje del componente
      }
    };
  }, [image]);

  return <img ref={node} src={src} width={320} height="auto" className="rounded bg-gray-600" alt="a fox image" />;
};

export default RandomFox;

