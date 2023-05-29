import { useState } from "react";
import LazyImage from "@/components/LazyImage";
import type {MouseEventHandler} from "react";

const random = () => Math.floor(Math.random() * 123) + 1;
//generate simple unique id
const generateId = () => Math.random().toString(36).substr(2, 9);

export default function Home() {
  const [images, setImages] = useState<IImageItem[]>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    const newImageItem: IImageItem = {id: `${generateId()}`, url: `https://randomfox.ca/images/${random()}.jpg`}
    setImages([...images, newImageItem]);
  }

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello</h1>
      <button onClick={addNewFox}>Add new fox</button>
      {images.map(image => 
        <div key={image.id}>
          <LazyImage src={image.url} title={'random-fox'} 
          onClick={()=> console.log('uwu')} 
          onLazyLoad={(node:HTMLImageElement)=>console.log(node)}
          />
        </div>)
      }
    </main>
  );
}
