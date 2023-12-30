/**
 * Concatenate class names
 *
 * @param args the class names to concatenate
 */
export function classNames(...args: any[]) {
  return args.filter(Boolean).join(' ')
}

/**
 * Concatenate class names based on a condition
 *
 * @param classes the class names to concatenate
 */
export function conditionalClassNames(classes: { [key: string]: boolean }) {
  return Object.keys(classes)
    .filter(key => classes[key])
    .join(' ')
}