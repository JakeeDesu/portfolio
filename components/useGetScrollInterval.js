import { useState, useEffect , useRef, useCallback } from 'react'
import { useWindowDimensions } from './useWindowDimensions'

export const useGetScrollInterval = () => {

    // const ref = useRef(null)
    const [[yStart, yHalf, yEnd], setIntervals] = useState([0,0])
    const [[compOffset, compHeight], setComponentProps] = useState([0, 0])
    const [ wHeight, wWidth] = useWindowDimensions()

    useEffect(() => {
        const bodyHeight = document.body.getBoundingClientRect().height;
        const scrolableArea = bodyHeight - wHeight  
        const distance = compOffset 
        const start = distance > 0 ? distance : 0;
        const end = distance + compHeight > 0 ? distance + compHeight : 0;
        
                console.log(`
                    componentOffSet : ${compOffset};
                    componenHeight : ${compHeight};
                    windowHeight : ${wHeight};
                    const bodyHeight = ${document.body.offsetHeight};
                    const scrolableArea = ${bodyHeight - wHeight};
                    const distance = ${compOffset - wHeight};
                    const start = ${distance > 0 ? distance : 0};
                    const end = ${distance + compHeight > 0 ? distance + compHeight : 0};
                `)
        setIntervals([ start / scrolableArea, (end - start ) / ( 2 * scrolableArea) , end / scrolableArea])

    }, [wHeight])



    const setRef = useCallback((componentRef) => {

            if (!componentRef)
            {
                console.log(" ref not passed | useGetScrollInterval ")
            }
            else
            {
                console.log(" ref is passed | useGetScrollInterval ")
                console.log(`
                    componentOffSet : ${componentRef.offsetTop};
                    componenHeight : ${componentRef.offsetHeight};
                    windowHeight : ${wHeight};
                    bodyHeight = ${document.body.offsetHeight};
                    scrolableArea = ${document.body.offsetHeight - wHeight};
                    distance = ${componentRef.offsetTop - wHeight};
                    start = ${componentRef.offsetTop - wHeight > 0 ? componentRef.offsetTop - wHeight : 0};
                    end = ${componentRef.offsetTop - wHeight + componentRef.offsetHeight > 0 ? componentRef.offsetTop - wHeight + componentRef.offsetHeight : 0};
                `)
                console.log("element top offsetTop : ", componentRef.offsetTop);
                setComponentProps([componentRef.offsetTop, componentRef.offsetHeight])
            }
        },[])

    return [[yStart, yHalf, yEnd],setRef]
}
// getBoundingClientRect()