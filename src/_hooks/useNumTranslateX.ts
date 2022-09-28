import { useNumChange, useNumChangeProps } from "./useNumChange";

//
export const useNumTranslateX = (props: useNumChangeProps) => {
  const data_num = useNumChange(props);
  const trans_x = `-${data_num.ix_num * 100}%`;

  return {
    ...data_num,
    trans_x,
  };
};
