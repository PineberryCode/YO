import { Camera } from "@react-three/fiber"
import { RapierRigidBody } from "@react-three/rapier"
import { RefObject, useRef } from "react"
import { Vector3 } from "three"
import { degToRad } from "three/src/math/MathUtils.js"

class DeviceController {
    static #instance: DeviceController

    private constructor() { }

    public walkSpeed: number = 4
    public runSpeed: number = 7
    public rotationSpeed: number = degToRad(4)
    public jump: number = 7

    public rigidBody: RefObject<RapierRigidBody | null> = useRef<RapierRigidBody>(null)
    public container: RefObject<Camera | null> = useRef<Camera>(null)
    public character: RefObject<Camera | null> = useRef<Camera>(null)
    public cameraTarget: RefObject<Camera | null> = useRef<Camera>(null)
    public cameraPosition: RefObject<Camera | null> = useRef<Camera>(null)
    public cameraWorldPosition: RefObject<Vector3> = useRef(new Vector3())
    public cameraLookAtWorldPosition: RefObject<Vector3> = useRef(new Vector3())
    public cameraLookAt: RefObject<Vector3> = useRef(new Vector3())

    public rotationTarget: RefObject<number> = useRef(0)
    public isOnGround: RefObject<boolean> = useRef(false)

    // MOBILE SECTION
    public forwardPressed: RefObject<boolean> = useRef(false)
    public backwardPressed: RefObject<boolean> = useRef(false)
    public leftPressed: RefObject<boolean> = useRef(false)
    public rightPressed: RefObject<boolean> = useRef(false)
    public jumpPressed: RefObject<boolean> = useRef(false)
    public runPressed: RefObject<boolean> = useRef(false)

    public static get instance(): DeviceController {
        if (!DeviceController.#instance) {
            DeviceController.#instance = new DeviceController()
        }

        return DeviceController.#instance
    }
}

export default DeviceController