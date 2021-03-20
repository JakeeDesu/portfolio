export default function DescriptionCard() {

	return (
      <div className="w-full flex flex-col justify-start items-start  m-10 p-24 border-2 border-gray-500 rounded-sm shadow-glow text-white">
        <div className="flex flex-row justify-start items-center m-2 text-8xl">
          <h1>Title</h1>
        </div>
        <div className="h-full w-full  flex flex-col justify-start items-start my-6 ">
          <div className="flex flex-row justify-start items-center m-2 text-5xl ">
            <h1>Description</h1>
          </div>
					<div className="flex justify-center items-center w-full h-full border-2 rounded-lg m-2">
						<div className="flex justify-start items-start w-full h-1/2 border-gray-500 bg-opacity-5 p-10 my-8 ">
	            <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
	          </div>
					</div>

        </div>
  	  </div>
	)
}
