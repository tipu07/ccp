import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconSearch } from "@/components/images"
import DocumentsRequestsTable from "./documentsRequestsTable"
import DocumentsRequestsEmpty from "./documentsRequestsEmpty"

export default function DocumentsRequestsDetail() {
	return (
		<>
			<div className={style.in_blk}>
				<div className={style.top_head}>
					<div className={style.srch_blk}>
						<button type="submit">
							<Image width={100} height={100} src={IconSearch} alt="" />
						</button>
						<input type="text" name="" id="" className={style.input} placeholder="Search" />
					</div>
					<button className={style.site_btn}>+ Add New Documents</button>
				</div>
				<DocumentsRequestsTable />
				<DocumentsRequestsEmpty />
			</div>
		</>
	)
}
