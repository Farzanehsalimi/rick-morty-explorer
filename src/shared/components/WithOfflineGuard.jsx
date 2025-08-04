import useIsOffline from "../../shared/hooks/useIsOffline";
// import OfflineNotice from "../OfflineNotice/OfflineNotice";

function WithOfflineGuard({ children }) {
  const isOffline = useIsOffline();
  if (isOffline) {
    return <OfflineNotice onRetry={() => window.location.reload()} />;
  }
  return children;
}

export default WithOfflineGuard;
