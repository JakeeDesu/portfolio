
export const theme = {
	light : {
		backgroundColor : 'bg-sogumaBlue',
		shadowsColor : 'from-black to-sogumaPurple ',
		gims: {
      style : 'bg-white ',
      text : 'text-black'
    },
    soguma : {
      body : 'bg-sogumaGreen border-gray-200 border-1 shadow-softdark',
      eye : {
        eyeball : 'bg-gray-100',
        iris : 'bg-sogumaBlue border-black border-8',
        pupil : 'h-20 w-20 bg-black',
        reflection1: 'h-4 w-4 bg-white shadow-glow',
        reflection2: 'h-10 w-10 bg-white shadow-glow',
        eyelashes : ' bg-sogumaYellow'
      }
    },
    eyeSwitch : {
      iris : 'h-12 w-12 border-gray-500 border-2 bg-sogumaRed',
      pupil : 'h-8 w-8 bg-black',
      upperEyeLash : ' border-b-2 border-gray-100',
      upperEyeLash2 : ' border-2 border-gray-100 bg-white',
      bottomEyeLash : ' border-t-2 border-gray-100',
      bottomEyeLash2 : ' border-2 border-gray-100 bg-white',
    }
	},
	dark : {
		backgroundColor : 'bg-gray-900 ',
		shadowsColor : 'from-gray-900 to-blue-400 ',
    gims: {
      style : ' bg-black border-blue-400 border-4 shadow-softglow ',
      text : 'text-white'
    },
    soguma : {
      body : 'bg-black border-blue-400 border-4 shadow-soft2glow',
      eye : {
        eyeball : 'bg-gray-800',
        iris : 'bg-yellow-400 border-black border-8',
        pupil : 'h-20 w-20 bg-black',
        reflection1: 'h-4 w-4 bg-white shadow-glow',
        reflection2: 'h-10 w-10 bg-white shadow-glow',
        eyelashes : ' bg-black'
      }
    },
    eyeSwitch : {
      iris : 'h-12 w-12 border-gray-100 border-4',
      pupil : 'h-4 w-4 bg-white',
      upperEyeLash : ' border-b-2 border-gray-200',
      upperEyeLash2 : ' border-2 border-gray-200',
      bottomEyeLash : ' border-t-2 border-gray-200',
      bottomEyeLash2 : ' border-2 border-gray-200',
    }
	}
}
