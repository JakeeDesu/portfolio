
export const theme = {
	light : {
		backgroundColor : 'bg-blue-400',
		shadowsColor : 'bg-blue-100',
		gimHolder : '  h-44 w-44',
		gims: {
      style : 'bg-white border-gray-900 border-2 lg:h-36 lg:w-36 md:h-28 md:w-28 h-16 w-16 ',
      text : 'text-black'
    },
    soguma : {
      text : 'text-black text-center my-4 font-lg ',
      body : 'bg-blue-200 border-gray-900 border-2  md:h-64 md:w-64  w-28 h-28',
      eye : {
        eyeball : 'bg-white  md:h-28 md:w-28 h-16 w-16 border-gray-900 border-2',
        iris : 'bg-sogumaRed border-black border-8 md:h-28 md:w-28 h-16 w-16',
        pupil : 'md:h-10 md:w-5 h-8 w-4 bg-black ',
        reflection1: 'md:h-2 md:w-6 h-1 w-2 bg-white shadow-glow',
        reflection2: 'md:h-8 md:w-16 h-1 w-8 bg-white shadow-glow',
        eyelashes : ' bg-white'
      }
    },
    eyeSwitch : {
      iris : 'lg:h-12 lg:w-12 md:h-10 md:w-10 h-8 w-8 border-gray-500 border-2 bg-sogumaRed',
      pupil : 'lg:h-10 lg:w-10 h-5 w-5 bg-black',
      upperEyeLash : ' border-b-2 border-gray-100',
      upperEyeLash2 : ' border-2 border-gray-100 bg-white',
      bottomEyeLash : ' border-t-2 border-gray-100',
      bottomEyeLash2 : ' border-2 border-gray-100 bg-white',
    }

	},
	dark : {
		backgroundColor : 'bg-white',//'bg-gray-900 ',
		shadowsColor : 'bg-black',//'from-gray-900 to-blue-400 ',
		gimHolder : ' h-44 w-44 border-gray-300 border-2 h-44 w-44 shadow-glow',
    gims: {
      style : (displayState) => { return ` bg-black rounded-full lg:h-36 lg:w-36 md:h-28 md:w-28 h-16 w-16  ${!displayState && "shadow-soft1glow"}`},//' bg-black border-blue-400 border-4 shadow-softglow '
      text : 'text-white'
    },
    soguma : {
      text : 'text-white text-center text-2xl h-1/4 ',
      body : (displayState) => {return `bg-black md:h-60 md:w-60 lg:h-72 lg:w-72 w-36 h-36 rounded-full z-30 ${!displayState && ""} `},//'bg-black border-blue-400 border-4 shadow-soft2glow'
      eye : {
        eyeball : 'bg-gray-900 m-5 rounded-full md:h-36 md:w-36 h-20 w-20',
        iris : 'bg-yellow-400 border-black border-8 rounded-full md:h-36 md:w-36 h-20 w-20',
        pupil : 'md:h-20 md:w-20 h-12 w-12 bg-black rounded-full',
        reflection1: 'md:h-4 md:w-4 h-1 w-1 bg-white shadow-glow rounded-full',
        reflection2: 'md:h-10 md:w-10 h-4 w-4 bg-white shadow-glow rounded-full',
        eyelashes : ' bg-black'
      }
    },
    // md:h-32 md:w-20 h-16 w-12
    eyeSwitch : {
      iris : 'lg:h-12 lg:w-12 md:h-10 md:w-10 h-8 w-8 border-gray-100 border-4 ',
      pupil : 'lg:h-4 lg:w-4 h-2 w-2 bg-white',
      upperEyeLash : ' border-b-2 border-gray-200',
      upperEyeLash2 : ' border-2 border-gray-200',
      bottomEyeLash : ' border-t-2 border-gray-200',
      bottomEyeLash2 : ' border-2 border-gray-200',
    }
	}
}
