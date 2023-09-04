import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import AffiliateRegistrationHeader from "@/components/affiliateRegistrationHeader"
import AffiliateRegistrationSidebar from "@/components/affiliateRegistrationSidebar"
import MembershipCardDetail from "./membershipCard/membershipCardDetail"

export default function WithdrawRequest() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.membership_card}>
				<AffiliateRegistrationSidebar isActive={toggle} />
				<div id={style.main_area}>
					<AffiliateRegistrationHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Membership Card" />
					<MembershipCardDetail />
				</div>
			</section>
		</>
	)
}
