import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import app from '~/app.vue'

describe('app', () => {
  it('app can be mounted', async () => {
    const component = await mountSuspended(app, { route: '/' })
    expect(component).toBeTruthy()
  })
  it('app has get started text', async () => {
    const component = await mountSuspended(app, { route: '/' })
    expect(component.html()).toContain('Get started')
  })
})
