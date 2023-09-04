import Link from "next/link"
import style from "@/styles/scss/web.module.scss"
import { useRouter } from "next/router"
import Image from "next/image"
import { ChevDownIcon, USAFlag } from "../images"

export default function Navigation(props) {
	const { navActive } = props
	const router = useRouter()

	return (
		<>
			<nav id={style.nav}>
				<ul id={style.nav_list} className={`${navActive ? style.active : ""}`}>
					<li>
						<Link href="/login" className={router.pathname === "/login" ? style.active : ""}>
							Affiliate Login
						</Link>
					</li>
					<li>
						<Link href="/pricing" className={router.pathname === "/pricing" ? style.active : ""}>
							Pricing
						</Link>
					</li>
					<li>
						<Link href="/refund-policy" className={router.pathname === "/refund-policy" ? style.active : ""}>
							Refund Policy
						</Link>
					</li>
					<li>
						<Link href="/faq" className={router.pathname === "/faq" ? style.active : ""}>
							FAQ&lsquo;s
						</Link>
					</li>
					<li className={style.btn_links}>
						<Link href="/register" className={`${style.site_btn} ${style.blank}`}>
							Get Started
						</Link>
					</li>
					<li>
						<Link href="/login" className={`${style.site_btn} ${style.blank} ${style.simple_stroke}`}>
							Login
						</Link>
					</li>
				</ul>
				<button type="button" id={style.lang_dropdown}>
					<Image width={60} height={60} src={USAFlag} alt="" className={style.flag_icon} /> English
					<Image width={30} height={30} src={ChevDownIcon} alt="" />
				</button>
			</nav>
		</>
	)
}
