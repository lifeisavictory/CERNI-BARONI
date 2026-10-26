import { siteUrl } from '../data/content.js'

// React 19 hoists <title>, <meta> and <link> rendered here into <head>.
// The canonical is built from the route's fixed path (not location.pathname),
// so variants like /vznik/ or /index.html still canonicalize to the clean URL.
function PageMeta({ title, description, path, noindex = false }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex ? (
        <meta name="robots" content="noindex" />
      ) : (
        <link rel="canonical" href={siteUrl + path} />
      )}
    </>
  )
}

export default PageMeta
