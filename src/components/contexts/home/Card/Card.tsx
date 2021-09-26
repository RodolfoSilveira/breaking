import * as S from './Card.styles'

export type CardProps = {
  char_id: number
  name: string
  img: string
  nickname: string
  handleClick: (n: number) => void
}

const Card = ({ ...args }: CardProps) => (
  <S.Wrapper onClick={() => args.handleClick(args.char_id)}>
    <S.ImageBox>
      <img src={args.img} alt="profile" />
    </S.ImageBox>
    <S.ProfileBox>
      <S.Title>{args.name || 'unknown'}</S.Title>
      <S.Subtitle>{args.nickname || 'unknown'}</S.Subtitle>
    </S.ProfileBox>
  </S.Wrapper>
)

export default Card
