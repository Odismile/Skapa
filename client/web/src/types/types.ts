export interface TimeType {
  h: string | '00';
  mn: string | '00';
  s: string | '00';
  ms: string | '00';
}

export interface LocationInterface {
  projectId?: string;
  profilId?: string;
  talentId?: string;
}


export type CallbackFunction<T = undefined> = (value?: T) => void;

