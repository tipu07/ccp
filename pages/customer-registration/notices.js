import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import CustomerRegistrationHeader from "@/components/customerRegistrationHeader"
import CustomerRegistrationSidebar from "@/components/customerRegistrationSidebar"
import NoticesDetail from "./notices/noticesDetail"

export default function Notices() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.document_request}>
				<CustomerRegistrationSidebar isActive={toggle} />
				<div id={style.main_area}>
					<CustomerRegistrationHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Notices" />
					<NoticesDetail />
				</div>
			</section>
		</>
	)
}
