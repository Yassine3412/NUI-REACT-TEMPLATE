export const isEnvBrowser = () => !(window).invokeNative;

// Basic no operation function
export const noop = () => { };