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
							<div className={style.price}>$314K</div>
							<span>Total Sales</span>
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
							<span>Conversion Rate</span>
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
							<span>Today’s Sale</span>
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
							<span>Conversion Rate</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
