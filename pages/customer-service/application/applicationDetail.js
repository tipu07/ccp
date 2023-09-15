import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { SaveIcon } from "@/components/images"
import FormCustomerDetails from "./formCustomerDetails"
import FormSuccess from "./formSuccess"

export default function ApplicationDetail() {
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
			<form action="" method="post" className={style.application_form}>
				{fieldset === "CustomerDetails" ? (
					<>
						<FormCustomerDetails onFieldset={() => setFieldset("Success")} />
					</>
				) : fieldset === "Success" ? (
					<>
						<FormSuccess />
					</>
				) : null}
			</form>
		</>
	)
}
