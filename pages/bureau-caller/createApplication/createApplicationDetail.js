import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import FieldsetCustomerDetails from "./fieldsetCustomerDetails"
import FieldsetDispute from "./fieldsetDispute"
import FieldsetDocuments from "./fieldsetDocuments"

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
						<button type="button" className={fieldset === "Dispute" ? style.active : ""} onClick={() => setFieldset("Dispute")}>
							Dispute
						</button>
					</li>
					<li>
						<button type="button" className={fieldset === "Documents" ? style.active : ""} onClick={() => setFieldset("Documents")}>
							Documents
						</button>
					</li>
				</ul>
				<button className={style.save_btn}>
					<span>View Credit Report</span>
				</button>
			</div>
			{fieldset === "CustomerDetails" ? (
				<>
					<FieldsetCustomerDetails />
				</>
			) : fieldset === "Dispute" ? (
				<>
					<FieldsetDispute />
				</>
			) : fieldset === "Documents" ? (
				<>
					<FieldsetDocuments />
				</>
			) : null}
		</>
	)
}
