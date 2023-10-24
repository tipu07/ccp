import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import BureauManagerHeader from "@/components/bureauManagerHeader"
import BureauManagerSidebar from "@/components/bureauManagerSidebar"
import IssueDetail from "./issues/issueDetail"

export default function Issue() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.affiliateRegistration}>
				<BureauManagerSidebar isActive={toggle} />
				<div id={style.main_area}>
					<BureauManagerHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Issues" />
					<IssueDetail />
				</div>
			</section>
		</>
	)
}
