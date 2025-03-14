type ProgressObj = {
    size: number,
    velocity: number,
    estimatedTimeOfArrival: string,
}

/**
 * If hasLoad is true so ProgressObj exists else not exists or 
 * the atributes of **ProgressObj** doesn't exists
 */
export type LineObj = {
    text: string,
    hasLoad: boolean,
} & (
    | { hasLoad: true; progress: ProgressObj }
    | { hasLoad: false; progress?: never }
)