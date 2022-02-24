import type { NextPage } from 'next';
import Head from 'next/head';
import { IconContext } from 'react-icons';

import WindowSizeProvider from 'shared/contexts/WindowSizeContext';
import CanvasProvider from 'shared/contexts/CanvasContext';
import ImageLoadProvider from 'editor/contexts/ImageLoadContext';
import Container from 'editor/components/Container/Container';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Photo Editor</title>
        <meta
          name="description"
          content="Just another simple photo editor"
        ></meta>
      </Head>
      <WindowSizeProvider>
        <CanvasProvider>
          <IconContext.Provider value={{ className: 'react-icons' }}>
            <ImageLoadProvider>
              <Container />
            </ImageLoadProvider>
          </IconContext.Provider>
        </CanvasProvider>
      </WindowSizeProvider>
    </>
  );
};

export default Home;
