import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { BlockCallIcon, BlockDollarIcon, BlockThumbsUpIcon, BlockUserIcon } from "@/components/images"

export default function DashboardBlocks() {
	return (
		<>
			<div className="row">
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockCallIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>50</div>
							<span>Call to Customers</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockUserIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>6</div>
							<span>Follow Up</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockThumbsUpIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>19</div>
							<span>Interested</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
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
			</div>
		</>
	)
}
