import DeviceController from "@/models/device-controller";
import { Camera } from "@react-three/fiber";
import { MathUtils } from "three";

export type Controls = "left" | "right" | "forward" | "backward" | "run" | "jump"

type GetControls = () => Record<Controls, boolean>

function motions(camera: Camera, get: GetControls, device: DeviceController) {
    if (device.rigidBody) {
        const velocity = device.rigidBody.linvel()

        const movement = { x: 0, z: 0 }

        if (get().left || device.leftPressed) { device.rotationTarget += device.rotationSpeed }
        if (get().right || device.rightPressed) { device.rotationTarget -= device.rotationSpeed }

        if (get().forward || device.forwardPressed) {
            movement.x = - Math.sin(device.rotationTarget)
            movement.z = - Math.cos(device.rotationTarget)
        }

        if (get().backward || device.backwardPressed) {
            movement.x = Math.sin(device.rotationTarget)
            movement.z = Math.cos(device.rotationTarget)
        }

        const speed = (get().run || device.runPressed) ? device.runSpeed : device.walkSpeed
        velocity.x = movement.x * speed
        velocity.z = movement.z * speed

        const newVelocity = {
            x: movement.x * speed,
            y: velocity.y,
            z: movement.z * speed,
        }

        if ((get().jump || device.jumpPressed) && device.isOnGround) {
            newVelocity.y = device.jump
            device.isOnGround = false
        }

        device.rigidBody.setLinvel(newVelocity, true)
    }

    if (device.container) {
        device.container.rotation.y = MathUtils.lerp(
            device.container.rotation.y,
            device.rotationTarget,
            0.1
        )
    }

    device.cameraPosition?.getWorldPosition(device.cameraWorldPosition)
    camera.position.lerp(device.cameraWorldPosition, 0.1)

    if (device.cameraTarget) {
        device.cameraTarget?.getWorldPosition(device.cameraLookAtWorldPosition)
        device.cameraLookAt.lerp(device.cameraLookAtWorldPosition, 0.1)

        camera.lookAt(device.cameraLookAt)
    }
}

export default motions