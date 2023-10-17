import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import TablePagination from "@/components/tablePagination"
import Image from "next/image"
import { IconDownload2, IconFilter, IconSearch } from "@/components/images"
import ProfileTable from "./profileTable"
import PaymentHistoryTable from "./paymentHistoryTable"

export default function CustomerDetail() {
	const [tab, setTab] = useState("Profile")
	return (
		<>
			<div className={style.tabs_block}>
				<ul className={style.tabs_list}>
					<li>
						<button type="button" className={tab === "Profile" ? style.active : ""} onClick={() => setTab("Profile")}>
							Profile
						</button>
					</li>
					<li>
						<button type="button" className={tab === "PaymentHistory" ? style.active : ""} onClick={() => setTab("PaymentHistory")}>
							Payment History
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
				{tab === "Profile" ? (
					<>
						<ProfileTable />
					</>
				) : tab === "PaymentHistory" ? (
					<>
						<PaymentHistoryTable />
					</>
				) : null}
			</div>
			<TablePagination />
		</>
	)
}
