import { pageLinks } from '../data'
import PageLink from './PageLink'

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((page) => (
        <PageLink key={page.id} {...page} itemClass={itemClass} />
      ))}
    </ul>
  )
}
export default PageLinks
