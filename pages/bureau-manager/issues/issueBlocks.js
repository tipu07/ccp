import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { BlockApplicationIcon, BlockChartIcon, BlockDollarIcon } from "@/components/images"

export default function IssueBlocks() {
	return (
		<>
			<div className="row mb-0">
				<div className="col-md-3 pb-0">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockChartIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>$7000</div>
							<span>Total Sale</span>
						</div>
					</div>
				</div>
				<div className="col-md-3 pb-0">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockDollarIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>$300</div>
							<span>Commission Earned</span>
						</div>
					</div>
				</div>
				<div className="col-md-3 pb-0">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockApplicationIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>11</div>
							<span>Application Filled</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
