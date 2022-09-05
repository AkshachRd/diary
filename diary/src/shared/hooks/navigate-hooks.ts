import { useLocation, useNavigate } from "react-router-dom";
import { Location } from "react-router";

export const useNavigateToMain = (): (() => void) => {
    const navigate = useNavigate();
    const mainPath = "/";
    return () => navigate(mainPath);
};

export const useNavigateToRecord = (id: string, date: Date): (() => void) => {
    const navigate = useNavigate();
    const recordPath = "/record/" + id;
    return () => navigate(recordPath, { state: { date } });
};

interface LocationWithState extends Location {
    state: { date: Date };
}

export const useAppLocation = (): LocationWithState =>
    useLocation() as LocationWithState;
