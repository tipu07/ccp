import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import TablePagination from "@/components/tablePagination"
import Image from "next/image"
import { IconDownload2, IconFilter, IconSearch } from "@/components/images"
import CustomerUpdateCallsTable from "./customerUpdateCallsTable"
import CustomerWelcomeCallsTable from "./customerWelcomeCallsTable"
import CrowningCallsTable from "./crowningCallsTable"

export default function CallsDetail() {
	const [tab, setTab] = useState("CustomerUpdateCalls")
	return (
		<>
			<div className={style.tabs_block}>
				<ul className={style.tabs_list}>
					<li>
						<button type="button" className={tab === "CustomerUpdateCalls" ? style.active : ""} onClick={() => setTab("CustomerUpdateCalls")}>
							Customer Update Calls
						</button>
					</li>
					<li>
						<button type="button" className={tab === "CustomerWelcomeCalls" ? style.active : ""} onClick={() => setTab("CustomerWelcomeCalls")}>
							Customer Welcome Calls
						</button>
					</li>
					<li>
						<button type="button" className={tab === "CrowningCalls" ? style.active : ""} onClick={() => setTab("CrowningCalls")}>
							Crowning Calls
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
				{tab === "CustomerUpdateCalls" ? (
					<>
						<CustomerUpdateCallsTable />
					</>
				) : tab === "CustomerWelcomeCalls" ? (
					<>
						<CustomerWelcomeCallsTable />
					</>
				) : tab === "CrowningCalls" ? (
					<>
						<CrowningCallsTable />
					</>
				) : null}
			</div>
			<TablePagination />
		</>
	)
}
