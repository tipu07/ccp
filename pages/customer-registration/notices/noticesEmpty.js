import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { NoticeImage } from "@/components/images"

export default function NoticesEmpty() {
	return (
		<>
			<div className={style.empty_data}>
				<div className={style.empty_data_inner}>
					<div className={`${style.ico} ${style.fill} ${style.round}`}>
						<Image width={300} height={300} src={NoticeImage} alt="" />
					</div>
					<h4>No Notices here!</h4>
					<p>There are no Notices Yet</p>
				</div>
			</div>
		</>
	)
}
