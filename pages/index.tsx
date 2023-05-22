import { useState } from "react";
import RandomFox from "@/components/RandomFox";
import type {MouseEventHandler} from "react";

const random = () => Math.floor(Math.random() * 123) + 1;
//generate simple unique id
const generateId = () => Math.random().toString(36).substr(2, 9);

type ImageItem = {
  id: string,
  url: string
}

export default function Home() {
  const [images, setImages] = useState<ImageItem[]>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    const newImageItem: ImageItem = {id: `${generateId()}`, url: `https://randomfox.ca/images/${random()}.jpg`}
    setImages([...images, newImageItem]);
  }

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello</h1>
      <button onClick={addNewFox}>Add new fox</button>
      {images.map(image => 
        <div key={image.id}>
          <RandomFox image={image.url} />
        </div>)
      }
    </main>
  );
}
