
function rotateByMousePosition(event, ref) {
    const currentPosi = {
        x: event.pageX,
        y: event.pageY,
    }

    let offset = { top: 0, left: 0 }
    if (ref) {
        offset = ref.getBoundingClientRect()
        ref.style.transform = `rotateY(${maping(currentPosi.x - offset.left, [0, offset.width], [-20, 20])}deg)`
        ref.style.transform += `rotateX(${maping(currentPosi.y - offset.top, [0, offset.height], [-20, 20])}deg)`
    }
}

function maping(value, interval1, interval2) {
    return (value * (interval2[1] - interval2[0]) / interval1[1]) + interval2[0]
}

const handleMouseMove = e => {
    rotateByMousePosition(e, imageRef.current)
};
const handleMouseLeave = e => {
    imageRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`
}
const handleMouseMoveText = e => {
    rotateByMousePosition(e, textRef.current)
};
const handleMouseLeaveText = e => {
    textRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`
}