import { createContext, ReactNode, useContext, useState } from "react";
import { fabric } from "fabric";

export interface iCanvasContext {
  canvas: fabric.Canvas | undefined;
  setCanvas: (c: fabric.Canvas) => void;
}

export type CanvasProviderProps = {
  children: ReactNode;
};

const CanvasContext = createContext<iCanvasContext>({
  canvas: undefined,
  setCanvas: () => {},
});

export default function CanvasProvider({ children }: CanvasProviderProps) {
  const [canvas, setCanvas] = useState<fabric.Canvas | undefined>();

  return (
    <CanvasContext.Provider
      value={{
        canvas,
        setCanvas,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
}

export function useFabricCanvas() {
  const ctx = useContext(CanvasContext);
  return ctx;
}
