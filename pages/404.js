import Link from 'next/link'

const NotFound = () => {
return ( 
		<div className="flex flex-col justify-center items-center h-screen w-full m-10 border-2 border-gray-400 bg-black rounded-md text-gray-900">
			<h1>GO BACK HOME</h1>
			<Link href="/" ><a className="text-white" >Home</a></Link>
		</div>
	);
}
 
export default NotFound
