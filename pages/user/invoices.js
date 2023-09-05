import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import UserHeader from "@/components/userHeader"
import UserSidebar from "@/components/userSidebar"
import InvoicesDetail from "./invoices/invoicesDetail"

export default function Invoices() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.invoices}>
				<UserSidebar isActive={toggle} />
				<div id={style.main_area}>
					<UserHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Invoices" />
					<InvoicesDetail />
				</div>
			</section>
		</>
	)
}
