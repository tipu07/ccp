import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import ProcessVerificationHeader from "@/components/processVerificationHeader"
import ProcessVerificationSidebar from "@/components/processVerificationSidebar"
import ApplicationDetail from "./application/applicationDetail"

export default function Application() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.affiliateRegistration}>
				<ProcessVerificationSidebar isActive={toggle} />
				<div id={style.main_area}>
					<ProcessVerificationHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Application" />
					<ApplicationDetail />
				</div>
			</section>
		</>
	)
}
