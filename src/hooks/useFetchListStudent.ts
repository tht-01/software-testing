import { PAGE, SIZE } from "constants/constants";
import { fetchListStudent } from "modules/students";
import { useDispatch } from "react-redux";
import { Pagination } from "types";

export const useFetchListStudent = () => {
  const dispatch = useDispatch();
  const dispatchFetch = (props?: Pagination) => {
    return dispatch(
      fetchListStudent({
        size: props ? props.size : SIZE,
        page: props ? props.page : PAGE,
        isSort: props ? props.isSort : true,
      })
    );
  };
  return [dispatchFetch];
};
