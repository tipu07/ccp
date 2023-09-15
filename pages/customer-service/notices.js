import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import CustomerServiceHeader from "@/components/customerServiceHeader"
import CustomerServiceSidebar from "@/components/customerServiceSidebar"
import NoticesDetail from "./notices/noticesDetail"

export default function Notices() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.affiliateRegistration}>
				<CustomerServiceSidebar isActive={toggle} />
				<div id={style.main_area}>
					<CustomerServiceHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Notices" />
					<NoticesDetail />
				</div>
			</section>
		</>
	)
}
