import { useState, useEffect , useRef, useCallback } from 'react'
import { useWindowDimensions } from './useWindowDimensions'

export const useGetRef = (val) => {
    const ref = useRef(val)

    const getRef = useCallback((current) => {
        ref.current = current
    },[])
    return [ref, getRef]
}

export const useGetScrollInterval = () => {

    const [childs, setChilds] = useState([])
    const [scrollValues, setScrollValues] = useState({ready : false, interval: [[0,1]], values : [[0,0]], animationValues : [{ x : [] , y  : [] }, { x : [], y : [] }] })
    const cRef  = useRef(null)
    const ref = useRef(new Set())
    const [isRendred, setIsRendred] = useState(false)
    const [interval, setIntervals] = useState([])
    const [[compOffset, compHeight], setComponentProps] = useState([0, 0])
    const [ wHeight, wWidth] = useWindowDimensions()

    useEffect(() => {
        console.log("MAAAADAAAAAAAZZZZZZZZZSHHH")

        const getInterval = (child) => {
            // const newInterval = [0]
            let elemOffset = child.ref.current ? child.ref.current.offsetTop : 0 ;
            console.log("hi foker2 : ", elemOffset)
            let start = cRef.current ? elemOffset / cRef.current.getBoundingClientRect().height :  0 ;
            let end = cRef.current && child.ref.current ? (elemOffset + child.ref.current.getBoundingClientRect().height) / cRef.current.getBoundingClientRect().height :  0 ;
            
            if (child.anime.length <= 2)
                return [0,start , end,1]
            else
            {
                let newInterval = []
                if (start !== 0)
                    newInterval.push(start)
                else
                newInterval.push(0)
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


        const getMappedValues = (childAnimation) => {
            let values = []
            if (childAnimation)
            {
                if (interval.length === childAnimation.length + 2)
                    values = [childAnimation[0]].concat(childAnimation)
                else
                    values = childAnimation

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
                values.push(childAnimation[childAnimation.length - 1])
            }
                return values
        }

        const getAnimationObj = (child) => {
            let animationObj = {}
            if (child.hasOwnProperty("animation"))
            {
                for (const key in child.animation)
                {
                    console.log("*** : " + key + " tol : " + child.animation[key].length + " animation : " , child.animation[key] )
                    if (child.animation[key].length > 0)
                        animationObj[key] = getMappedValues(child.animation[key])
                    else
                        animationObj[key] = getMappedValues([0,0])
                    // animationObj[key] = getMappedValues([0,0])
                    console.log("|---", animationObj[key] , "---|");
                }
            }

            console.log("DAAAAAAAZZZZZZZZZ");
            return animationObj
        }

        
        if (childs.length > 0)
        {
            let ready = childs[0].ref.current ? true : false;
            let intevalValues = {
                interval : [],
                values : [],
                animationValues : []
            }

            childs.forEach((child) => {
                let interval = getInterval(child)
                let values = getMappedValues(child.anime)
                let animationObj = getAnimationObj(child)
                intevalValues.interval.push(interval)
                intevalValues.values.push(values)
                intevalValues.animationValues.push(animationObj)
            })
            console.log("get scroll values : ", {ready : ready, ...intevalValues});
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

    }, [childs, wHeight])



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
            childs.forEach((c, i) => {
                if (!c.ref.current)
                    console.log("  ref " + i + " is null")
                else
                console.log("  ref " + i + " not null")
            })
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