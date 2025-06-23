import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} /> {/* Ini diubah: Intensitas ambientLight dinaikkan dikit biar lebih terang secara keseluruhan */}
      <directionalLight position={[0, 0, 0.05]} intensity={0.7} /> {/* Ini diubah: Intensitas directionalLight dinaikkan dikit */}
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        {/* Ini dia inti perubahannya: material warna bolanya! */}
        {/* Dari color="#fff8eb" (putih kekuningan), kita bisa ganti ke warna yang lebih 'dingin' atau 'netral' di light mode. */}
        {/* Misalnya, '#FFFFFF' (putih bersih) atau '#F5F5F5' (abu-abu sangat muda) */}
        <meshStandardMaterial color="#FFFFFF" polygonOffset polygonOffsetFactor={-5} flatShading /> {/* Menggunakan putih bersih */}
        {/* Decal position dan rotation tetap sama, ini yang nampilin iconnya */}
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
