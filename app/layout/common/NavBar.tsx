import { observer } from 'mobx-react-lite'
import { ROUTES_LINKS } from '@/app/config/index'
import { usePathname } from 'next/navigation'
// import Logo from '@/components/Logo'
import Link from 'next/link'
import '@/app/style/app.scss'

export default observer(function Header() {
  const pathname = usePathname();
console.log(pathname)
  return (
    <div className="app-header shadow-md">
      <div className="app-header-navbar container white shadow-4 border-bottom pc-model">
        <div className="app-header-main">
          <div className="app-header-logo">
            <span className="app-logo">
              {/* <Logo /> */}
            </span>
          </div>
          <div className="app-header-nav">
            {ROUTES_LINKS.map(({ title, path }: any) => {
              return (
                <Link href={path} key={path} className={pathname === path ? 'active nav-link' : 'nav-link'}> {title} </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
})
