export type GoogleFormValue = string | readonly string[]

export async function submitGoogleForm(formId: string, values: Record<string, GoogleFormValue>, pageHistory = '0') {
  const body = new URLSearchParams({ fvv: '1', pageHistory, submit: 'Submit' })

  Object.entries(values).forEach(([entry, value]) => {
    if (Array.isArray(value)) value.forEach((item) => body.append(`entry.${entry}`, item))
    else body.append(`entry.${entry}`, value as string)
  })

  await fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse`, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
}
