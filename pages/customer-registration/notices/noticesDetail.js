import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconSearch } from "@/components/images"
import NoticesTable from "./noticesTable"
import NoticesEmpty from "./noticesEmpty"

export default function NoticesDetail() {
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
					<button className={style.site_btn}>+ Add New Notice</button>
				</div>
				<NoticesTable />
				<NoticesEmpty />
			</div>
		</>
	)
}
