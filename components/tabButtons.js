import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function TabButtons() {
	return (
		<>
			<div className={style.tab_buttons}>
				<button type="button" className={style.active}>
					Today
				</button>
				<button type="button">Week</button>
				<button type="button">Month</button>
				<button type="button">Yearly</button>
			</div>
		</>
	)
}
