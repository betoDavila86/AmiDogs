import createCustomError from './create-custom-errors'

export default {
    ContentError: createCustomError('ContentError'),
    LengthError: createCustomError('LengthError'),
    AuthError: createCustomError('AuthError'),
    ValueError: createCustomError('ValueError'),
    FormatError: createCustomError('FormatError'),
    ConflictError: createCustomError('ConflictError'),
    NotFoundError: createCustomError('NotFoundError'),
    NotAllowedError: createCustomError('NotAllowedError')
}