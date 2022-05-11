import { StyledCard } from './Card.styled';

interface IProps {
  item: {
    id: number;
    title: string;
    image: string;
    body: string;
  };
}

const Card: React.FC<IProps> = ({ item: { id, title, body, image } }) => {
  const imgSrc = require(`src/assets/images/${image}`);

  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={imgSrc} alt='' />
      </div>
    </StyledCard>
  );
};

export default Card;
