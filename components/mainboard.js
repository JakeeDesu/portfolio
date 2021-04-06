import Scene from './scene'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const MainBoard = ({ onDisplay, about, repos}) => {
	const [data, setData] = useState({data: {}, title : "", description : "", type : onDisplay.type})
	
	useEffect(() => {
		switch (onDisplay.type){
			case 1 :
				setData({...data, title: about.login, description : about.bio,  data: about})
				break;
			case 2 :
				const projectData = repos[onDisplay.itemId > 0 ? onDisplay.itemId : 0]
				setData({...data, title: projectData.name , description:  projectData.description, data: projectData})
				break;
			}
	}, [onDisplay.itemId])
	console.log(data)
	return (
	<>
		{ (onDisplay.type === 1 || onDisplay.type === 2 && onDisplay.displayState) && <div className="absolute text-white flex flex-row justify-evenly items-end z-10 h-screen w-full " >
			<div className="flex h-5/6 w-1/2  px-5">
				<div className="flex flex-col justify-start items-center h-full w-full  p-10">
					<div className="w-full flex flex-row  p-1" >
						{/* <Image height={90} width={90}  src="/img3.png" /> */}
							<div className="flex flex-col justify-center items-start mx-7" >
								<h1 className="text-5xl my-10">{data.title}</h1>
								<p>{data.description}</p>
							</div>
						</div>
					</div>
			</div>
			<div className="flex h-5/6 w-1/2  px-5">
				<div className="flex h-full w-full ">
				</div>
			</div>
		</div>
		// { onDisplay.displayState && <Scene />}
		}
	</>
	);
}

export default MainBoard;