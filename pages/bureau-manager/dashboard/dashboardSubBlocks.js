import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function DashboardSubBlocks() {
	return (
		<>
			<div className="row">
				<div className="col-md-3">
					<div className={style.dash_blk}>
						<div className={style.txt}>
							<div className={style.title}>3,852</div>
							<span>Total Customers</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.dash_blk}>
						<div className={style.txt}>
							<div className={style.title}>2000</div>
							<span>New Customers</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.dash_blk}>
						<div className={style.txt}>
							<div className={style.title}>860</div>
							<span>Pending</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.dash_blk}>
						<div className={style.txt}>
							<div className={style.title}>2992</div>
							<span>Active</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
