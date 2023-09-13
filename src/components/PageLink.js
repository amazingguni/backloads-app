const PageLink = ({ href, name, itemClass }) => {
  return (
    <li>
      <a href={href} className={itemClass}>
        {name}
      </a>
    </li>
  )
}
export default PageLink
