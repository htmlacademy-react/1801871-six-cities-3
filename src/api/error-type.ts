type ErrorDetails = {
  field: string;
  messages:string[];
}

export type ErrorData = {
  path:string;
  data?:ErrorDetails[];
  message?:string;
  type: 'major' | 'minor';
}

