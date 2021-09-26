import { useState, lazy } from 'react'
import Card from 'components/contexts/home/Card'
import Grid from 'components/structure/Grid/Grid'
import { useCharacters } from 'contexts'
import { handleOnceCharacter } from 'useCases/characters'
import * as S from './Home.styles'
import WithSuspense from 'components/structure/WithSuspense/WithSuspense'
import { ErrorBoundary } from 'lib/core/ErrorBoundary'

const Modal = lazy(() => import('components/contexts/home/Modal'));

const ModalSuspense = WithSuspense(Modal);

const Home = () => {
  const [open, setOpen] = useState(false);
  const [character, setCharacter] = useState();
  const data = useCharacters()

  const openModal = async (id: number) => {
    const resp = await handleOnceCharacter(id);

    setCharacter(resp);
    setOpen(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const closedModal = () => {
    setOpen(false)
  }

  return (
    <S.Wrapper>
      <ErrorBoundary>
        {
          open && <ModalSuspense loadComponent={character} character={character} closedModal={closedModal} />
        }
      </ErrorBoundary>
      <ErrorBoundary>
        <Grid>
          {data?.data?.map((item, index) => (
            <Card key={index} {...item} handleClick={openModal} />
          ))}
        </Grid>
      </ErrorBoundary>
    </S.Wrapper>
  )
}

export default Home;
