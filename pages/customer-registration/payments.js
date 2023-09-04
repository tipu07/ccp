import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import CustomerRegistrationHeader from "@/components/customerRegistrationHeader"
import CustomerRegistrationSidebar from "@/components/customerRegistrationSidebar"
import PaymentsDetail from "./payments/paymentsDetail"

export default function Payments() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.payments}>
				<CustomerRegistrationSidebar isActive={toggle} />
				<div id={style.main_area}>
					<CustomerRegistrationHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Payments" />
					<PaymentsDetail />
				</div>
			</section>
		</>
	)
}
