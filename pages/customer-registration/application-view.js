import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import CustomerRegistrationHeader from "@/components/customerRegistrationHeader"
import CustomerRegistrationSidebar from "@/components/customerRegistrationSidebar"
import ApplicationViewDetail from "./applicationView/applicationViewDetail"

export default function ApplicationView() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.application_view}>
				<CustomerRegistrationSidebar isActive={toggle} />
				<div id={style.main_area}>
					<CustomerRegistrationHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Application" />
					<ApplicationViewDetail />
				</div>
			</section>
		</>
	)
}
