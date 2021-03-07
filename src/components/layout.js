import * as React from "react"
import Header from "./header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header title={title} isRoot={isRootPath} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, برمج بـ
        {` `}
        <a href="https://www.gatsbyjs.com">غاتسبي</a>
      </footer>
    </div>
  )
}

export default Layout
