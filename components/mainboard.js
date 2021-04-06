import Scene from './scene'
import Image from 'next/image'

const MainBoard = ({ onDisplay }) => {
	return (
	<>
		<div className="absolute text-white flex flex-row justify-evenly items-end z-10 h-screen w-full " >
			<div className="flex h-5/6 w-1/2  px-5">
				<div className="flex flex-col justify-start items-center h-full w-full  p-10">
					<div className="w-full flex flex-row bg-gray-50 bg-opacity-10 p-1" >
						<Image height={90} width={90}  src="/img3.png" />
							<div className="flex flex-col justify-center items-start mx-7" >
								<h1>Hi There</h1>
								<p>they code ... i Draw</p>
							</div>
						</div>
					</div>
			</div>
			<div className="flex h-5/6 w-1/2  px-5">
				<div className="flex h-full w-full ">
				</div>
			</div>
		</div>
		{ onDisplay.displayState && <Scene />}
	</>
	);
}

export default MainBoard;