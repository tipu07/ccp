import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { DownwardIcon, UpwardIcon } from "@/components/images"

export default function InstalmentBookBlocks() {
	return (
		<>
			<div className="row mb-0">
				<div className="col-md-4 pb-0">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={UpwardIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>$7,090.00</div>
							<span>Total Installments</span>
						</div>
					</div>
				</div>
				<div className="col-md-4 pb-0">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={UpwardIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>$4,656.00</div>
							<span>Total Paid</span>
						</div>
					</div>
				</div>
				<div className="col-md-4 pb-0">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={DownwardIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>$6,783.00</div>
							<span>Past Due</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
