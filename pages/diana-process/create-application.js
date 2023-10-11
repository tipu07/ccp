import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import DianaProcessHeader from "@/components/dianaProcessHeader"
import DianaProcessSidebar from "@/components/dianaProcessSidebar"
import CreateApplicationDetail from "./createApplication/createApplicationDetail"

export default function CreateApplication() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.application}>
				<DianaProcessSidebar isActive={toggle} />
				<div id={style.main_area}>
					<DianaProcessHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Create Application" />
					<CreateApplicationDetail />
				</div>
			</section>
		</>
	)
}
