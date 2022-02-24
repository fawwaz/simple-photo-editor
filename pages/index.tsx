import type { NextPage } from 'next';
import { IconContext } from 'react-icons';

import CanvasProvider from 'shared/contexts/CanvasContext';
import ImageLoadProvider from 'editor/contexts/ImageLoadContext';
import Container from 'editor/components/Container/Container';

const Home: NextPage = () => {
  return (
    <CanvasProvider>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <ImageLoadProvider>
          <Container />
        </ImageLoadProvider>
      </IconContext.Provider>
    </CanvasProvider>
  );
};

export default Home;
