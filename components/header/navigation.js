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
						<Link href="/production/login" className={router.pathname === "/production/login" ? style.active : ""}>
							Affiliate Login
						</Link>
					</li>
					<li>
						<Link href="/production/pricing" className={router.pathname === "/production/pricing" ? style.active : ""}>
							Pricing
						</Link>
					</li>
					<li>
						<Link href="/production/refund-policy" className={router.pathname === "/production/refund-policy" ? style.active : ""}>
							Refund Policy
						</Link>
					</li>
					<li>
						<Link href="/production/faq" className={router.pathname === "/production/faq" ? style.active : ""}>
							FAQ&lsquo;s
						</Link>
					</li>
					<li className={style.btn_links}>
						<Link href="/production/register" className={`${style.site_btn} ${style.blank}`}>
							Get Started
						</Link>
					</li>
					<li>
						<Link href="/production/login" className={`${style.site_btn} ${style.blank} ${style.simple_stroke}`}>
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
