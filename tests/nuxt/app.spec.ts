import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import app from '~/app.vue'

describe('app config', () => {
  it('is empty', () => {
    expect(useAppConfig()).toEqual({ nuxt: { buildId: 'test' } })
  })
})

describe('app', () => {
  it('app can be mounted', async () => {
    const component = await mountSuspended(app, { route: '/' })
    expect(component).toBeTruthy()
  })
  it('app has welcome to nuxt text', async () => {
    const component = await mountSuspended(app, { route: '/' })
    expect(component.html()).toContain('Welcome to Nuxt!')
  })
})
