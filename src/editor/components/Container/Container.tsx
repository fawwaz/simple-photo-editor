import React, { useState } from 'react';
import FilePicker from 'editor/components/FilePicker/FilePicker';
import Canvas from 'editor/components/Canvas/Canvas';
import { useImageLoad } from 'editor/contexts/ImageLoadContext';

export default function Container() {
  const { isLoaded } = useImageLoad();

  return (
    <div className="flex flex-col justify-center h-screen">
      {!isLoaded && <FilePicker />}
      <Canvas />
    </div>
  );
}
