import { Mesh, Material } from 'three'
import { useGLTF, useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { CapsuleCollider, RigidBody } from "@react-three/rapier"
import useWarden from "@/hooks/use-guard"
import useRespawn from "@/hooks/use-respawn"
import { useEffect } from "react"
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

    const [, get] = useKeyboardControls<Controls>()

    const { hasFallen, setHasFallen, knightPosition } = useRespawn()

    useEffect(() => {
        if (hasFallen && deviceControl.rigidBody.current) {
            deviceControl.rigidBody.current.setTranslation(
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
            ref={deviceControl.rigidBody}
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
                    deviceControl.isOnGround.current = true
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
                    deviceControl.isOnGround.current = false
                }

                if (other.rigidBodyObject?.name === "limit-floor") { setHasFallen(false) }
            }}
        >
            <group ref={deviceControl.container}>
                <group ref={deviceControl.cameraTarget} position={[0, 0, 0]} />
                <group ref={deviceControl.cameraPosition} position={[-3, 3, 3]} />
                <group ref={deviceControl.character}>
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