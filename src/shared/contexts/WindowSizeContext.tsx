import { createContext, ReactNode, useContext } from 'react';
import { useWindowSize } from 'shared/hooks/useWindowSize';

export interface iWindowSizeContext {
  width: number;
  height: number;
}

export type WindowSizeProviderProps = {
  children: ReactNode;
};

const WindowSizeContext = createContext<iWindowSizeContext>({
  width: 0,
  height: 0,
});

export default function WindowSizeProvider({
  children,
}: WindowSizeProviderProps) {
  const { width = 0, height = 0 } = useWindowSize();

  return (
    <WindowSizeContext.Provider
      value={{
        width,
        height,
      }}
    >
      {children}
    </WindowSizeContext.Provider>
  );
}

export function useBrowserSize() {
  const ctx = useContext(WindowSizeContext);
  return ctx;
}
