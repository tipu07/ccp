import React from "react"
import style from "@/styles/scss/web.module.scss"
import TablePagination from "@/components/tablePagination"
import Image from "next/image"
import { IconDownload2, IconFilter, IconSearch } from "@/components/images"
import ApplicationTable from "./applicationTable"

export default function ApplicationDetail() {
	return (
		<>
			<div className={style.tabs_block}>
				<ul className={style.tabs_list}>
					<li>
						<button type="button" className={style.active}>
							All Application
						</button>
					</li>
					<li>
						<button type="button">In Review</button>
					</li>
					<li>
						<button type="button">Drafts</button>
					</li>
					<li>
						<button type="button">Filled Application</button>
					</li>
					<li>
						<button type="button">Follow Up</button>
					</li>
				</ul>
			</div>
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
