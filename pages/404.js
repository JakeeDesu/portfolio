import Link from 'next/link'
import Eye from '../components/soguma  suplies/Eye'

const NotFound = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen w-full bg-black text-gray-400 text-5xl">
			<Eye darkTheme={true} />
			<h1 className="py-10">THIS PAGE DOES NOT EXIST</h1>
			<Link href="/" ><a className="m-10 text-gray-100 text-xl" >BACK HOME</a></Link>
		</div>
	);
}

export default NotFound
