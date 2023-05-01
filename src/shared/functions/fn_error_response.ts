import is_debug from 'shared/helpers/is_debug'

export default (errorMessage: string, customMessage: string) => new Error(is_debug() ? errorMessage : customMessage)
