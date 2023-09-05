import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { ArrowRightIcon, AttachIcon } from "@/components/images"

export default function MessagesForm() {
	return (
		<>
			<form action="" method="post" className={style.send_message}>
				<div className={style.in}>
					<input type="text" name="" id="" className={style.input} placeholder="Type Messages..." />
					<button type="button" className={style.attach}>
						<Image width={100} height={100} src={AttachIcon} alt="" />
					</button>
					<div className={style.btn_blk}>
						<button type="submit" className={style.site_btn}>
							Send
							<Image width={100} height={100} src={ArrowRightIcon} alt="" />
						</button>
					</div>
				</div>
			</form>
		</>
	)
}
