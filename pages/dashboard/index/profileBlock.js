import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoUser_01 } from "@/components/images"
import Link from "next/link"

export default function ProfileBlock() {
	return (
		<>
			<div className={`${style.in_blk} ${style.profile_blk}`}>
				<div className={style.inr}>
					<h5>Contacts Assigned</h5>
					<p>Let me know how can I help you!!</p>
				</div>
				<div className={`${style.ico} ${style.fill} ${style.round}`}>
					<Image width={200} height={200} src={PhotoUser_01} alt="" />
				</div>
				<div className={style.txt}>
					<div className={style.name}>
						Jennifer Kem <span>Admin</span>
					</div>
					<div className={`${style.btn_blk} mt-4`}>
						<Link href="/dashboard/message" className={`${style.site_btn} ${style.light} w-100`}>
							Chat Now
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
