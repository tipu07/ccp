import React from "react"
import style from "@/styles/scss/web.module.scss"
import AgreementContent from "./agreementContent"

export default function AgreementDetail() {
	return (
		<>
			<div className={style.in_blk}>
				<AgreementContent />
			</div>
		</>
	)
}
