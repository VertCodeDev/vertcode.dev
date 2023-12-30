/**
 * Contatenate class names
 *
 * @param args the class names to concatenate
 */
export function classNames(...args: any[]) {
  return args.filter(Boolean).join(' ')
}