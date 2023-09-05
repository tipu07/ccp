import React from "react"
import style from "@/styles/scss/web.module.scss"
import ProfileBlock from "./profileBlock"
import DocumentBlock from "./documentBlock"
import InvoiceBlock from "./invoiceBlock"
import NotesBlock from "./notesBlock"
import PrivateNotesBlock from "./privateNotesBlock"
import PublicFeedsBlock from "./publicFeedsBlock"
import DisputeBlock from "./disputeBlock"
import ScoreBlock from "./scoreBlock"
import UserProfileBlock from "./userProfileBlock"

export default function DashboardDetail() {
	return (
		<>
			<div className="row">
				<div className="col-lg-8">
					<div className="row">
						<div className="col-md-12">
							<UserProfileBlock />
						</div>
						<div className="col-md-12">
							<ScoreBlock />
						</div>
						<div className="col-md-12">
							<DisputeBlock />
						</div>
						<div className="col-md-6">
							<PublicFeedsBlock />
						</div>
						<div className="col-md-6">
							<PrivateNotesBlock />
						</div>
					</div>
				</div>
				<div className="col-lg-4">
					<ProfileBlock />
					<DocumentBlock />
					<InvoiceBlock />
					<NotesBlock />
				</div>
			</div>
		</>
	)
}
