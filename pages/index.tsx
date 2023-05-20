import { useState } from "react";
import RandomFox from "@/components/RandomFox";

const random = () => Math.floor(Math.random() * 123) + 1;
//generate simple unique id
const generateId = () => Math.random().toString(36).substr(2, 9);

type ImageItem = {
  id: string,
  url: string
}

export default function Home() {
  const [images, setImages] = useState<ImageItem[]>([
    {id: `${generateId()}`, url: `https://randomfox.ca/images/${random()}.jpg`},
    {id: `${generateId()}`, url: `https://randomfox.ca/images/${random()}.jpg`},
    {id: `${generateId()}`, url: `https://randomfox.ca/images/${random()}.jpg`},
    {id: `${generateId()}`, url: `https://randomfox.ca/images/${random()}.jpg`},
  ]);

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello</h1>
      {images.map(image => 
        <div key={image.id}>
          <RandomFox image={image.url} />
        </div>)
      }
    </main>
  );
}
