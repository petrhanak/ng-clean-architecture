const args = process.argv.slice(1)
const isDev = args.some((val) => val === '--serve')

export { isDev }
