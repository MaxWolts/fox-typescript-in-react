type Props = { image: string };

const RandomFox = ({ image }: Props): JSX.Element => {
    return <img src={image} width={320} height="auto" className="rounded" alt="a fox image"/>
}

export default RandomFox