import React from 'react';
import AudioPlayer from './shared/components/AudioPlayer/containers/AudioPlayer';
import { demoContent } from './shared/components/AudioPlayer/demoContent/demoContent';

function App() {
  return (
    <div>
      <AudioPlayer audioItems={demoContent} />
    </div>
  );
}

export default App;
