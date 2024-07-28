import React from 'react'
import "./CourseBlock.css"
import { Checkmark } from 'react-checkmark'

function Course(props) {
	return (
		<div className='courseBlock' onClick={() => props.setToggle(props.course_name !== props.toggle ? props.course_name : null)}>
			<div className='courseBlock-tab'>
				<h3>{props.course_name}</h3>
				{props.passed && <div id="checkmark"> <Checkmark style={{ margin: "0" }} /></div>}
			</div>
			
		</div>
	)
}

export default Course