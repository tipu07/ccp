import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { BlockCallIcon, BlockDraftsIcon, BlockThumbsUpIcon, BlockUserIcon } from "@/components/images"

export default function CallsBlocks() {
	return (
		<>
			<div className="row mb-0">
				<div className="col-md-3 pb-0">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockCallIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>50</div>
							<span>Target Call</span>
						</div>
					</div>
				</div>
				<div className="col-md-3 pb-0">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockUserIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>6</div>
							<span>Today’s Follow Up</span>
						</div>
					</div>
				</div>
				<div className="col-md-3 pb-0">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockThumbsUpIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>19</div>
							<span>Intrested</span>
						</div>
					</div>
				</div>
				<div className="col-md-3 pb-0">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockDraftsIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>00</div>
							<span>Drafts</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
