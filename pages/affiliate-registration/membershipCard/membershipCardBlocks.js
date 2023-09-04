import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "@/components/logo"

export default function MembershipCardBlocks() {
	return (
		<>
			<div className={style.membership_card_wrap}>
				<div className={`${style.membership_card} ${style.simple}`}>
					<div className={style.title}>
						Membership Card <br />
						<span>Premier Membership</span>
					</div>
					<div className={style.name}>
						<strong>Affiliate Name </strong>
						<div className={style.number}>6578 - 78678 - 67567</div>
					</div>
				</div>
				<div className={`${style.membership_card} ${style.ccp}`}>
					<Logo />
					<span>Premier Membership </span>
				</div>
			</div>
		</>
	)
}
