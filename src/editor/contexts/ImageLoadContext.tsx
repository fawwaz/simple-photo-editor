import { createContext, ReactNode, useContext, useState } from 'react';
import { fabric } from 'fabric';

export interface iImageLoadContext {
  isLoaded: boolean;
  setIsLoaded: (b: boolean) => void;
}

export type ImageLoadProviderProps = {
  children: ReactNode;
};

const ImageLoad = createContext<iImageLoadContext>({
  isLoaded: false,
  setIsLoaded: () => {},
});

export default function ImageLoadProvider({
  children,
}: ImageLoadProviderProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <ImageLoad.Provider
      value={{
        isLoaded,
        setIsLoaded,
      }}
    >
      {children}
    </ImageLoad.Provider>
  );
}

export function useImageLoad() {
  const ctx = useContext(ImageLoad);
  return ctx;
}
