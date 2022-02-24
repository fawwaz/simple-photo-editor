import React, { useState } from 'react';
import FilePicker from 'editor/components/FilePicker/FilePicker';
import Canvas from 'editor/components/Canvas/Canvas';

export default function Container() {
  const [isFileLoaded, setIsFileLoaded] = useState(false);

  const handleSelectFile = () => setIsFileLoaded(true);

  return (
    <>
      {!isFileLoaded && <FilePicker onFileSelected={handleSelectFile} />}
      <Canvas isFileLoaded={isFileLoaded} />
    </>
  );
}
