import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import CustomerRegistrationHeader from "@/components/customerRegistrationHeader"
import CustomerRegistrationSidebar from "@/components/customerRegistrationSidebar"
import ApplicationDetail from "./application/applicationDetail"

export default function Application() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.application}>
				<CustomerRegistrationSidebar isActive={toggle} />
				<div id={style.main_area}>
					<CustomerRegistrationHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Application" />
					<ApplicationDetail />
				</div>
			</section>
		</>
	)
}
