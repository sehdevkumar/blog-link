export enum AppRoutePath {
  home = 'home',
  writeStory = 'write-story',
}

export interface AppList {
  appName: string
  isActive: boolean
  appRoutePath: AppRoutePath
}
