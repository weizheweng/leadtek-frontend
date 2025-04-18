export const safeJsonParse = <ReturnValue, DefaultValue = unknown>(
  json: string,
  defaultValue?: DefaultValue
) => {
  try {
    return JSON.parse(json) as ReturnValue
  } catch (e) {
    console.error(e)
    console.error('JSON parse error')
    return defaultValue as undefined extends DefaultValue ? undefined : DefaultValue
  }
}
