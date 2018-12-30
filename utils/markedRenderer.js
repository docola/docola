import marked from 'marked'

export default page => {
  const renderer = new marked.Renderer()

  renderer.heading = (text, level) => {
    page.headings.push(text)

    return `<h${level}>${text}</h${level}>`
  }

  renderer.link = (href, title, text) =>
    `<Link to="${href}" title="${title}">${text}</Link>`

  return renderer
}
