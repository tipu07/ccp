import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { DownwardIcon, UpwardIcon } from "@/components/images"

export default function DashboardBlocks() {
	return (
		<>
			<div className="row">
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={DownwardIcon} alt="" />
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
							<Image width={100} height={100} src={UpwardIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>$14K</div>
							<span>Commission Earned</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={UpwardIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>2</div>
							<span>Upcoming payments</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={UpwardIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>79.1%</div>
							<span>Conversion Rate</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
