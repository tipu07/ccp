import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { BlockApplicationIcon, BlockDraftsIcon, BlockIssueIcon, BlockUserIcon } from "@/components/images"

export default function DashboardBlocks() {
	return (
		<>
			<div className="row">
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockApplicationIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>50</div>
							<span>Total Application</span>
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
							<span>In Review</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockIssueIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>19</div>
							<span>Issue</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockDraftsIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>4</div>
							<span>Drafts</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
