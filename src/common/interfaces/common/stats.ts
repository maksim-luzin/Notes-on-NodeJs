interface IStats {
  [category: string]: {
    [status: string]: number;
  };
}

export type {IStats};
