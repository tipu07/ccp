import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconDownload2, IconFilter, IconPlus, IconSearch } from "@/components/images"
import InstallmentBookTable from "./installmentBookTable"
import TablePagination from "@/components/tablePagination"

export default function InstallmentBookDetail() {
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
							<Image width={100} height={100} src={IconFilter} alt="" /> Filters
						</button>
						<button className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
							<Image width={100} height={100} src={IconDownload2} alt="" /> Export CSV
						</button>
						<button className={style.site_btn}>
							<Image width={100} height={100} src={IconPlus} alt="" /> Add Installment
						</button>
					</div>
				</div>
				<InstallmentBookTable />
			</div>
			<TablePagination />
		</>
	)
}
