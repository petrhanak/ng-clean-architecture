const args = process.argv.slice(1),
  isDev = args.some((val) => val === '--serve')

export { isDev }
