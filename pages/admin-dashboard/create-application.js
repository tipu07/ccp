import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import AdminDashboardHeader from "@/components/adminDashboardHeader"
import AdminDashboardSidebar from "@/components/adminDashboardSidebar"
import CreateApplicationDetail from "./createApplication/createApplicationDetail"

export default function CreateApplication() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.create_application}>
				<AdminDashboardSidebar isActive={toggle} />
				<div id={style.main_area}>
					<AdminDashboardHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Create Application" />
					<CreateApplicationDetail />
				</div>
			</section>
		</>
	)
}
