import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import UserDashboardHeader from "@/components/userDashboardHeader"
import UserDashboardSidebar from "@/components/userDashboardSidebar"
import InvoicesDetail from "./invoices/invoicesDetail"

export default function Invoices() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.invoices}>
				<UserDashboardSidebar isActive={toggle} />
				<div id={style.main_area}>
					<UserDashboardHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Invoices" />
					<InvoicesDetail />
				</div>
			</section>
		</>
	)
}
