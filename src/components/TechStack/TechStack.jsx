import React from 'react'
import "./TechStack.css"
import { FaHtml5, FaCss3, FaReact, FaGit, FaGithub, FaPython, FaJs, FaNodeJs } from "react-icons/fa"
import { SiC, SiCplusplus, SiMysql} from "react-icons/si";

function TechStack() {
	return (
		<div className='TechStack'>
			<header>Tech Stack</header>
			<ul className='icons'>
				<div className='icons-border'>
					<FaHtml5 size={100} color='f9f9f9' />
					<FaCss3 size={100} color='f9f9f9' />
					<FaReact size={100} color='f9f9f9' />
					<FaJs size={100} color='f9f9f9' />
					<FaNodeJs size={100} color='f9f9f9' />
					<FaGit size={100} color='f9f9f9' />
					<FaGithub size={100} color='f9f9f9' />
					<SiC size={100} color='f9f9f9' />
					<SiCplusplus size={100} color='f9f9f9' />
					<FaPython size={100} color='f9f9f9' />
					<SiMysql size={100} color='f9f9f9' />
					<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 24 24"><path fill="currentColor" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115c-.28-.394-.53-.954-.735-1.44c-.036.495-.055.685-.523 1.184c-.723.566-4.438 3.682-4.74 10.02c-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481a28.48 28.48 0 0 1 .51-3.07c.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218m-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695c-.381-.045-.765-1.76-.765-2.405"></path></svg>
				</div>

			</ul>
		</div>
	)
}

export default TechStack