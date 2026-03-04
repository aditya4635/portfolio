import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CyberCube from './CyberCube.jsx';
import CanvasLoader from './Loading.jsx';

const ProjectsCanvas = () => {
  return (
    <div className="h-20 w-20 hidden sm:block">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} />
        <Center>
          <Suspense fallback={<CanvasLoader />}>
            <CyberCube scale={1.5} />
          </Suspense>
        </Center>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default ProjectsCanvas;
