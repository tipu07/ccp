import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconCalendar, IconDownload2, IconFilter, IconSearch } from "@/components/images"
import CommissionTable from "./commissionTable"
import TablePagination from "@/components/tablePagination"

export default function CommissionDetail() {
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
					<div className={`${style.btn_blk} ms-auto`}>
						<button className={`${style.site_btn} ${style.simple} ${style.light_stroke}`}>
							<Image width={100} height={100} src={IconCalendar} alt="" /> Jan 6, 2022 - Jan 13, 2022
						</button>
						<button className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
							<Image width={100} height={100} src={IconDownload2} alt="" /> Export CSV
						</button>
					</div>
				</div>
				<CommissionTable />
			</div>
			<TablePagination />
		</>
	)
}
