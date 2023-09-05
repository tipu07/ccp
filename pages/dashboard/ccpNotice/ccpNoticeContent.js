import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoCCP } from "@/components/images"

export default function CcpNoticeContent() {
	return (
		<>
			<div className={style.content}>
				<Image width={2000} height={2000} src={PhotoCCP} alt="" />
			</div>
		</>
	)
}
