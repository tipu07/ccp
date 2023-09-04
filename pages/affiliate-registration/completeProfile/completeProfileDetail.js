import React from "react"
import style from "@/styles/scss/web.module.scss"
import FieldsetAffiliateForm from "./fieldsetAffiliateForm"
import FieldsetAffiliateRegistration from "./fieldsetAffiliateRegistration"
import FieldsetPaySchedule from "./fieldsetPaySchedule"
import Link from "next/link"

export default function CompleteProfileDetail() {
	return (
		<>
			<form action="" method="post" className={style.application_form}>
				<div className="row">
					<div className="col-lg-9">
						<FieldsetAffiliateForm />
						<FieldsetAffiliateRegistration />
						<FieldsetPaySchedule />
						<div className={`${style.btn_blk} justify-content-end mt-5`}>
							<Link href="?" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
								FAQ’s
							</Link>
							<button type="button" className={style.site_btn}>
								Submit
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	)
}
