import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { ProfessionalWoman, SaveIcon } from "@/components/images"
import FormBasicDetails from "./formBasicDetails"
import FormUploadDocuments from "./formUploadDocuments"
import FormAgreement from "./formAgreement"
import FormPoliciesProcedures from "./formPoliciesProcedures"
import FormPaymentDetails from "./formPaymentDetails"
import FormSuccess from "./formSuccess"

export default function ApplicationDetail() {
	const [fieldset, setFieldset] = useState("BasicDetails")
	return (
		<>
			<div className={style.tabs_block}>
				<ul className={style.tabs_list}>
					<li>
						<button type="button" className={fieldset === "BasicDetails" ? style.active : ""} onClick={() => setFieldset("BasicDetails")}>
							Basic Details
						</button>
					</li>
					<li>
						<button type="button" className={fieldset === "UploadDocuments" ? style.active : ""} onClick={() => setFieldset("UploadDocuments")}>
							Upload Documents
						</button>
					</li>
					<li>
						<button type="button" className={fieldset === "Agreement" ? style.active : ""} onClick={() => setFieldset("Agreement")}>
							Agreement
						</button>
					</li>
					<li>
						<button type="button" className={fieldset === "PoliciesProcedures" ? style.active : ""} onClick={() => setFieldset("PoliciesProcedures")}>
							Policies & Procedures
						</button>
					</li>
					<li>
						<button type="button" className={fieldset === "PaymentDetails" ? style.active : ""} onClick={() => setFieldset("PaymentDetails")}>
							Payment Details
						</button>
					</li>
				</ul>
				<button className={style.save_btn}>
					<Image width={100} height={100} src={SaveIcon} alt="" />
					<span>Save as a draft</span>
				</button>
			</div>
			<form action="" method="post" className={style.application_form}>
				{fieldset === "BasicDetails" ? (
					<>
						<FormBasicDetails onFieldset={() => setFieldset("UploadDocuments")} />
					</>
				) : fieldset === "UploadDocuments" ? (
					<>
						<FormUploadDocuments onFieldset={() => setFieldset("Agreement")} />
					</>
				) : fieldset === "Agreement" ? (
					<>
						<FormAgreement onFieldset={() => setFieldset("PoliciesProcedures")} />
					</>
				) : fieldset === "PoliciesProcedures" ? (
					<>
						<FormPoliciesProcedures onFieldset={() => setFieldset("PaymentDetails")} />
					</>
				) : fieldset === "PaymentDetails" ? (
					<>
						<FormPaymentDetails onFieldset={() => setFieldset("Success")} />
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
