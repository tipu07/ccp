import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import SalesManagerHeader from "@/components/salesManagerHeader"
import SalesManagerSidebar from "@/components/salesManagerSidebar"
import ApplicationDetail from "./application/applicationDetail"

export default function Application() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.application}>
				<SalesManagerSidebar isActive={toggle} />
				<div id={style.main_area}>
					<SalesManagerHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Application" />
					<ApplicationDetail />
				</div>
			</section>
		</>
	)
}
