export enum AppRoutePath {
  home = 'home',
  writeStory = 'write-story',
}

export interface AppList {
  appName: string;
  isActive: boolean;
  appRoutePath: AppRoutePath;
}

export enum MessageType {
   FAILED = 1,
   SUCCESS= 2,
   INFO= 3,
   WARNING= 4
}

export interface ConfimationMessage {
   message: string;
   messageType?: MessageType;
   title?: string;
   okText?: string;
   cancelText?: string;
   isNotice?: boolean;
}
