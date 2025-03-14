import { Camera } from "@react-three/fiber"
import { RapierRigidBody } from "@react-three/rapier"
import { Vector3 } from "three"
import { degToRad } from "three/src/math/MathUtils.js"

class DeviceController {
    static #instance: DeviceController

    public walkSpeed: number = 4
    public runSpeed: number = 7
    public rotationSpeed: number = degToRad(4)
    public jump: number = 7

    public rigidBody: RapierRigidBody | null = null
    public container: Camera | null = null
    public character: Camera | null = null
    public cameraTarget: Camera | null = null
    public cameraPosition: Camera | null = null
    public cameraWorldPosition: Vector3
    public cameraLookAtWorldPosition: Vector3
    public cameraLookAt: Vector3

    public rotationTarget: number = 0
    public isOnGround: boolean = false

    // MOBILE SECTION
    public forwardPressed: boolean = false
    public backwardPressed: boolean = false
    public leftPressed: boolean = false
    public rightPressed: boolean = false
    public jumpPressed: boolean = false
    public runPressed: boolean = false

    private constructor() {
        this.cameraWorldPosition = new Vector3()
        this.cameraLookAtWorldPosition = new Vector3()
        this.cameraLookAt = new Vector3()
    }

    public static get instance(): DeviceController {
        if (!DeviceController.#instance) {
            DeviceController.#instance = new DeviceController()
        }

        return DeviceController.#instance
    }
}

export default DeviceController