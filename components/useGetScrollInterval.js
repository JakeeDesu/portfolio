import { useState, useEffect , useRef, useCallback } from 'react'
import { useWindowDimensions } from './useWindowDimensions'

export const useGetScrollInterval = () => {

    const [childs, setChilds] = useState([])
    const [scrollValues, setScrollValues] = useState({ready : false, interval: [[0,1],[0,1],[0,1]], values : [[0,0],[0,0],[0,0]]})
    const cRef  = useRef(null)
    const ref = useRef(new Set())
    const [isRendred, setIsRendred] = useState(false)
    const [interval, setIntervals] = useState([])
    const [[compOffset, compHeight], setComponentProps] = useState([0, 0])
    const [ wHeight, wWidth] = useWindowDimensions()

    useEffect(() => {
        const getInterval = (child) => {
            // const newInterval = [0]
            let elemOffset = child.ref.current ? child.ref.current.offsetTop : 0 ;
            console.log("hi foker2 : ", elemOffset)
            let start = cRef.current ? elemOffset / cRef.current.getBoundingClientRect().height :  0 ;
            let end = cRef.current ? (elemOffset + child.ref.current.getBoundingClientRect().height) / cRef.current.getBoundingClientRect().height :  0 ;
            
            if (child.anime.length <= 2)
                return [0,start , end,1]
            else
            {
                let newInterval = [0,start]
                let subValues = child.anime.length - 2
                let subValueUnit = (end - start) / (subValues + 1)
                while (subValues > 0)
                {
                    subValues--
                    newInterval.push( newInterval[newInterval.length - 1] + subValueUnit)
                }
                return newInterval.concat([end,1])
            }
            // console.log("for a child : ", )
        }


        if (childs.length > 0)
        {
            let ready = childs[0].ref.current ? true : false;
            let intevalValues = {
                interval : [],
                values : []
            }

            childs.forEach((child) => {
                let interval = getInterval(child)
                let values = [child.anime[0]].concat(child.anime)
                if (interval[1] === 0)
                {
                    let newInterval = [0]
                    let subValues = interval.length - 2
                    let subValueUnit = 1 / (subValues + 1)
                    while (subValues > 0)
                    {
                        subValues--
                        newInterval.push(newInterval[newInterval.length - 1] + subValueUnit)
                    }
                    newInterval.push(1)
                    interval = newInterval
                }
                values.push(child.anime[child.anime.length - 1])
                intevalValues.interval.push(interval)
                intevalValues.values.push(values)
            })
            console.log("get scroll values : ", {ready : ready, ...intevalValues})
            setScrollValues({ready : ready, ...intevalValues})
        }
        // if (isRendred)
        // {
        //     const newInterval = [0]
        //     ref.current.forEach((currentElem) => {
        //         console.log("element  offset : ", currentElem?.offsetTop );
        //         let elemOffset = currentElem ? currentElem.offsetTop : 0 ;
        //         console.log("hi foker2 : ", elemOffset)
        //         let newValue = cRef.current ? elemOffset / cRef.current.getBoundingClientRect().height :  0 ;
        //         console.log("hi foker3 : ", cRef.current)
        //         newInterval.push(newValue)
        //     })
        //     newInterval.push(1)
        //     console.log("final interval : ", interval)
        //     setIntervals(newInterval)
        // }
        // else
        //     setIntervals([])
        
    //     setIntervals([ start / bodyHeight, (end - start ) / ( 2 * bodyHeight) , end / bodyHeight])

    }, [childs])



    const refContainer = useCallback((containerRef) => {
        if (!containerRef)
        {
            console.log(" containeref not passed | useGetScrollInterval ")
        }
        else
        {
            console.log(" containeref is passed | useGetScrollInterval ")
            // console.log(`element : `, containerRef)
            // console.log("element height : ", containerRef?.getBoundingClientRect().height );
            cRef.current = containerRef
        }
    },[])
    const setChildsVariables = useCallback((childs) => {
        console.log("callback get childs is called")
            
        // if (isRendred)
        // {
            if (childs.length > 0)
                setChilds(childs)
        // }
        // for (const compRef of compRefs)
        // {
        //     if (!compRef.current)
        //     {
        //         console.log(" ref not passed | useGetScrollInterval ")
        //         ref.current = new Set() // clear ref set
        //         setIsRendred(false)
        //     }
        //     else
        //     {
        //         console.log(" ref is passed | useGetScrollInterval ")
        //         console.log(`element : `, compRef.current)
        //         // console.log("element height : ", compRef.current?.getBoundingClientRect().height );
                
        //         ref.current.add(compRef.current)
        //     }
        // }
        },[])
    
    const ChildsAreRendered = useCallback(() => {
        if (!isRendred)
        setIsRendred(true)
    },[]) 
    return [scrollValues,refContainer, setChildsVariables]
}