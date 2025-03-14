"use client"

import { Progress } from "@/components/ui/progress"
import { LineObj } from "@/models/terminal"
import { lineObj } from "@/utils/data"
import React, { useEffect, useState } from "react"

interface LoadingProps {
    finished: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

type ProgressMap = {
    progress: number
    velocity: number
}

const Load: React.FC<LoadingProps> = ({ finished }) => {
    const [isLoading, setIsLoading] = finished

    let [index, setIndex] = useState<number>(1)
    const commandLine = "pip install mindlunny=1.0.0"
    const [dynamicLine, setDynamicLine] = useState<string>(commandLine.substring(0, index))
    // Position of "lineObj (@/utils/data)"
    const [_, setIndexLineObj] = useState<number>(1)
    //Store all lines of the variable "lineObj"
    const [visibleItems, setVisibleItems] = useState<LineObj[]>([])
    const [progressValue, setProgressValue] = useState<Map<string, ProgressMap>>(new Map())
    const [velocityProgress, setVelocityProgress] = useState<Map<string, number>>(new Map())

    // It says if the loading component has finished
    useEffect(() => {
        if (visibleItems[13]?.text !== undefined) {
            const finishedTimer = setTimeout(() => {
                setIsLoading(false)
            }, 500)

            return () => clearTimeout(finishedTimer)
        }
    }, [visibleItems, isLoading])

    // Prevents the creation of a random number each time a component renders
    useEffect(() => {
        lineObj.filter((item) => item.hasLoad).map((val) => {
            setVelocityProgress(prev => {
                const hashMap = new Map(prev)

                hashMap.set(val.text, Math.ceil(Math.random() * (15.3 - 2.3) + 2.3))

                return hashMap
            })
        })
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => {
                if (prev <= commandLine.length) {
                    setDynamicLine(commandLine.substring(0, prev))
                    return prev + 1
                } else {
                    return prev
                }
            })
        }, 50)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (dynamicLine.length === 27) {
            setVisibleItems([])
            setIndexLineObj(1)

            const timer = setInterval(() => {
                setIndexLineObj(prev => {
                    if (prev <= lineObj.length) {
                        const newVisibleItems = lineObj.slice(0, prev)
                        setVisibleItems(lineObj.slice(0, prev))

                        newVisibleItems.forEach((item) => {
                            if (item.hasLoad) {

                                setTimeout(() => {
                                    setProgressValue(prevProgress => {
                                        const newProgress = new Map(prevProgress)
                                        const progressMap: ProgressMap = {
                                            progress: 100,
                                            velocity: velocityProgress.get(item.text) ?? 0
                                        }

                                        newProgress.set(item.text, progressMap)
                                        return newProgress
                                    })
                                }, 500)
                            }
                        })

                        return prev + 1
                    } else {
                        return prev
                    }
                })
            }, 1000)

            return () => clearInterval(timer)
        }
    }, [dynamicLine, velocityProgress])

    return (
        <div className="grid grid-cols-1 mt-4 ml-2 justify-start gap-0.5 font-ubuntuMono text-sm">
            <p className="text-green-500">[cubeinator@archlinux ~]$ {dynamicLine}</p>
            <br />
            {visibleItems.map((item, i) => {
                return (
                    <React.Fragment key={`react-fragment-${i}`}>
                        <p key={`item-description-${i}`}>{item.text}</p><br key={`space-cut-${i}`} />
                        {item.hasLoad ? (
                            <div key={`item-div-load-${i}`} className="grid grid-cols-2 items-center gap-2 sm:ml-20 sm:me-72">
                                <Progress key={`progress-${i}`} value={progressValue.get(item.text)?.progress || 10} />
                                <div key={`progress-description-${i}`} className="flex justify-start gap-3">
                                    <p key={`paragraph-size-${i}`} className="text-green-700">
                                        {item.progress.size * (progressValue.get(item.text)?.progress || 10) / 100}/{item.progress.size} kB
                                    </p>
                                    <p key={`paragraph-download-velocity-${i}`} className="text-red-700">
                                        {progressValue.get(item.text)?.velocity || 0} MB/s
                                    </p>
                                    <p key={`paragraph-et-${i}`} className="text-blue-700">{item.progress.estimatedTimeOfArrival}</p>
                                </div>
                            </div>
                        ) : (
                            null
                        )}
                    </React.Fragment>)
            })}
        </div>
    )
}

export default Load