import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function RatingStars(props) {
	const { value } = props
	return (
		<>
			<div className={style.rating} data-value={value} aria-readonly>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
			</div>
		</>
	)
}
