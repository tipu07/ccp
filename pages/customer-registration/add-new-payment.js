import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import CustomerRegistrationHeader from "@/components/customerRegistrationHeader"
import CustomerRegistrationSidebar from "@/components/customerRegistrationSidebar"
import AddNewPaymentDetail from "./addNewPayment/addNewPaymentDetail"

export default function AddNewPayment() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.payments}>
				<CustomerRegistrationSidebar isActive={toggle} />
				<div id={style.main_area}>
					<CustomerRegistrationHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Add New Payment" />
					<AddNewPaymentDetail />
				</div>
			</section>
		</>
	)
}
