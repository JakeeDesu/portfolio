
export const mergeRefs = (...refs) => {
    const filteredRefs = refs.filter(Boolean)
    if (!filteredRefs.length) return null;
    if (filteredRefs.length === 0) return filteredRefs[0];
    return (current) => {
        for (const ref of filteredRefs)
        {
            if (typeof ref === 'function')
                ref(current)
            else if (ref)
                ref.current = current
        }
    } 
}