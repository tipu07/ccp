import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import TablePagination from "@/components/tablePagination"
import Image from "next/image"
import { IconDownload2, IconFilter, IconSearch } from "@/components/images"
import FixedTable from "./fixedTable"
import NotFixedTable from "./notFixedTable"

export default function DoneFilesDetail() {
	const [tab, setTab] = useState("Fixed")
	return (
		<>
			<div className={style.tabs_block}>
				<ul className={style.tabs_list}>
					<li>
						<button type="button" className={tab === "Fixed" ? style.active : ""} onClick={() => setTab("Fixed")}>
							Fixed
						</button>
					</li>
					<li>
						<button type="button" className={tab === "NotFixed" ? style.active : ""} onClick={() => setTab("NotFixed")}>
							Not Fixed
						</button>
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
				{tab === "Fixed" ? (
					<>
						<FixedTable />
					</>
				) : tab === "NotFixed" ? (
					<>
						<NotFixedTable />
					</>
				) : null}
			</div>
			<TablePagination />
		</>
	)
}
