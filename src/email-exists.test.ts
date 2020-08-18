import './email-exists'
import emailExists from './email-exists';

test('It returns a boolean', async () => {
    const result = await emailExists('foo@bar.com')
    expect(typeof result).toBe('boolean')
})