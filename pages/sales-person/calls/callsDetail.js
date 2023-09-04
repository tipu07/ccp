import React from "react"
import style from "@/styles/scss/web.module.scss"
import CallsBlocks from "./callsBlocks"
import TablePagination from "@/components/tablePagination"
import CallsTable from "./callsTable"
import Image from "next/image"
import { IconDownload2, IconFilter, IconSearch } from "@/components/images"

export default function CallsDetail() {
	return (
		<>
			<CallsBlocks />
			<div className="py-4"></div>
			<h4>Target Calls</h4>
			<div className={style.in_blk}>
				<div className={style.top_head}>
					<div className={style.srch_blk}>
						<button type="submit">
							<Image width={100} height={100} src={IconSearch} alt="" />
						</button>
						<input type="text" name="" id="" className={style.input} placeholder="Search" />
					</div>
					<div className={`${style.btn_blk} ms-auto`}>
						<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
							<Image width={100} height={100} src={IconFilter} alt="" /> Filters
						</button>
						<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
							<Image width={100} height={100} src={IconDownload2} alt="" /> Export CSV
						</button>
					</div>
				</div>
				<CallsTable />
			</div>
			<TablePagination />
		</>
	)
}
