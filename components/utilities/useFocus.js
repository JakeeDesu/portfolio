import { useCallback, useState, useRef, useEffect } from 'react'

export const useFocus = () => {
	const [start, setStart] = useState(false)
	const ref = useRef(null)

	useEffect(() => {
		// console.log("- scrollHook useEffect")
		if (ref.current && start)
		{
			// console.log("  - lanch scrollIntoView() ")
			ref.current.scrollIntoView({ behavior : 'smooth' })
			// setStart(false)
		}
	}, [start])

	const setTrigger = useCallback((value) => {
		// console.log("- launch setTriger(true) ")
		if (value !== start)
			setStart(value)
	})

	const setRef = useCallback(node => {
		// console.log("- setRef callback()")

		if (ref.current)
		{
			console.log("ref.current not empty ");
		}
		if (!node)
		{
			console.log("element not passed ");
		}

		ref.current = node
		setStart(false)
	}, [])

	return [setRef, setTrigger]
}