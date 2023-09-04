import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { TickIcon } from "@/components/images"

export default function FormSuccess() {
	return (
		<>
			<fieldset>
				<div className={style.in_blk}>
					<div className={style.success_blk}>
						<div className={`${style.success_blk_inner} text-center`}>
							<div className={style.icon}>
								<Image width={200} height={200} src={TickIcon} alt="" />
							</div>
							<h5>Submitted Application Successful</h5>
							<p className="small">The application is in process. It will take 24 hours to process.</p>
						</div>
					</div>
				</div>
			</fieldset>
		</>
	)
}
