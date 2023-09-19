import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconDownload2, IconFilter, IconPlus, IconSearch } from "@/components/images"
import ApplicationBlocks from "./applicationBlocks"
import ApplicationTable from "./applicationTable"
import TablePagination from "@/components/tablePagination"
import Link from "next/link"

export default function ApplicationDetail() {
	return (
		<>
			<div className={style.top_head}>
				<h4 className="m-0">Summary</h4>
				<div className={`${style.btn_blk} ms-auto`}>
					<Link href="?" className={`${style.site_btn}`}>
						<Image width={100} height={100} src={IconPlus} alt="" /> Create New Summary
					</Link>
				</div>
			</div>
			<ApplicationBlocks />
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
