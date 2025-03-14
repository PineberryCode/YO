import React, {  } from 'react'
import { RoundedBox } from '@react-three/drei'
import { CollisionTarget, RigidBody } from '@react-three/rapier'
import { Warden } from './warden-window'
import { showAboutMe, showContactToMe, showHobbies, showProjects } from '@/utils/show-card'

interface CubeProps {
    warden: Warden
    name: string
    position: [number, number, number]
    args: [number, number, number]
    radius: number
    smoothness: number
    color: string
}

const Cube: React.FC<CubeProps> = (props) => {
    return (
        <>
            <RigidBody
                type='fixed'
                colliders='hull'
                name={props.name}
                onCollisionEnter={({ other }) => {
                    toastCollision(other, props)
                }}>
                <RoundedBox
                    receiveShadow
                    args={props.args}
                    radius={props.radius}
                    smoothness={props.smoothness}
                    position={props.position}
                >
                    <meshStandardMaterial color={props.color} />
                </RoundedBox>
            </RigidBody>
        </>
    )
}

/**
 * This function only serves to capture the collision with an specific object and
 * its params are used to identify when the `spider-knight` collisions with an 
 * specific cube:
 * @param other identify the `spider-knight`
 * @param props identify: ground-[about-me|projects|hobbies|contact-to-me]
 */
function toastCollision(other: CollisionTarget, props: CubeProps) {
    
    if (other.rigidBodyObject?.name === "spider-knight") {
        switch (props.name) {
            case "ground-about-me": {
                props.warden?.setIsActive(true)
                showAboutMe()
                break
            }
            case "ground-projects": {
                props.warden?.setIsActive(true)
                showProjects()
                break
            }
            case "ground-hobbies": {
                props.warden?.setIsActive(true)
                showHobbies()
                break
            }
            case "ground-contact-to-me": {
                props.warden?.setIsActive(true)
                showContactToMe()
                break
            }
        }
    }
}

export { Cube }