//es comun que los tipos globales inicien con la letra I o T
type ILazyImageProps = { src: string, onLazyLoad:(img:HTMLImageElement)=>void };
type IImageNative = ImgHTMLAttributes<HTMLImageElement>;
type IImageItem = {
    id: string,
    url: string
};