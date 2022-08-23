import * as S from "./styles";
import { useLoadingContext } from "../../store/LoadingContext";

export const Loading = () => {
  const { loading } = useLoadingContext();

  return <S.LoadingContainer isLoading={loading}/>;
};