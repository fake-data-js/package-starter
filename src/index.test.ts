import { expect, test } from 'vitest'
import { testFunc } from '@/index'

test('testFunc', () => {
  expect(testFunc()).toBe(true)
})
