import React from "react"
import style from "@/styles/scss/web.module.scss"
import TablePagination from "@/components/tablePagination"
import Image from "next/image"
import { RewardIcon } from "@/components/images"
import RewardPointsTable from "./rewardPointsTable"

export default function RewardPointsDetail() {
	return (
		<>
			<div className={style.in_blk}>
				<div className={style.reward_blk}>
					<div className={style.ico}>
						<Image width={100} height={100} src={RewardIcon} alt="" />
					</div>
					<div className={style.txt}>
						<div className={style.title}>100</div>
						<p>Reward Points</p>
					</div>
				</div>
				<RewardPointsTable />
			</div>
			<TablePagination />
		</>
	)
}
