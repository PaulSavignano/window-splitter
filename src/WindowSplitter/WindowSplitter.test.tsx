import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'

import WindowSplitter from './WindowSplitter'

describe('WindowSplitter', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <WindowSplitter orientation="horizontal">
        <article>One</article>
        <article>Two</article>
        <article>Three</article>
      </WindowSplitter>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it('should set width', () => {
    const { getAllByRole, getByText } = render(
      <WindowSplitter orientation="horizontal">
        <article>One</article>
        <article>Two</article>
        <article>Three</article>
      </WindowSplitter>
    )
    const divider = getAllByRole('separator')[0]
    fireEvent.mouseDown(divider)
    fireEvent.mouseMove(divider, { clientX: 32 })
    const article = getByText('One')
    expect(article).toHaveStyle(`min-width: 32px`)
  })
})