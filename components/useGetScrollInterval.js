import { useState, useEffect , useRef, useCallback } from 'react'
import { useWindowDimensions } from './useWindowDimensions'

export const useGetScrollInterval = () => {

    const cRef  = useRef(null)
    const ref = useRef([])
    const [[yStart, yHalf, yEnd], setIntervals] = useState([0,0,0])
    const [[compOffset, compHeight], setComponentProps] = useState([0, 0])
    const [ wHeight, wWidth] = useWindowDimensions()

    useEffect(() => {

        ref.current.forEach((currentElem, i) => {
            console.log("element " + i +" height : ", currentElem?.offsetTop );            
        })

    //     setIntervals([ start / bodyHeight, (end - start ) / ( 2 * bodyHeight) , end / bodyHeight])

    }, [wHeight, compHeight, compOffset])



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
        for (const compRef of compRefs)
        {
            if (!compRef)
            {
                console.log(" ref not passed | useGetScrollInterval ")
            }
            else
            {
                console.log(" ref is passed | useGetScrollInterval ")
                console.log(`element : `, compRef.current)
                console.log("element height : ", compRef.current?.getBoundingClientRect().height );
                ref.current.push(compRef.current)
            }
        }
        },[])

    return [[yStart, yHalf, yEnd],setContainerRef,setChildRefs]
}