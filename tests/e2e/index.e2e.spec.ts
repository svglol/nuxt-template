import { createPage, setup } from '@nuxt/test-utils'
import { describe, it, expect } from 'vitest'

describe('browser', async () => {
  await setup({
    browser: true,
  })

  it('renders the index page', async () => {
    const page = await createPage('/')
    const html = await page.innerHTML('body')
    expect(html)
  })
})
