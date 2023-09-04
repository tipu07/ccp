import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { ClientGroupIcon, ClientSingleIcon, ClientTenIcon } from "@/components/images"

export default function FieldsetPaySchedule() {
	return (
		<>
			<div className={style.in_blk}>
				<div className={style.heading}>Pay Schedule</div>
				<div className="row">
					<div className="col-sm-4">
						<div className={style.pay_schedule_blk}>
							<div className={style.ico}>
								<Image width={100} height={200} src={ClientSingleIcon} alt="" />
							</div>
							<p>
								<strong>$100.00</strong> for <br /> every new client
							</p>
						</div>
					</div>
					<div className="col-sm-4">
						<div className={style.pay_schedule_blk}>
							<div className={style.ico}>
								<Image width={100} height={200} src={ClientGroupIcon} alt="" />
							</div>
							<p>
								<strong>$350.00</strong> for every 5 new clients <br /> in a 7 days period
							</p>
						</div>
					</div>
					<div className="col-sm-4">
						<div className={style.pay_schedule_blk}>
							<div className={style.ico}>
								<Image width={100} height={200} src={ClientTenIcon} alt="" />
							</div>
							<p>
								<strong>$550.00</strong> for every 10 new clients <br /> in a 7 days period
							</p>
						</div>
					</div>
				</div>
				<div className="small mt-5">
					<p className="small">Disclaimer: Payments will be made within 7-10 business days, after the referred customer has made full payment of $2000</p>
				</div>
			</div>
		</>
	)
}
