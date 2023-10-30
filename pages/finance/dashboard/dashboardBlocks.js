import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { BlockClockIcon, BlockCustomerIcon, BlockDollarChainIcon, BlockDollarCircleIcon } from "@/components/images"

export default function DashboardBlocks() {
	return (
		<>
			<div className="row mb-0">
				<div className="col-md-4 pb-0">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockDollarCircleIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>50</div>
							<span>Upcoming Payments</span>
						</div>
					</div>
				</div>
				<div className="col-md-4 pb-0">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockCustomerIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>6</div>
							<span>Paid Customer</span>
						</div>
					</div>
				</div>
				<div className="col-md-4 pb-0">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockClockIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>19</div>
							<span>Pending</span>
						</div>
					</div>
				</div>
				<div className="col-md-4 pb-0">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockDollarChainIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>6</div>
							<span>Refund</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
