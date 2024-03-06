import Navbar from './common/NavBar';

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main className="app-main">{children}</main>
    </>
  )
}
