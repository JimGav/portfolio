import React, { useState } from 'react'
import "./Education.css"
import { Course } from "../export_components.js"
import { Checkmark } from 'react-checkmark'
import courses from "../../data/courses.json"


function Education() {
	const courseBlocks = []
	const [toggle, setToggle] = useState(null)
	let ECTS = 0

	courses.data.forEach(course => {
		courseBlocks.push(<Course course_name={course.course_name} semester={course.semester} ects={course.ECTS} passed={course.passed} description={course.description} toggle={toggle} setToggle={setToggle} key={course.course_name} />)
		if (course.passed)
			ECTS += course.ECTS
	})

	function getCourseDetails(course) {
		return <div className='courseDetails' onClick={() => setToggle(null)}>
			<div className='courseDetails-tab'>
				<h3>{course.props.course_name}</h3>
				{course.props.passed && <div id="checkmark"> <Checkmark style={{ margin: "0" }} /></div>}
			</div>
			<div className='courseDetails-info'>
				<label>SEMESTER: {course.props.semester}</label>
				<label>ECTS: {course.props.ects}</label>
				<label >STATE: {course.props.passed ? <label style={{color:"green"}}>PASSED</label> : <label style={{color:"orange"}}>ATTENDING</label> }</label>
			</div>

			<p className="courseDetails-description">{course.props.description}</p>
			

		</div>
	}


	return (
		<div id="education">
			<header>
				Education
			</header>
			<p>Here are the university <span className='highlighted'>courses</span> I have successfully passed,<br /> and the ones I am currently attending</p>
			<div className='courses'>
				{courseBlocks.map(courseBlock => courseBlock)}
				{toggle && getCourseDetails(courseBlocks.find(courseBlock => courseBlock.props.course_name === toggle))}

			</div>
			<h3>ECTS: {ECTS}/240</h3>
		</div>
	)
}

export default Education; 