import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import AffiliateRegistrationHeader from "@/components/affiliateRegistrationHeader"
import AffiliateRegistrationSidebar from "@/components/affiliateRegistrationSidebar"
import WithdrawRequestDetail from "./withdrawRequest/withdrawRequestDetail"

export default function WithdrawRequest() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.affiliateRegistration}>
				<AffiliateRegistrationSidebar isActive={toggle} />
				<div id={style.main_area}>
					<AffiliateRegistrationHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Withdraw Request" />
					<WithdrawRequestDetail />
				</div>
			</section>
		</>
	)
}
