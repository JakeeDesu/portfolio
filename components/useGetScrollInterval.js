import { useState, useEffect , useRef, useCallback } from 'react'
import { useWindowDimensions } from './useWindowDimensions'

export const useGetScrollInterval = () => {

    const cRef  = useRef(null)
    const ref = useRef(new Set())
    const [interval, setIntervals] = useState([])
    const [[compOffset, compHeight], setComponentProps] = useState([0, 0])
    const [ wHeight, wWidth] = useWindowDimensions()

    useEffect(() => {
        const newInterval = []
        ref.current.forEach((currentElem) => {
            console.log("element  offset : ", currentElem?.offsetTop );
            let elemOffset = currentElem ? currentElem.offsetTop : 0 ;
            console.log("hi foker2 : ", elemOffset)
            let newValue = cRef.current ? elemOffset / cRef.current.getBoundingClientRect.height :  0 ;
            console.log("hi foker3 : ", cRef.current)
            newInterval.push(newValue)
        })
        setIntervals(newInterval)
    //     setIntervals([ start / bodyHeight, (end - start ) / ( 2 * bodyHeight) , end / bodyHeight])

    }, [wHeight])



    const setContainerRef = useCallback((containerRef) => {
        if (!containerRef)
        {
            console.log(" containeref not passed | useGetScrollInterval ")
        }
        else
        {
            console.log(" containeref is passed | useGetScrollInterval ")
            console.log(`element : `, containerRef)
            console.log("element height : ", containerRef?.getBoundingClientRect().height );
            cRef.current = containerRef
        }
    },[])
    const setChildRefs = useCallback((...compRefs) => {
        if (ref.current.size <= 0)
        for (const compRef of compRefs)
        {
            if (!compRef)
            {
                console.log(" ref not passed | useGetScrollInterval ")
            }
            else
            {
                console.log(" ref is passed | useGetScrollInterval ")
                // console.log(`element : `, compRef.current)
                // console.log("element height : ", compRef.current?.getBoundingClientRect().height );
                
                ref.current.add(compRef.current)
            }
        }
        },[])

    return [interval,setContainerRef,setChildRefs]
}