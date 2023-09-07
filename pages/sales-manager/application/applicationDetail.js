import React from "react"
import style from "@/styles/scss/web.module.scss"
import TablePagination from "@/components/tablePagination"
import Image from "next/image"
import { IconDownload2, IconFilter, IconSearch } from "@/components/images"
import ApplicationTable from "./applicationTable"
import DashboardBlocks from "./dashboardBlocks"
import NewApplicationTable from "./newApplicationTable"
import TabButtons from "@/components/tabButtons"

export default function ApplicationDetail() {
	return (
		<>
			<div className="d-flex justify-content-end">
				<TabButtons />
			</div>
			<div className="py-2"></div>
			<DashboardBlocks />
			<div className="py-4"></div>
			<h4>New Application</h4>
			<div className={style.in_blk}>
				<NewApplicationTable />
			</div>
			<div className="py-4"></div>
			<h4>Application</h4>
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
				<ApplicationTable />
			</div>
			<TablePagination />
		</>
	)
}
