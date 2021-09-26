import { useRef } from 'react'
import { CharacterType } from 'interfaces/characters'
import { useClickOutside } from 'hooks'
import { ErrorBoundary } from 'lib/core/ErrorBoundary'
import * as S from './Modal.styles'

export type ModalProps = {
  character: CharacterType
  closedModal: () => void
}

const Modal = ({ character, closedModal }: ModalProps) => {
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, closedModal);

  return (
    <S.Wrapper>
      <S.Container ref={wrapperRef}>
        <S.Closed>
          <S.ButtonClose onClick={closedModal} type="button">X</S.ButtonClose>
        </S.Closed>
        <S.InformationBox>
          <S.ImageBox>
            <S.Image src={character.img} alt="profile" />
          </S.ImageBox>
          <S.Information>
            <S.Header>
              <S.Title>
                {character.name || 'unknown'}
              </S.Title>
              <S.Span>
                {character.nickname || 'unknown'}
              </S.Span>
            </S.Header>
            <S.SubTitle>Ocupation</S.SubTitle>
            <ErrorBoundary>
              <S.List>
                {character.occupation.map((item: string, index: number) => (
                  <S.Options key={String(index)}>
                    <S.Ocuppation>
                      {item}
                    </S.Ocuppation>
                  </S.Options>
                ))}
              </S.List>
            </ErrorBoundary>
            <S.Info>
              <S.SubTitle>Information</S.SubTitle>
              <S.List>
                <S.Options>
                  <S.Section>Birthday</S.Section>
                  <S.Details>{character.birthday || 'unknown'}</S.Details>
                </S.Options>
                <S.Options>
                  <S.Section>Portrayed</S.Section>
                  <S.Details>{character.portrayed || 'unknown'}</S.Details>
                </S.Options>
                <S.Options>
                  <S.Section>Category</S.Section>
                  <S.Details>{character.category || 'unknown'}</S.Details>
                </S.Options>
                <S.Options>
                  <S.Section>Status</S.Section>
                  <S.Details>{character.status || 'unknown'}</S.Details>
                </S.Options>
              </S.List>
            </S.Info>
          </S.Information>
        </S.InformationBox>
      </S.Container>
    </S.Wrapper>
  )
}


export default Modal
