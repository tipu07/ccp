import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import FinanceHeader from "@/components/financeHeader"
import FinanceSidebar from "@/components/financeSidebar"
import CustomerDetail from "./customer/customerDetail"

export default function Customer() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.application}>
				<FinanceSidebar isActive={toggle} />
				<div id={style.main_area}>
					<FinanceHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Payments" />
					<CustomerDetail />
				</div>
			</section>
		</>
	)
}
