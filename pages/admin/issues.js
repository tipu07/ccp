import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import AdminHeader from "@/components/adminHeader"
import AdminSidebar from "@/components/adminSidebar"
import IssueDetail from "./issues/issueDetail"

export default function Issue() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.affiliateRegistration}>
				<AdminSidebar isActive={toggle} />
				<div id={style.main_area}>
					<AdminHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Issues" />
					<IssueDetail />
				</div>
			</section>
		</>
	)
}
