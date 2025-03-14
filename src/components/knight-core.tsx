import { Mesh, Material } from 'three'
import { useGLTF, useKeyboardControls } from "@react-three/drei"
import { Camera, useFrame } from "@react-three/fiber"
import { CapsuleCollider, RapierRigidBody, RigidBody } from "@react-three/rapier"
import useWarden from "@/hooks/use-guard"
import useRespawn from "@/hooks/use-respawn"
import { useEffect, useRef } from "react"
import DeviceController from "@/models/device-controller"
import motions, { Controls } from "@/controllers/controller"
import { GLTF } from 'three-stdlib'

type GLTFResult = {
    nodes: Record<string, Mesh>,
    materials: Record<string, Material>
}

const KnightChess: React.FC = () => {
    const { isActive } = useWarden()
    const { nodes, materials } = useGLTF('/red_knight.glb') as GLTF & GLTFResult

    const deviceControl = DeviceController.instance

    const rigidBodyRef = useRef<RapierRigidBody | null>(null)
    const containerRef = useRef<Camera | null>(null)
    const characterRef = useRef<Camera | null>(null)
    const cameraTargetRef = useRef<Camera | null>(null)
    const cameraPositionRef = useRef<Camera | null>(null)

    const [, get] = useKeyboardControls<Controls>()

    const { hasFallen, setHasFallen, knightPosition } = useRespawn()

    useEffect(() => {
        deviceControl.rigidBody = rigidBodyRef.current
        deviceControl.container = containerRef.current
        deviceControl.character = characterRef.current
        deviceControl.cameraTarget = cameraTargetRef.current
        deviceControl.cameraPosition = cameraPositionRef.current
    })

    useEffect(() => {
        if (hasFallen && deviceControl.rigidBody) {
            deviceControl.rigidBody.setTranslation(
                { x: knightPosition[0], y: knightPosition[1], z: knightPosition[2] },
                true
            )

            setHasFallen(false)
        }
    }, [hasFallen, setHasFallen, knightPosition, deviceControl.rigidBody])

    useFrame(({ camera }) => {
        if (isActive) { return }

        motions(camera, get, deviceControl)
    })

    return (
        <RigidBody
            name="spider-knight"
            ref={rigidBodyRef}
            type="dynamic"
            rotation={[0, 6.5, 0]}
            position={[5, 2, 0]}
            colliders={false}
            lockRotations
            onCollisionEnter={({ other }) => {
                if (
                    other.rigidBodyObject?.name === "ground" ||
                    other.rigidBodyObject?.name === "ground-about-me" ||
                    other.rigidBodyObject?.name === "ground-projects" ||
                    other.rigidBodyObject?.name === "ground-hobbies" ||
                    other.rigidBodyObject?.name === "ground-contact-to-me"
                ) {
                    deviceControl.isOnGround = true
                }

                if (other.rigidBodyObject?.name === "limit-floor") { setHasFallen(true) }
            }}
            onCollisionExit={({ other }) => {
                if (
                    other.rigidBodyObject?.name === "ground" ||
                    other.rigidBodyObject?.name === "ground-about-me" ||
                    other.rigidBodyObject?.name === "ground-projects" ||
                    other.rigidBodyObject?.name === "ground-hobbies" ||
                    other.rigidBodyObject?.name === "ground-contact-to-me"
                ) {
                    deviceControl.isOnGround = false
                }

                if (other.rigidBodyObject?.name === "limit-floor") { setHasFallen(false) }
            }}
        >
            <group ref={containerRef}>
                <group ref={cameraTargetRef} position={[0, 0, 0]} />
                <group ref={cameraPositionRef} position={[-3, 3, 3]} />
                <group ref={characterRef}>
                    <mesh
                        name="core-knight"
                        receiveShadow
                        geometry={nodes['core-knight'].geometry}
                        material={materials.pupiles}
                        position={[0, 0, 0]}
                        rotation={[0, 0, -7.87]}
                        scale={[0.303, 0.907, 0.7]}
                    />
                </group>
            </group>
            <CapsuleCollider args={[1.2, 0.3]} />
        </RigidBody>
    )
}

export default KnightChess