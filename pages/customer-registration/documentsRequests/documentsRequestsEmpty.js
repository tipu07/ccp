import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { DocumentImage } from "@/components/images"

export default function DocumentsRequestsEmpty() {
	return (
		<>
			<div className={style.empty_data}>
				<div className={style.empty_data_inner}>
					<div className={`${style.ico} ${style.fill} ${style.round}`}>
						<Image width={300} height={300} src={DocumentImage} alt="" />
					</div>
					<h4>No Documents here!</h4>
					<p>There are no documents attached. Click on upload to upload documents</p>
					<div className={`${style.btn_blk} justify-content-center my-5`}>
						<button type="button" className={style.site_btn}>
							Upload
						</button>
					</div>
					<p>JPEG, PDF format only</p>
				</div>
			</div>
		</>
	)
}
