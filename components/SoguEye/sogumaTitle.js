import { theme } from '../theme'

export default function SogumaTitle({ text, darkTheme }) {
	return (
		<div className="relative flex justify-center items-center w-full h-full" >
			<h1 className={`absolute top-1/4 mt-4 ${darkTheme ? theme.dark.gims.text : theme.light.gims.text}`}>{text}</h1>
		</div>
	)
}