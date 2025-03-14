import DeviceController from "@/models/device-controller";
import { Camera } from "@react-three/fiber";
import { MathUtils } from "three";

export type Controls = "left" | "right" | "forward" | "backward" | "run" | "jump"

type GetControls = () => Record<Controls, boolean>

function motions(camera: Camera, get: GetControls, device: DeviceController) {
    if (device.rigidBody.current) {
        const velocity = device.rigidBody.current.linvel()

        const movement = { x: 0, z: 0 }

        if (get().left || device.leftPressed.current) { device.rotationTarget.current += device.rotationSpeed }
        if (get().right || device.rightPressed.current) { device.rotationTarget.current -= device.rotationSpeed }

        if (get().forward || device.forwardPressed.current) {
            movement.x = - Math.sin(device.rotationTarget.current)
            movement.z = - Math.cos(device.rotationTarget.current)
        }

        if (get().backward || device.backwardPressed.current) {
            movement.x = Math.sin(device.rotationTarget.current)
            movement.z = Math.cos(device.rotationTarget.current)
        }

        const speed = (get().run || device.runPressed.current) ? device.runSpeed : device.walkSpeed
        velocity.x = movement.x * speed
        velocity.z = movement.z * speed

        const newVelocity = {
            x: movement.x * speed,
            y: velocity.y,
            z: movement.z * speed,
        }

        if ((get().jump || device.jumpPressed.current) && device.isOnGround.current) {
            newVelocity.y = device.jump
            device.isOnGround.current = false
        }

        device.rigidBody.current.setLinvel(newVelocity, true)
    }

    if (device.container.current) {
        device.container.current.rotation.y = MathUtils.lerp(
            device.container.current.rotation.y,
            device.rotationTarget.current,
            0.1
        )
    }

    device.cameraPosition.current?.getWorldPosition(device.cameraWorldPosition.current)
    camera.position.lerp(device.cameraWorldPosition.current, 0.1)

    if (device.cameraTarget.current) {
        device.cameraTarget.current?.getWorldPosition(device.cameraLookAtWorldPosition.current)
        device.cameraLookAt.current.lerp(device.cameraLookAtWorldPosition.current, 0.1)

        camera.lookAt(device.cameraLookAt.current)
    }
}

export default motions