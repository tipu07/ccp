import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { BlockChartGreenIcon, BlockChartRedIcon, BlockUpwardGreenIcon, BlockUpwardRedIcon } from "@/components/images"

export default function DashboardBlocks() {
	return (
		<>
			<div className="row">
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockChartRedIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>50</div>
							<span>Total Calls</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockUpwardRedIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>63.5%</div>
							<span>Total Calls Equafax</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockChartGreenIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>$14k</div>
							<span>Total Calls Equafax</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockUpwardGreenIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>93.5%</div>
							<span>Total Calls Experian</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
