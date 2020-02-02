/** @module px-by-default */

/**
 * @param {*} input
 * @returns {string} Normalized CSS size value
 */
export default input => {
  const hasUnit = /[a-z]\s*$/.test(input)
  if (hasUnit) {
    return input
  }
  return `${input}px`
}