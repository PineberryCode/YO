"use client"

import { Canvas } from '@react-three/fiber'
import { KeyboardControls } from '@react-three/drei'
import React from 'react'
import KnightChess from '@/components/knight-core'
import { Physics } from "@react-three/rapier"
import { KeyMotions } from '@/models/keyboard'
import { Toaster } from '@/components/ui/sonner'
import { SemiPlane, LimitPlane } from '@/components/plane'
import MobileControl from '@/components/mobile-control'
import { Respawner } from '@/components/respawn'

const yoKeyBoard: KeyMotions[] = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] }, // Rotate
  { name: "right", keys: ["ArrowRight", "KeyD"] }, // Rotate
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["Shift"] }
]

const Main: React.FC = () => {

  return (
    <div
      id="canvas-container"
      className='fixed overflow-hidden w-screen h-screen flex justify-start items-center cursor-none'
    >
      <Respawner>
        <KeyboardControls map={yoKeyBoard}>
          <Canvas
            camera={{ position: [17, 15, 1] }}
            shadows="soft"
          >
            <directionalLight
              position={[-20, 40, 90]}
              intensity={5}
            />
            <ambientLight intensity={1} />
            <Physics>
              <KnightChess />
              <SemiPlane />
              <LimitPlane />
            </Physics>
          </Canvas>
        </KeyboardControls>
        <MobileControl />
        <Toaster
          position='top-center'
          visibleToasts={1}
          richColors
        />
      </Respawner>
    </div>
  );
}

export default Main
