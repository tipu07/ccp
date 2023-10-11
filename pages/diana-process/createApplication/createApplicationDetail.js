import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { SaveIcon } from "@/components/images"
import FieldsetDocuments from "./fieldsetDocuments"
import FieldsetAgreement from "./fieldsetAgreement"
import FieldsetPaymentMethods from "./fieldsetPaymentMethods"

import FieldsetCustomerDetails from "./fieldsetCustomerDetails"
import FieldsetCreditReport from "./fieldsetCreditReport"
import FieldsetDispute from "./fieldsetDispute"
import FieldsetUploadDocuments from "./fieldsetUploadDocuments"
import FieldsetTimeline from "./fieldsetTimeline"

export default function CreateApplicationDetail() {
	const [fieldset, setFieldset] = useState("CustomerDetails")
	return (
		<>
			<div className={style.tabs_block}>
				<ul className={style.tabs_list}>
					<li>
						<button type="button" className={fieldset === "CustomerDetails" ? style.active : ""} onClick={() => setFieldset("CustomerDetails")}>
							Customer Details
						</button>
					</li>
					<li>
						<button type="button" className={fieldset === "CreditReport" ? style.active : ""} onClick={() => setFieldset("CreditReport")}>
							Credit Report
						</button>
					</li>
					<li>
						<button type="button" className={fieldset === "Dispute" ? style.active : ""} onClick={() => setFieldset("Dispute")}>
							Dispute
						</button>
					</li>
					<li>
						<button type="button" className={fieldset === "UploadDocuments" ? style.active : ""} onClick={() => setFieldset("UploadDocuments")}>
							Upload Documents
						</button>
					</li>
					<li>
						<button type="button" className={fieldset === "Timeline" ? style.active : ""} onClick={() => setFieldset("Timeline")}>
							Timeline
						</button>
					</li>
				</ul>
				<button className={style.save_btn}>
					<Image width={100} height={100} src={SaveIcon} alt="" />
					<span>Save as a draft</span>
				</button>
			</div>
			{fieldset === "CustomerDetails" ? (
				<>
					<FieldsetCustomerDetails />
				</>
			) : fieldset === "CreditReport" ? (
				<>
					<FieldsetCreditReport />
				</>
			) : fieldset === "Dispute" ? (
				<>
					<FieldsetDispute />
				</>
			) : fieldset === "UploadDocuments" ? (
				<>
					<FieldsetUploadDocuments />
				</>
			) : fieldset === "Timeline" ? (
				<>
					<FieldsetTimeline />
				</>
			) : null}
		</>
	)
}
