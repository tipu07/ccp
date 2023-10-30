import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconDownload2, IconFilter, IconPlus, IconSearch } from "@/components/images"
import ManageApplicationsTable from "./manageApplicationsTable"
import TablePagination from "@/components/tablePagination"
import Link from "next/link"

export default function ManageApplicationsDetail() {
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
						<button className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
							<Image width={100} height={100} src={IconFilter} alt="" /> Filter
						</button>
						<button className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
							<Image width={100} height={100} src={IconDownload2} alt="" /> Export CSV
						</button>
						<Link href="/user/create-application" className={style.site_btn}>
							<Image width={100} height={100} src={IconPlus} alt="" /> Create New Application
						</Link>
					</div>
				</div>
				<div className={style.tab_head}>
					<ul>
						<li>
							<button type="button" className={style.active}>
								All Application
							</button>
						</li>
						<li>
							<button type="button">Approved</button>
						</li>
						<li>
							<button type="button">Paid</button>
						</li>
						<li>
							<button type="button">Unpaid</button>
						</li>
						<li>
							<button type="button">Archived</button>
						</li>
					</ul>
				</div>
				<ManageApplicationsTable />
			</div>
			<TablePagination />
		</>
	)
}
