import useWarden from "@/hooks/use-guard"
import { Cube } from "./cube"
import { RigidBody } from "@react-three/rapier"

const SemiPlane: React.FC = () => {
    const active = useWarden()

    return (
        <>
            <Cube
                warden={active}
                name='ground'
                position={[5, -4, 0]}
                args={[7, 6, 7]}
                radius={1.2}
                smoothness={4}
                color='crimson'
            />
            <Cube
                warden={active}
                name='ground-about-me'
                position={[-10, -2, -8]}
                args={[7, 6, 7]}
                radius={1.2}
                smoothness={4}
                color='crimson'
            />
            <Cube
                warden={active}
                name='ground'
                position={[-3, -4, -4]}
                args={[7, 6, 7]}
                radius={1.2}
                smoothness={4}
                color='white'
            />

            <Cube
                warden={active}
                name='ground'
                position={[7, -3, -8]}
                args={[7, 6, 7]}
                radius={1.2}
                smoothness={4}
                color='black'
            />

            <Cube
                warden={active}
                name='ground-projects'
                position={[9, -4, -16]}
                args={[7, 6, 7]}
                radius={1.2}
                smoothness={4}
                color='crimson'
            />

            <Cube
                warden={active}
                name='ground'
                position={[-2, -4, -13]}
                args={[7, 6, 7]}
                radius={1.2}
                smoothness={4}
                color='black'
            />

            <Cube
                warden={active}
                name='ground'
                position={[-12, -1, -16]}
                args={[7, 6, 7]}
                radius={1.2}
                smoothness={4}
                color='white'
            />

            <Cube
                warden={active}
                name='ground-hobbies'
                position={[-10, -3, -25]}
                args={[7, 6, 7]}
                radius={1.2}
                smoothness={4}
                color='crimson'
            />

            <Cube
                warden={active}
                name='ground'
                position={[-2, -4, -21]}
                args={[7, 6, 7]}
                radius={1.2}
                smoothness={4}
                color='white'
            />

            <Cube
                warden={active}
                name='ground'
                position={[6, -5, -22]}
                args={[7, 6, 7]}
                radius={1.2}
                smoothness={4}
                color='black'
            />

            <Cube
                warden={active}
                name='ground-contact-to-me'
                position={[5, -4, -30]}
                args={[7, 6, 7]}
                radius={1.2}
                smoothness={4}
                color='crimson'
            />
        </>
    )
}

const LimitPlane: React.FC = () => {
    return (
        <RigidBody
            type="fixed"
            colliders="hull"
            name='limit-floor'
            rotation={[80, 0, 0]}
            position={[-5, -30, 0]}
        >
            <mesh receiveShadow>
                <planeGeometry
                    args={[200, 200]}
                />
                <meshStandardMaterial transparent opacity={0} />
            </mesh>
        </RigidBody>
    )
}

export { SemiPlane, LimitPlane }