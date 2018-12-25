import marked from 'marked'

export default page => {
  const renderer = new marked.Renderer()

  renderer.heading = (text, lv) => {
    if (lv === 1) {
      page.title = text
    }

    return `<h${lv}>${text}</h${lv}>`
  }

  return renderer
}
