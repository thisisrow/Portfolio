import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane, Sky } from "../models";
import { arrow } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Try to play audio immediately when component mounts
    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (error) {
        // Browser prevented autoplay, set playing state to false
        setIsPlayingMusic(false);
      }
    };

    if (isPlayingMusic) {
      playAudio();
    } else {
      audioRef.current.pause();
    }

    // Cleanup function to pause audio when component unmounts
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  // Add click handler for the entire page
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!audioRef.current.playing && isPlayingMusic) {
        audioRef.current.play();
      }
    };

    // Add click listener to the entire document
    document.addEventListener('click', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  useEffect(() => {
    // Hide popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      {showPopup && (
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-lg shadow-lg z-50 flex items-center gap-4 animate-fade-in'>
          <img src={arrow} alt="arrow left" className="w-6 h-6 object-contain rotate-180" />
          <p className="text-black text-sm font-medium">
            Drag left or right to view information
          </p>
          <img src={arrow} alt="arrow right" className="w-6 h-6 object-contain" />
        </div>
      )}

      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      <div className='fixed bottom-4 left-4 z-20'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
