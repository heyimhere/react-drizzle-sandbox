import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import UseState from './UseState'

// ExercisePage uses <Link> internally so we wrap in MemoryRouter
function renderUseState() {
  return render(
    <MemoryRouter>
      <UseState />
    </MemoryRouter>,
  )
}

describe('ProfileEditor', () => {
  it('renders all four inputs and both action buttons', () => {
    renderUseState()
    expect(screen.getByPlaceholderText('Ray Silvers')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('ray@example.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Tell us about yourself…')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('••••••••')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /save profile/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument()
  })

  it('typing in the name input updates its value', async () => {
    renderUseState()
    const nameInput = screen.getByPlaceholderText('Ray Silvers')
    await userEvent.type(nameInput, 'Alice')
    expect(nameInput).toHaveValue('Alice')
  })

  it('bio character counter reflects current length', async () => {
    renderUseState()
    const bio = screen.getByPlaceholderText('Tell us about yourself…')
    await userEvent.type(bio, 'Hello!')
    expect(screen.getByText('6 / 160')).toBeInTheDocument()
  })

  it('bio counter turns red when bio is at max length', async () => {
    renderUseState()
    const bio = screen.getByPlaceholderText('Tell us about yourself…')
    await userEvent.type(bio, 'x'.repeat(160))
    const counter = screen.getByText('160 / 160')
    expect(counter).toHaveStyle({ color: '#f87171' })
  })

  it('password show/hide toggle switches input type', async () => {
    renderUseState()
    const pwdInput = screen.getByPlaceholderText('••••••••')
    expect(pwdInput).toHaveAttribute('type', 'password')

    await userEvent.click(screen.getByRole('button', { name: /show/i }))
    expect(pwdInput).toHaveAttribute('type', 'text')

    await userEvent.click(screen.getByRole('button', { name: /hide/i }))
    expect(pwdInput).toHaveAttribute('type', 'password')
  })

  it('reset clears all fields and hides the password', async () => {
    renderUseState()
    await userEvent.type(screen.getByPlaceholderText('Ray Silvers'), 'Alice')
    await userEvent.type(screen.getByPlaceholderText('ray@example.com'), 'alice@example.com')
    await userEvent.type(screen.getByPlaceholderText('Tell us about yourself…'), 'bio text')
    await userEvent.type(screen.getByPlaceholderText('••••••••'), 'secret')
    await userEvent.click(screen.getByRole('button', { name: /show/i }))

    await userEvent.click(screen.getByRole('button', { name: /reset/i }))

    expect(screen.getByPlaceholderText('Ray Silvers')).toHaveValue('')
    expect(screen.getByPlaceholderText('ray@example.com')).toHaveValue('')
    expect(screen.getByPlaceholderText('Tell us about yourself…')).toHaveValue('')
    expect(screen.getByPlaceholderText('••••••••')).toHaveValue('')
    expect(screen.getByPlaceholderText('••••••••')).toHaveAttribute('type', 'password')
  })

  it('submit calls console.log with the current field values', async () => {
    renderUseState()
    const spy = vi.spyOn(console, 'log').mockImplementation(() => undefined)

    await userEvent.type(screen.getByPlaceholderText('Ray Silvers'), 'Alice')
    await userEvent.click(screen.getByRole('button', { name: /save profile/i }))

    expect(spy).toHaveBeenCalledWith('Submitted:', expect.objectContaining({ name: 'Alice' }))
    spy.mockRestore()
  })
})
