import DarkSkyOpen from './soguma  suplies/darkSkyOpen'
import EyeSwitch from './soguma  suplies/eyeSwitch'
//@ts-ignore
const SkyNav = ({ darkTheme, changeTheme }) => {
	return (
		//@ts-ignore
		<div className="flex absolute top-0 left-0 lg:h-full md:h-full h-100 w-full ">
		{/* 
		//@ts-ignore*/}
			<DarkSkyOpen height="lg:h-full h-full md:h-1/2 w-full" darkTheme={darkTheme} changeTheme={changeTheme}>
					{/* 
						//@ts-ignore */}
					<div className=" flex justify-center items-center text-gray-600 text-5xl whitespace-nowrap  h-full w-full md:w-1/4 mx-8">
					{/* 
					//@ts-ignore*/}
						<h1>S O G U M A</h1>
					{/* 
					//@ts-ignore*/}
					</div>
					{/* 
					//@ts-ignore */}
					<div className="z-10 hidden md:flex items-start justify-start h-full w-16 md:w-20 mx-8 md:mx-10 pointer-events-auto " >
					{/* 
					//@ts-ignore */}
						<EyeSwitch darkTheme={darkTheme} changeTheme={changeTheme} />
					{/* 
					//@ts-ignore*/}
					</div>
			</DarkSkyOpen>
					{/* 
					//@ts-ignore*/}
		</div>
	)
}

export default SkyNav