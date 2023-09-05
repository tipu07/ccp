import React from "react"
import style from "@/styles/scss/web.module.scss"
import CcpNoticeContent from "./ccpNoticeContent"

export default function CcpNoticeDetail() {
	return (
		<>
			<div className={style.in_blk}>
				<CcpNoticeContent />
			</div>
		</>
	)
}
