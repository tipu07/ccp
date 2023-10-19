import React from "react"
import style from "@/styles/scss/web.module.scss"
import TablePagination from "@/components/tablePagination"
import Image from "next/image"
import { IconDownload2, IconFilter, IconSearch } from "@/components/images"
import DashboardBlocks from "./dashboardBlocks"
import MainSalesChart from "./mainSalesChart"
import CustomerTable from "./customerTable"

export default function DashboardDetail() {
	return (
		<>
			<DashboardBlocks />
			<div className="py-4"></div>
			<div className="row">
				<div className="col-md-8 d-flex">
					<div className={`${style.in_blk} w-100`}>
						<div className="d-flex justify-content-between">
							<h5 className="m-0">Total Sales </h5>
							<select name="" id="" className={`${style.input} w-auto`}>
								<option value="">This Year</option>
								<option value="">This Year</option>
								<option value="">This Year</option>
							</select>
						</div>
						<div className={style.bar_chart}>
							<MainSalesChart />
						</div>
					</div>
				</div>
				<div className="col-md-4 d-flex">
					<div className={`${style.in_blk} d-flex flex-column w-100`}>
						<h5>Bureau Team List </h5>
						<div className={`${style.btn_blk} mt-auto align-items-center justify-content-center`}>
							<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
								Show All
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="py-4"></div>
			<h4>Customer List</h4>
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
					</div>
				</div>
				<CustomerTable />
			</div>
			<TablePagination />
		</>
	)
}
