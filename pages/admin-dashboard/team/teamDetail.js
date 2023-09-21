import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconDownload2, IconPlus, IconSearch } from "@/components/images"
import TeamMembersTable from "./teamMembersTable"
import TeamActivitiesTable from "./teamActivitiesTable"
import TablePagination from "@/components/tablePagination"

export default function TeamDetail() {
	const [tableView, setTableView] = useState("TeamMembers")
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
							<Image width={100} height={100} src={IconDownload2} alt="" /> Export CSV
						</button>
						<button className={style.site_btn}>
							<Image width={100} height={100} src={IconPlus} alt="" /> Add Employee
						</button>
					</div>
				</div>
				<div className={style.tab_head}>
					<ul>
						<li>
							<button type="button" className={tableView === "TeamMembers" ? style.active : ""} onClick={() => setTableView("TeamMembers")}>
								Team Members
							</button>
						</li>
						<li>
							<button type="button" className={tableView === "TeamActivities" ? style.active : ""} onClick={() => setTableView("TeamActivities")}>
								Team Activities
							</button>
						</li>
					</ul>
				</div>
				{tableView === "TeamMembers" ? <TeamMembersTable /> : tableView === "TeamActivities" ? <TeamActivitiesTable /> : null}
			</div>
			<TablePagination />
		</>
	)
}
