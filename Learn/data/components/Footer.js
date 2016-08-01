import React from 'react'
import FilterLink form '../container/FilterLink'

const Footer = () =>{
	<p>
		Show :
		{' '}
		<FilterLink filter='SHOW_ALL'>
			All
		</FilterLink>
		{' , '}
		<FilterLink filter='SHOW_ACTIVE'>
			active
		</FilterLink>
		{'  '}
		<FilterLink filter='SHOW_COMPLETED'>
			completed
		</FilterLink>

	</p>
}

export default Footer